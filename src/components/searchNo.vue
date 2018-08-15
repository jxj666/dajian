<template>
  <div class="box">
    <image src='../../static/img/dajian4.png'></image>
    <h3>加载中</h3>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang='scss' scoped>
.box {
  margin-top: 235rpx;
	image {
		width: 140rpx;
		height: 70rpx;
    display: block;
    margin:40rpx auto 20rpx;
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
