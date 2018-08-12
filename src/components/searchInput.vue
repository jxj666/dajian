<template>
    <div class="search">
        <input type="text" placeholder="搜索DJI..">
        <div class="btn"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
.search{
width:666rpx;
height:54rpx;
background:rgba(243,243,243,1);
border-radius:4rpx;
margin: 0 auto 35rpx;
position: relative;
input{
    width: 100%;
    height: 100%;
    font-size:26rpx;
font-family:PingFang-SC-Regular;
color:rgba(0,0,0,1);
box-sizing: border-box;
padding: 0 72rpx 0 9rpx;

}
.btn{
width: 32rpx;
height: 32rpx;
background: url('../../static/img/dajian6.png') no-repeat center;
background-size: 100%;
position:absolute;
top:9rpx;
right: 20rpx;
}
}
</style>
