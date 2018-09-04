<script>

export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
-webkit-backface-visibility:hidden;
-moz-backface-visibility:hidden;
-ms-backface-visibility:hidden;
backface-visibility:hidden;
-webkit-perspective:1000;
-moz-perspective:1000;
-ms-perspective:1000;
perspective:1000;
}
</style>
