<template>
    <div class="card">
        <div class="card_l">
            <div class="display"></div>
        </div>
        <div class="card_r">
            <h3>固件升级</h3>
            <h5>优化线路,修复导航问题<br>版本342134</h5>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
.card {
	height: 171rpx;
	width: 666rpx;
	margin: 0 auto 42rpx;
	display: flex;
	justify-content: space-between;
	.card_l {
		width: 303rpx;
		height: 100%;
		background: #eee;
		background: url('//jxj322991.github.io/img/assets/dajan/dajian3.png') no-repeat center;
		background-size: 100%;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.display {
			width: 41rpx;
			height: 41rpx;
			background: url('../../static/img/dajian7.png') no-repeat center;
			background-size: 100%;
		}
	}
	.card_r {
		width: 360rpx;
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
