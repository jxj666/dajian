<template>
	<div class="card" @click='toVideo' :style={transform:leftClass,transition:transition1}>
		<div class="card_l" :style="{background: imgBackground,
	backgroundSize: '100%'}">
			<div class="display"></div>
		</div>
		<div class="card_r">
			<h3>{{videos.title}}</h3>
			<h5>{{videos.text1}}<br>{{videos.text2}}</h5>
		</div>
	</div>
</template>

<script>
export default {
  props: ["videos", "index", "leftNone"],
  computed: {
    imgBackground() {
      return `url(${this.videos.url}) no-repeat center`;
    },
    leftClass() {
      if (this.leftNone) {
        return `translateX(0)`
      } else {
        return `translateX(${-(this.index) * 25}%)`
      }
    },
    transition1() {
      if (this.leftNone) {
        return `  transform 500ms;`;
      } else {
        return ` `;
      }
    }
  },
  methods: {
    toVideo() {
      this.$emit("toVideo", this.videos);
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  height: 171rpx;
  width: 666rpx;
  margin: 0 auto 42rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  transition-timing-function: linear;
  -webkit-transform: translate3d(0,0,0); /*开启硬件加速*/

  .card_l {
    width: 303rpx;
    height: 100%;
    background: #999;

    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .display {
      width: 36rpx;
      height: 41rpx;
      background: url("../../static/img/explain/08141.png") no-repeat center;
      background-size: 100%;
    }
  }
  .card_r {
    width: 330rpx;
    height: 100%;
    background: #fff;
    position: relative;
    h3 {
      line-height: 36rpx;
      height: 36rpx;
      font-size: 38rpx;
      font-family: PingFang-SC-Medium;
      color: rgba(94, 98, 98, 1);
      text-align: right;
      overflow: hidden;
      margin-top: 9rpx;
      font-weight: 400;
    }
    h5 {
      font-size: 24rpx;
      font-family: PingFang-SC-Regular;
      color: rgba(35, 35, 35, 1);
      line-height: 40rpx;
      height: 80rpx;
      overflow: hidden;
      text-align: right;
      margin-top: 35rpx;
      font-weight: 200;
    }
  }
}
</style>
