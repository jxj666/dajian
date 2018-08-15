<template>
  <div class="box">
    <image src='../../static/img/gif.gif'></image>
    <h3>加载中</h3>
    <!-- <h3>搜索中</h3> -->
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
  &.searchLoading{
  margin-top:127rpx;
  }
	image {
		width: 200rpx;
		height: 200rpx;
    display: block;
    margin: 0 auto;
	}
	h3 {
    position: relative;
    top:-15rpx;
    z-index: 10;
		font-size: 30rpx;
    line-height: 30rpx;
		font-family: PingFang-SC-Regular;
		color: rgba(102, 102, 102, 1);
    text-align: center;
    font-weight: 200;
	}
}
</style>
