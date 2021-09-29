<template>
  <view>
	  <view @click="openDetail(i)" class="wrapper" v-for="(i,j) in starList" :key='j' :arrow="false" >
		  <text>{{i.name}}</text>
		  <text class="font">{{i.type}}</text>
		  <u-button @click="deleteStar(i)" type="warning">删除</u-button>
	  </view>
  </view>
</template>

<script>
import db from "../../utils/database.js";
export default {
  data() {
    return {
      starList: [],
    };
  },
  methods: {
    openDetail(item) {
      const site = item.key.split("-")[0];
      const id = item.key.split("-")[1];
      const url = `/pages/detail/detail?site=${site}&id=${id}`;
      this.$u.route({ url: url });
    },
    async getAllStar() {
      const res = await db.getAll("star");
      if (res.flag) {
        this.starList = res.data;
      }
    },
	async deleteStar(i){
		await db.remove('star',i.key)
		this.getAllStar()
	}
  },
  onLoad() {
    this.getAllStar();
  },
  onTabItemTap() {
    this.getAllStar();
  }
};
</script>

<style lang="scss">
	.wrapper{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
		padding: 10px;
		.font{
			font-size: 12px;
			color: #909399;
		}
	}
</style>