<template>
  <div>
    <main-title :thisPage=thisPage  @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
    <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
      <div :key=key v-for="(x,key) in dataList">
        <index-card :animation='animation' :goods=x @toDetail='toDetail' :index='key' :leftNone='leftNone' ></index-card>
      </div>
    </div>
    <div class="searchBox" v-if="listHide">
    <search-box :searchNew=searchNew></search-box>
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
      thisPage: "childIndex",
      dataPre: {},
      leftNone: false,
      prePage: undefined,
      listShow: true,
      listHide: false,
      dataList: [],
      hideSearch: false,
      searchNew: 0,
      animation: true
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
        this.listShow = false;
        this.searchNew = +new Date();
      }, 500);
    },
    getList() {
      this.leftNone = false;
      setTimeout(() => {
        this.leftNone = true;
      }, 200);
    },
    toDetail(x) {
      var Fly = require("flyio/dist/npm/wx");
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(request => {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly
        .get(`https://dj.majiangyun.com/type-product/${x.id}`, {})
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          wx.setStorage({
            key: "goods",
            data: JSON.stringify(x)
          });
          var arr = wx.getStorageSync("data_box");
          arr.push({
            pre_page: this.thisPage,
            pre_data: d.data,
            page: "explain"
          });
          wx.setStorageSync("data_box", arr);
          wx.setStorageSync("pre_page", this.thisPage);
          const url = "../explain/main";
          wx.navigateTo({ url });
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    exit() {
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
      this.animation = true;
    }
  },
  created() {},
  onShow() {
    this.prePage = wx.getStorageSync("pre_page");
    var arr = wx.getStorageSync("data_box");

    if (this.prePage == "none") {
      this.animation = false;
      var kelement = arr.pop();
      wx.setStorageSync("data_box", arr);
      var obj = arr[arr.length - 1];
      var page = obj.page;
      if (page != "childIndex") {
        arr.push(kelement);
        wx.setStorageSync("data_box", arr);
        // this.exit();
        // wx.setStorageSync("pre_page", "begin");
        // const url = "../loading/main";
        // wx.redirectTo({ url });
      }
      obj = arr[arr.length - 1];
      page = obj.page;
      this.prePage = obj.pre_page;
      this.dataList = obj.pre_data.data;
    } else {
      var obj = arr[arr.length - 1];
      this.prePage = obj.pre_page;
      this.dataList = obj.pre_data.data;
    }

    wx.setStorageSync("pre_page", "none");

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
  width: 100%;
}
.searchBox {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
}
.listHide {
  transform: translateY(100%);
}
.contentBox {
  position: relative;
}
</style>
