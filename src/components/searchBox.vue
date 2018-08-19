<template>
  <div>
    <search-input @searchText='searchText'></search-input>
    <div class="listBox">
      <div class="searchText" :key="index" v-for="(x,index) in dataList" @click="detailSearch(x)">
        {{x.text}}
      </div>
    </div>
  </div>
</template>

<script>
// import mainTitle from '@/components/mainTitle'
import searchInput from "@/components/searchInput";
// import loading from '@/components/loading'
// import station from '@/components/station'
// import searchNo from '@/components/searchNo'

export default {
  props: ["searchNew"],
  data() {
    return {
      hideNavSearch: true,
      thisPage: "search",
      prePage: undefined,
      dataList: [],
      act:false,
    };
  },
  watch: {
    searchNew: function(val, oldVal) {
      this.getList();
    }
  },
  components: {
    searchInput
  },
  computed: {
    // transform1() {
    //   if (this.act) {
    //     return `translateY(0)`;
    //   } else {
    //     return `translateY(3000%)`;
    //   }
    // }
  },
  methods: {
    getList() {
      this.act=false
      var arr = [
        { text: "遥控" },
        { text: "234" },
        { text: "1234" },
        { text: "42134234" },
        { text: "距离" },
        { text: "24423" },
        { text: "bug" },
        { text: "无人机" },
        { text: "234342" },
        { text: "大疆" },
        { text: "43" },
        { text: "大疆飞行器" },
        { text: "遥控器" },
        { text: "7588" },
        { text: "234342" },
        { text: "飞行" },
        { text: "43" }
      ];
      // for (var i = 0; i < arr.length; i++) {
      //   arr[i].transition = `transform ${100}ms ${50 * (i+1)}ms`;
      // }
      this.dataList = arr;
      // setTimeout(()=>{
      //   this.act=true
      // },200)
    },
    detailSearch(x) {
      console.log(x);
      var arr = wx.getStorageSync("data_box");
      arr.push({ pre_page: this.thisPage, pre_data: undefined });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);
      const url = "../explain/main";
      wx.navigateTo({ url });
    },
    searchText(x) {
      console.log(x);
      var arr = wx.getStorageSync("data_box");
      arr.push({ pre_page: this.thisPage, pre_data: undefined });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);
      const url = "../explain/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped lang='scss'>
.listBox {
  margin: 0 16rpx 0 42rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  .searchText {
    vertical-align: middle;
    box-sizing: border-box;
    line-height: 45rpx;
    height: 45rpx;
    font-size: 20rpx;
    background: rgba(241, 241, 241, 1);
    color: rgba(0, 0, 0, 1);
    border: 1rpx solid rgba(07, 07, 07, 0.32);
    border-radius: 8rpx;
    padding: 0 15rpx;
    display: inline-block;
    margin-bottom: 26rpx;
    margin-right: 26rpx;
    font-weight: 100;
    // transition-timing-function: ease-out;
    // -webkit-transform: translate3d(0, 0, 0);
    // transform: translateY(3000%);
  }
}
</style>
