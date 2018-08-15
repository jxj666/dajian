<template>
    <div class="nav">
        <div class="line"></div>
        <h3 class="icon" @click="toIndex"></h3>
        <h3 class="search" @click="toSearch"></h3>
    </div>
</template>

<script>
export default {

    methods: {
        toIndex() {
            const url = '../index/main'
            wx.navigateTo({ url })
        },
        toSearch() {
            const url = '../search/main'
            wx.navigateTo({ url })
        },
    }
}
</script>

<style scoped lang='scss'>
.nav {
	width: 100vw;
	height: 103rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
    .line{
        width: 100%;
        height: 1rpx;
        background:     rgba(229, 229, 229, 0.67);
        position:fixed;
        top: 0;
        z-index: 100;

    }
	h3 {
		padding: 0 42rpx;
	}
	.icon {
		width: 80rpx;
		height: 47rpx;
		background: url(../../static/img/index/01.png) no-repeat center;
		background-size: contain;
	}
	.search {
		width: 32rpx;
		height: 32rpx;
		background: url(../../static/img/index/09.png) no-repeat center;
		background-size: contain;
	}
}
</style>
