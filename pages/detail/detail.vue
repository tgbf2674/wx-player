<template>
	<view class="detail">
		<view class="status_bar"></view>
		<view class="bgImg">
			<img src="http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg" alt="">
		</view>
		<view class="box-info">
			<view class="play-btn" @click="playEvent">
				<u-icon name="play-circle" size="100"></u-icon>
			</view>
			<view class="name-box">
				<text class="name">死士死士死士死士死士死士死士死士死士死士死士死士死士死士死士死士死士死士</text>
			</view>
			<view class="info-box">
				<text>日本</text>
				<text class="gap">|</text>
				<text>日语</text>
				<text class="gap">|</text>
				<text>动作片</text>
				<text class="gap">|</text>
				<text>2019</text>
			</view>
			<view class="info-box">
				<text>导演：</text>
			</view>
			<view class="info-box">
				<text>演员：</text>
			</view>
			<view class="info-box">
				<text>简介：</text>
			</view>
		</view>
		<view>
			<u-select v-model='playShow' :list="playList" confirm-text="播放" @confirm="playConfirm"></u-select>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				site: '',
				uuid: '',
				moreShow: false,
				moreList: [{
						value: 'star',
						label: '收藏'
					},
					{
						value: 'share',
						label: '分享'
					}
				],
				playShow: false,
				playList: [{
					value: '.m3u8',
					label: '第一集',
					extra: {
						site: 'okzyw',
						uuid: '451',
						url: 'https://www.baidu.com'
					}
				}],
			}
		},
		methods: {
			BackEvent() {
				this.$u.route({
					type: 'back'
				})
			},
			moreShowEvent() {
				this.moreShow = !this.moreShow
			},
			moreConfirm(e) {
				const val = e[0].value
				if (val === 'share') {}
				console.log(e, 'eee')
			},
			playEvent() {
				this.playShow = !this.playShow
			},
			playConfirm(e) {
				console.log(e, 'eee')
				const d = e[0]
				const url = `/pages/play/play?site=${d.extra.site}&uuid=${d.extra.uuid}&url=${d.extra.url}`
				this.$u.route({
					url: url
				})
			}
		},
		onLoad(opt) {
			this.site = opt.size
			this.uuid = opt.uuid
		}
	}
</script>

<style lang="scss">
	.detail {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.bgImg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 0;

			img {
				width: 100%;
				height: 60vh;
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

			.play-btn {
				position: absolute;
				top: -80rpx;
				right: 50px;
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
				margin-top: 10rpx;

				.gap {
					margin: 0 10rpx;
				}
			}
		}
	}
</style>
