<template>
  <div>
    <div  class="search" :style='{transform:transform2}'>
      <search-input @searchText='searchText' ></search-input>
    </div>
    <div v-if="searchRes" class="listBox">
      <div class="searchText" :style={transform:transform1}  style='transition:transform 600ms;' v-if='index<12' :key="index" v-for="(x,index) in dataList" @click="detailSearch(x)">
        {{x}}
      </div>
    </div>
    <search-no v-else></search-no>
  </div>
</template>

<script>
// import mainTitle from '@/components/mainTitle'
import searchInput from "@/components/searchInput";
// import loading from '@/components/loading'
// import station from '@/components/station'
import searchNo from "@/components/searchNo";

export default {
  props: ["searchNew"],
  data() {
    return {
      searchRes: true,
      text: "",
      hideNavSearch: true,
      thisPage: "search",
      prePage: undefined,
      dataList: [],
      act: false
    };
  },
  watch: {
    searchNew: function(val, oldVal) {
      this.searchRes = true;
      this.getList();
    }
  },
  components: {
    searchInput,
    searchNo
  },
  computed: {
    transform1() {
      if (this.act) {
        return `translateY(0)`;
      } else {
        return `translateY(3000%)`;
      }
    },
    transform2() {
      if (this.act) {
        return `translateY(0)`;
        // return `rotateX(0deg)`;
      } else {
        return `translateY(-300%)`;
        // return `rotateX(90deg)`;
      }
    }
  },
  methods: {
    getList() {
      this.act = false;
      var arr = wx.getStorageSync("search_box") || [];
      if (arr.length > 0) {
        this.dataList = arr;
        setTimeout(() => {
          this.act = true;
        }, 200);
      } else {
        var Fly = require("flyio/dist/npm/wx");
        var fly = new Fly();
        fly
          .get(`http://dj.majiangyun.com/getKeyWord`, {})
          .then(d => {
            //输出请求数据
            console.log("req", d.data);
            arr = d.data.data;
            wx.setStorageSync("search_box", arr);
            this.dataList = arr;
            setTimeout(() => {
              this.act = true;
            }, 200);
          })
          .catch(err => {
            console.log(err.status, err.message);
          });
      }
    },
    detailSearch(x) {
      console.log(x);
      if (!x) {
        return;
      }
      var Fly = require("flyio/dist/npm/wx");
      var fly = new Fly();
      fly
        .get(`http://dj.majiangyun.com/search/${x}`, {})
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          if (d.data.data.length > 0) {
            wx.setStorage({
              key: "goods",
              data: JSON.stringify(x)
            });
            var arr = wx.getStorageSync("data_box");
            arr.push({ pre_page: this.thisPage, pre_data: d.data });
            wx.setStorageSync("data_box", arr);
            wx.setStorageSync("pre_page", this.thisPage);
            const url = "../explain/main";
            wx.navigateTo({ url });
          } else {
            this.searchRes = false;
            retrun;
          }
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    searchText(x) {
      this.detailSearch(x);
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
    transition-timing-function: ease-out;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateY(3000%);
  }
}
.search {
  transition-timing-function: ease-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translateY(-300%);
  // transform: rotateX(90deg);
  transition: transform 300ms;
}
</style>
