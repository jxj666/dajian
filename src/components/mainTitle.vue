<template>
    <div class="nav">
        <div class="line"></div>
        <h3 class="icon" @touchstart="toIndex"></h3>
        <h3 class="search" @touchstart="toSearch" v-if="!hideSearch"></h3>
    </div>
</template>
<script>
export default {
  props: ["hideSearch", "thisPage"],
  computed: {},
  methods: {
    toIndex() {
      if (this.thisPage == "index") {
        return;
      }
      var arr = wx.getStorageSync("data_box");
      var index_box = wx.getStorageSync("index_box");
      arr.push({ pre_page: this.thisPage, pre_data: index_box });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);
      const url = "../index/main";
      wx.navigateTo({ url });
    },
    toSearch() {
      // var arr = wx.getStorageSync("data_box");
      // arr.push({ pre_page: this.thisPage, pre_data: undefined });
      // wx.setStorageSync("data_box", arr);
      // wx.setStorageSync("pre_page", this.thisPage);
      // const url = "../search/main";
      // wx.navigateTo({ url });
      this.$emit("toSearch");
    }
  }
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100vw;
  height: 103rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 500;
  background: #fff;
  .line {
    width: 100%;
    height: 1rpx;
    background: rgba(229, 229, 229, 0.67);
    position: fixed;
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
