<template>
  <div>
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="searchBox" v-if="listHide">
        <search-box :searchNew=searchNew ></search-box>
      </div>
      <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
        <div class="search" v-if="prePage=='search'">
          “Phantom”搜索到23条结果
        </div>
        <div>
          <div :key=key v-for="(x,key) in dataList">
            <video-card :videos=x @toVideo='toVideo' :index='key' :leftNone=leftNone></video-card>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import mainTitle from "@/components/mainTitle";
import videoCard from "@/components/videoCard";
import searchBox from "@/components/searchBox";

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
      searchNew: 0
    };
  },

  components: {
    mainTitle,
    videoCard,
    searchBox
  },

  methods: {
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
      var arr = wx.getStorageSync("data_box");
      arr.push({
        pre_page: this.thisPage,
        pre_data: undefined
      });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);

      const url = "../player/main";
      wx.navigateTo({
        url
      });
    },
    getList() {
      this.leftNone = false;
      this.dataList = [
        {
          title: "固件升级",
          text1: "优化线路,修复导航缺陷",
          text2: "版本1232",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08143.png"
        },
        {
          title: "固件升级1",
          text1: "优化线路,修复导航缺陷",
          text2: "版本1232",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08144.png"
        },
        {
          title: "固件升级1",
          text1: "优化线路,修复导航缺陷",
          text2: "版本1232",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08143.png"
        },
        {
          title: "固件升级",
          text1: "优化线路,修复导航缺陷,增加避障功能",
          text2: "",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08143.png"
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
  created() {},
  onShow() {
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      var arr = wx.getStorageSync("data_box");
      arr.pop();
      var obj = arr[arr.length - 1];
      this.prePage = obj.pre_page;
      console.log(obj);
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
.search {
  height: 20rpx;
  width: 666rpx;
  line-height: 20rpx;
  font-size: 20rpx;
  font-family: PingFang-SC-Regular;
  color: rgba(94, 98, 98, 1);
  margin: 0 auto 29rpx;
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
  position: absolute;
  top: 0;
  z-index: 200;
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
