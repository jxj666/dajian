<template>
	<div class="card" :style="{	background: imgBackground,
	backgroundSize: 'contain',transform:leftClass,transition:transition1}" @click='toDetail' >
		<h3 v-if="goods.text">
			<span class="title1">御</span>
			<span class="title2">MAVIC</span>
			<span class="title3">2</span>
			<span class="title4">系列</span>
		</h3>
		<!-- <image src="/static/img/dajian3.png" mode='heightFix'></image> -->
	</div>
</template>

<script>
export default {
  props: ["goods", "index", "leftNone"],
  computed: {
    imgBackground() {
      return `#f5f9fc url(${this.goods.url}) no-repeat center right`
    },
    leftClass() {
      if (this.leftNone) {
        return `translateX(0)`
      } else {
        return `translateX(${-(this.index) * 25}%)`
      }
    },
    transition1(){
      if(this.leftNone){
        return `  transform 500ms;`
      }else{
        return ` `
      }
    }
  },
  methods: {
    toDetail() {
      this.$emit("toDetail", this.goods);
    }
  }
};
</script>

<style scoped lang='scss'>
.card {
  width: 666rpx;
  height: 262rpx;
  background: #f5f9fc;
  // background: #f5f9fc url('http://jxjweb.gz01.bdysite.com/img/assets/dajan/dajian1.png') no-repeat center right;
  // background-size: contain;
  border-radius: 10rpx;
  margin-bottom: 30rpx;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: linear;
  -webkit-transform: translate3d(0,0,0); /*开启硬件加速*/



  h3 {
    width: 350rpx;
    box-sizing: border-box;
    margin-left: 30rpx;
    vertical-align: middle;
    span {
      margin-right: 14rpx;
      font-size: 20rpx;
      vertical-align: middle;
    }
    .title1 {
      font-size: 26rpx;
      font-family: FZLTHJW--GB1-0;
      color: rgba(35, 35, 35, 1);
      // line-height: 70rpx;
    }
    .title2 {
      font-size: 32rpx;
      font-family: Dji-Demi;
      color: rgba(35, 35, 35, 1);
      // line-height: 56rpx;
    }
    .title21 {
      font-size: 26rpx;
      font-family: FZLTHJW--GB1-0;
      // line-height: 70rpx;
      color: rgba(35, 35, 35, 1);
    }
    .title3 {
      font-size: 32rpx;
      font-family: Dji-Demi;
      color: rgba(35, 35, 35, 1);
      // line-height: 56rpx;
      font-weight: 100;
    }
    .title4 {
      font-size: 26rpx;
      font-family: FZLTHJW--GB1-0;
      color: rgba(102, 102, 102, 1);
      // line-height: 45rpx;
    }
  }
  // image{
  //   height: 262rpx;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   z-index: 10;
  // }
}
</style>
