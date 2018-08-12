<template>
    <div>
        <h3 class="icon"></h3>
        <h3 class="search"></h3>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
div {
    width: 100vw;
	height: 103rpx;
	display: flex;
	justify-content: space-between;
    align-items: center;
    h3{
        padding:0 42rpx;
    }
    .icon{
        width: 80rpx;
        height: 47rpx;
        background: url(../../static/img/dajian4.png) no-repeat center;
        background-size: contain;
    }
    .search{
        width: 32rpx;
        height: 32rpx;
        background: url(../../static/img/dajian5.png) no-repeat center;
        background-size: contain;
    }
}

</style>
