<template>
  <div class="box">
    <image src='../../static/img/gif.gif'></image>
    <h3>{{text}}</h3>
    <!-- <h3>搜索中</h3> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "加载中",
      thisPage: "loading"
    };
  },
  onShow() {
    this.text = "加载中";
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      wx.setStorageSync("pre_page", "start");
      this.text = "返回退出";
    } else {
      setTimeout(() => {
        var arr = wx.getStorageSync("data_box");
        arr.push({ pre_page: this.thisPage, pre_data: undefined });
        wx.setStorageSync("data_box", arr);
        wx.setStorageSync("pre_page", this.thisPage);
        const url = "../index/main";
        wx.navigateTo({ url });
      }, 1000);
    }
  },
  created() {
    wx.setStorageSync("data_box", [{ pre_page: "start" }]);
    wx.setStorageSync("pre_page", "start");
  }
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 235rpx;
  &.searchLoading {
    margin-top: 127rpx;
  }
  image {
    width: 200rpx;
    height: 200rpx;
    display: block;
    margin: 0 auto;
  }
  h3 {
    position: relative;
    top: -15rpx;
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
