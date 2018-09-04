<template>
    <div class="card">
        <h3>{{video.title}}</h3>
        <p>{{video.description}}</p>
    </div>
</template>

<script>
export default {
	props:['video']
}
</script>

<style scoped lang='scss'>
.card {
	width: 666rpx;
	margin: 0 auto;
	h3 {
		line-height: 40rpx;
		height: 40rpx;
		font-size: 40rpx;
		overflow: hidden;
		font-family: PingFang-SC-Medium;
		color: rgba(94, 98, 98, 1);
		margin: 35rpx 0 30rpx;
	}
	p {
		font-size: 24rpx;
		font-family: PingFang-SC-Regular;
		color: rgba(35, 35, 35, 1);
		line-height: 40rpx;
		height: 80rpx;
		overflow: hidden;
		margin: 30rpx 0;
	}
}
</style>
