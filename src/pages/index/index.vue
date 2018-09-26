<template>
  <scroll-view class="max_width">
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
        <div :key=key v-for="(x,key) in dataList">
          <index-card :animation='animation' :goods=x @toDetail='toDetail' :index='key' :leftNone='leftNone'></index-card>
        </div>
      </div>
      <div class="searchBox" v-if="listHide">
        <search-box :searchPage=thisPage :searchNew=searchNew></search-box>
      </div>
    </div>
  </scroll-view>
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
    showIndex() {
      var data = wx.getStorageSync("index");
      console.log(data);
      if (!data) {
        return;
      }
      this.dataList = data.data.data;
      if (this.prePage == "none") {
        this.animation = false;
      }
      wx.setStorageSync("pre_page", "none");
      wx.setNavigationBarTitle({
        title: "大疆飞手百科" //页面标题为路由参数
      });
      this.getList();
    },
    get_user() {
      wx.setStorageSync("data_box", [{ pre_page: "begin" }]);
      wx.setStorageSync("pre_page", "begin");
      var _this = this;
      wx.login({
        success: function(res) {
          if (res.code) {
            console.log(res);
            var Fly = require("flyio/dist/npm/wx");
            var fly = new Fly();
            fly
              .post("https://dj.majiangyun.com/wechatLogin", {
                code: res.code
              })
              .then(d => {
                //输出请求数据
                console.log("req", d.data);
                wx.setStorageSync("YX-SESSIONID", d.data.data.sessionId);

                _this.start_index();
              })
              .catch(err => {
                console.log(err.status, err.message);
              });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    start_index() {
      var Fly = require("flyio/dist/npm/wx");
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(request => {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly
        .get("https://dj.majiangyun.com/", {})
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          wx.setStorageSync("index", {
            pre_page: this.thisPage,
            data: d.data,
            page: "index"
          });
          // wx.setStorageSync("pre_page", this.thisPage);
          this.showIndex();
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    toSearch() {
      this.hideSearch = true;
      this.listHide = true;
      setTimeout(() => {
        this.listShow = false;
        this.searchNew = +new Date();
      }, 500);
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
        .get(`https://dj.majiangyun.com/type/${x.id}`, {})
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          wx.setStorage({
            key: "goods",
            data: JSON.stringify(x)
          });
          // var arr = wx.getStorageSync("data_box");
          // arr.push({
          //   pre_page: this.thisPage,
          //   pre_data: d.data,
          //   page: "childIndex"
          // });
          // wx.setStorageSync("data_box", arr);
          wx.setStorageSync("pre_page", this.thisPage);

          var url;
          if (d.data.data.type == "series") {
            wx.setStorageSync("childIndex", {
              title: x.title,
              data: d.data
            });

            url = "../childIndex/main";
          } else {
            wx.setStorageSync("explain", {
              title: x.title,
              data: d.data
            });

            url = "../explain/main";
          }
          this.exit();
          wx.navigateTo({ url });
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    getList() {
      this.leftNone = false;
      setTimeout(() => {
        this.leftNone = true;
      }, 200);
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
  onShow() {
    wx.setStorageSync("search_page", "none");
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      this.animation = false;

    }

    if (this.prePage == "none") {
      console.log("back");
      this.showIndex();
    } else {
      console.log("start");
      this.get_user();
    }
  },
  onLoad() {},
  onHide() {
      // this.exit();
  },
  onUnload() {
      // this.exit();
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
  // position: absolute;
  top: 0;
  z-index: 200;
  width: 100%;
}
.searchBox {
  // position: absolute;
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
