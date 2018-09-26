<template>
  <scroll-view class="max_width">
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="searchBox" v-if="listHide">
        <search-box :searchPage=thisPage :searchNew=searchNew></search-box>
      </div>
      <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
        <div class="search" v-if="prePage=='search'">
          “{{searchText}}”搜索到 {{dataList.length}} 条结果
        </div>
        <div>
          <div :key=key v-for="(x,key) in dataList">
            <video-card :animation='animation' :videos=x @toVideo='toVideo' :index='key' :leftNone=leftNone></video-card>
          </div>
        </div>
        <station v-if="dataList.length==0"></station>

      </div>

    </div>
  </scroll-view>

</template>

<script>
import mainTitle from "@/components/mainTitle";
import videoCard from "@/components/videoCard";
import searchBox from "@/components/searchBox";
import station from "@/components/station";

export default {
  data() {
    return {
      thisPage: "explain",
      prePage: undefined,
      leftNone: false,
      dataList: [],
      prePage: undefined,
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      animation: true,
      searchText: ""
    };
  },

  components: {
    mainTitle,
    videoCard,
    searchBox,
    station
  },

  methods: {

    escape2Html(str) {
      var arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
        return arrEntities[t];
      });
    },
    toSearch() {
      this.hideSearch = true;
      this.listHide = true;
      setTimeout(() => {
        this.searchNew = +new Date();
        this.listShow = false;
      }, 500);
    },
    toVideo(x) {
      wx.setStorage({
        key: "video",
        data: JSON.stringify(x)
      });

      wx.setStorageSync("pre_page", this.thisPage);
      wx.setStorageSync("player", {
        data: this.dataList,
        video: x
      });
      const url = "../player/main";
      wx.navigateTo({
        url
      });
    },
    getList() {
      this.leftNone = false;
      setTimeout(() => {
        this.leftNone = true;
      }, 200);
    },
    exit() {
      var SP = wx.getStorageSync("search_page");
      console.log(SP)
      if (SP) {
        wx.setStorageSync("search_page",false);
        return;
      }
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
    this.searchText = wx.getStorageSync("searchText");
    this.prePage = wx.getStorageSync("pre_page");

    if (this.prePage == "none") {
      this.animation = false;
    }

    var data = wx.getStorageSync("explain");
    console.log("explain", data);
    this.dataList = data.data.data.list;

    wx.setStorageSync("pre_page", "none");
    var title = this.escape2Html(data.title);
    wx.setNavigationBarTitle({
      title: title || "视频列表" //页面标题为路由参数
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
.search {
  height: 20rpx;
  width: 666rpx;
  line-height: 20rpx;
  font-size: 20rpx;
  font-family: PingFang-SC-Regular;
  color: rgba(94, 98, 98, 1);
  margin: 1rpx auto 29rpx;
}

.listBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition-timing-function: ease-in;
  -webkit-transform: translate3d(0, 0, 0);
  /*开启硬件加速*/
  transform: translateY(0);
  transition: transform 500ms;
  // position: absolute;
  top: 0;
  z-index: 200;
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
