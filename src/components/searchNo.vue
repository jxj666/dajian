<template>
  <div class="box">
    <image src='../../static/img/dajian8.png'></image>
    <h3>搜索无结果</h3>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang='scss' scoped>
.box {
  margin-top: 121rpx;
	image {
		width: 146rpx;
		height: 146rpx;
    display: block;
    margin:0rpx auto 40rpx;
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
