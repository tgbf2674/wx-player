<template>
  <view class="detail">
    <view class="bgImg">
      <img :src="detail.pic" />
    </view>
    <view class="boxImg">
      <view class="boxImgWrapper">
        <img :src="detail.pic" />
      </view>
    </view>
    <view class="box-info">
      <view class="star-btn" @click="starEvent">
        <u-icon v-if="!starShow" name="star" size="60"></u-icon>
        <u-icon v-if="starShow" name="star-fill" color="#ff4445" size="60"></u-icon>
      </view>
      <view class="play-btn" @click="playEvent">
        <u-icon name="play-circle" color="#6dd143" size="100"></u-icon>
      </view>
      <view class="name-box">
        <text class="name">{{ detail.name }}</text>
      </view>
      <view class="info-box">
        <text>{{ detail.area }}</text>
        <text class="gap">|</text>
        <text>{{ detail.lang }}</text>
        <text class="gap">|</text>
        <text>{{ detail.type }}</text>
        <text class="gap">|</text>
        <text>{{ detail.year }}</text>
        <text class="gap">|</text>
        <text>{{ detail.note }}</text>
      </view>
      <view class="info-box">
        <text>导演: {{ detail.director }}</text>
      </view>
      <view class="info-box">
        <text>演员: {{ detail.actor }}</text>
      </view>
      <view class="info-box">
        <text>简介: {{ detail.des }}</text>
      </view>
    </view>
    <view>
      <u-select
        v-model="playShow"
        :list="playList"
        confirm-text="播放"
        @confirm="playConfirm"
      ></u-select>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import db from "../../utils/database.js";
import http from "../../utils/request.js";
export default {
  data() {
    return {
      siteKey: "",
      id: "",
      detail: {},
      playShow: false,
      playList: [],
      starShow: false
    };
  },
  methods: {
    BackEvent() {
      uni.navigateBack();
    },
    moreShowEvent() {
      this.moreShow = !this.moreShow;
    },
    async moreConfirm(e) {
      const val = e[0].value;
      if (val === "star") {
        let s = {...this.detail}
        s.key = `${this.siteKey}-${this.id}`
        const res = await db.add('star', s)
        if (res.flag) {
          this.$refs.uToast.show({
            title: '收藏成功',
            type: 'success',
            duration: '2300'
          })
        }
      }
    },
    async playEvent() {
      if (this.playList.length <= 1) {
        const d = this.playList[0];
        const url = `/pages/play/play?site=${d.extra.site}&id=${d.extra.id}&name=${d.label}&url=${d.value}`;
        await this.addHistory(d.label, d.value)
        this.$u.route({ url: url });
      } else {
        this.playShow = !this.playShow;
      }
    },
    async playConfirm(e) {
      const d = e[0];
      const url = `/pages/play/play?site=${d.extra.site}&id=${d.extra.id}&name=${d.label}&url=${d.value}`;
      await this.addHistory(d.label, d.value)
      this.$u.route({ url: url });
    },
    async addHistory (label, url) {
      let h = {...this.detail}
      h.key = `${this.siteKey}-${this.id}`
      const res = await db.get('history', `${this.siteKey}-${this.id}`)
      if (!res.flag) {
        h.label = label
        h.url = url
        await db.add('history', h)
      }
    },
    async getDetail(key, id) {
      const res = await http.detail(key, id);
      this.detail = res;
      const arr = [];
      let num = 1
      for (const i of res.m3u8List) {
        const j = i.split('$')
        let label = res.m3u8List.length > 1 ? `第${num}集`: this.detail.name
        if (j.length > 1) {
          for (let m = 0; m < j.length; m++) {
            if (j[m].indexOf('.m3u8') >= 0 && j[m].startsWith('http')) {
              let d = {
                index: i,
                value: j[m],
                label: label,
                extra: {
                  site: key,
                  id: id,
                },
              };
              arr.push(d);
              break
            }
          }
        } else {
          let d = {
            index: i,
            value: j[0],
            label: label,
            extra: {
              site: key,
              id: id,
            },
          };
          arr.push(d);
        }
        num++
      }
      this.playList = arr;
    },
    async checkStar () {
      const res = await db.get('star', `${this.siteKey}-${this.id}`)
      this.starShow = res.flag
    },
    async removeStar () {
      const res = await db.remove('star', `${this.siteKey}-${this.id}`)
      if (res.flag) {
        this.$refs.uToast.show({ title: '移除收藏成功', type: 'success', duration: '1500' })
      } else {
        this.$refs.uToast.show({ title: '移除收藏失败', type: 'warning', duration: '1500' })
      }
      this.checkStar()
    },
    async addStar () {
      let s = {...this.detail}
      s.key = `${this.siteKey}-${this.id}`
      const res = await db.add('star', s)
      if (res.flag) {
        this.$refs.uToast.show({ title: '添加收藏成功', type: 'success', duration: '1500' })
      } else {
        this.$refs.uToast.show({ title: '添加收藏失败', type: 'warning', duration: '1500' })
      }
      this.checkStar()
    },
    starEvent() {
      if (this.starShow) {
        this.removeStar()
      } else {
        this.addStar()
      }
    }
  },
  onLoad(opt) {
    this.siteKey = opt.site;
    this.id = opt.id;
    this.getDetail(opt.site, opt.id);
    this.checkStar()
  },
};
</script>
<style lang="scss" scoped>
.detail {
 
  .bgImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    filter: blur(3px);
    img {
      width: 100%;
      height: 60vh;
    }
  }
  .boxImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    .boxImgWrapper{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 55vh;
      img{
        width: 24vh;
        height: 30vh;
        margin: 0 auto;
        border: 3px solid #fff;
        box-shadow: 0px 0px 20px #acacac;
      }
    }
  }
  .box-info {
    width: 100%;
    height: auto;
    padding: 40px 30px;
    border-radius: 30px;
    background-color: #FFFFFF;
    position: absolute;
    margin-top: 50vh;
    z-index: 1;
    .star-btn {
      position: absolute;
      top: -60rpx;
      right: 240rpx;
      padding: 20rpx;
      border-radius: 50%;
      background-color: #FFFFFF;
      border: 1px solid #f8f8f8;
    }
    .play-btn {
      position: absolute;
      top: -80rpx;
      right: 100rpx;
      padding: 20rpx;
      border-radius: 50%;
      background-color: #FFFFFF;
      border: 1px solid #f8f8f8;
    }
    .name-box {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .name {
        font-size: 40rpx;
      }
    }
    .info-box {
      margin-top: 20rpx;
      .gap {
        margin: 0 10rpx;
      }
    }
  }
}
</style>