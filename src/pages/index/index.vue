<template>
  <div>
    <main-title :thisPage=thisPage  @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
    <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
      <div :key=key v-for="(x,key) in dataList">
        <index-card :goods=x @toDetail='toDetail' :index='key' :leftNone='leftNone' ></index-card>
      </div>
    </div>
    <div class="searchBox" v-if="listHide" >
    <search-box :searchNew=searchNew ></search-box>
    </div>
    </div>
  </div>
</template>

<script>
import mainTitle from "@/components/mainTitle";
import indexCard from "@/components/indexCard";
import searchBox from "@/components/searchBox";

export default {
  data() {
    return {
      thisPage: "index",
      prePage: undefined,
      leftNone: false,
      dataList: [],
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew:0,
    };
  },
  components: {
    mainTitle,
    indexCard,
    searchBox
  },
  methods: {
    toSearch() {
      this.hideSearch = true;
      this.listHide = true;
      setTimeout(() => {
        this.listShow = false
        this.searchNew=+ new Date()
      }, 500);
    },
    toDetail(x) {
      wx.setStorage({
        key: "goods",
        data: JSON.stringify(x)
      });
      var arr = wx.getStorageSync("data_box");
      arr.push({ pre_page: this.thisPage, pre_data: undefined });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);
      const url = "../childIndex/main";
      wx.navigateTo({ url });
    },
    getList() {
      this.leftNone = false;
      this.dataList = [
        {
          text: false,
          id: 1,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/02.png"
        },
        {
          text: false,
          id: 2,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/03.png"
        },
        {
          text: false,
          id: 3,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/04.png"
        },
        {
          text: false,
          id: 4,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/05.png"
        },
        {
          text: false,
          id: 5,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/06.png"
        },
        {
          text: false,
          id: 6,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/07.png"
        },
        {
          text: false,
          id: 7,
          url: "http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/08.png"
        }
      ];
      setTimeout(() => {
        this.leftNone = true;
      }, 100);
    },
    exit() {
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
    }
  },
  onShow() {
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      var arr = wx.getStorageSync("data_box");
      arr.pop();
      var obj = arr[arr.length - 1];
      this.prePage = obj.pre_page;
      wx.setStorageSync("data_box", arr);
    } else {
      wx.setStorageSync("pre_page", "none");
    }
    wx.setNavigationBarTitle({
      title: "系列产品说明" //页面标题为路由参数
    });
    this.getList();
  },
  onHide() {
    this.exit();
  },
  onUnload() {
    this.exit();
  }
};
</script>

<style scoped lang='scss'>
.listBox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition-timing-function: ease-in;
  -webkit-transform: translate3d(0, 0, 0); /*开启硬件加速*/
  transform: translateY(0);
  transition: transform 500ms;
  position: absolute;
  top: 0;
  z-index: 200;
}
.searchBox {
  position: absolute;
  top: 0;
  z-index: 100;
  width:100%;
}
.listHide {
  transform: translateY(100%);
}
.contentBox {
  position: relative;
}
</style>
