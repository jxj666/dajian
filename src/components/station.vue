<template>
  <div class="box">
    <!-- <image src='../../static/img/dajian9.png'></image> -->
        <div class="no">404</div>

    <!-- <h3>页面飞丢了</h3> -->
    <h3>没有相关信息!</h3>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang='scss' scoped>
.box {
  margin-top: 153rpx;
	image {
		width: 220rpx;
		height: 86rpx;
    display: block;
    margin:0 auto 39rpx;
	}
    .no{
    height: 85rpx;
    color:#CCCCCC;
    font-size: 85rpx;
        margin:0 auto 39rpx;

    text-align: center;
  }
	h3 {
		font-size: 30rpx;
    line-height: 30rpx;
		font-family: PingFang-SC-Regular;
		color: rgba(102, 102, 102, 1);
    text-align: center;
    font-weight: 200;
	}
}
</style>