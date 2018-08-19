<template>
  <div class="grid-box">
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="listBoxTotal" v-if="listShow" :class="{listHide:listHide}">
        <div class="videoBox">
          <video :src="src" controls :class="{fixedVideo:fixed}" fixed="true"></video>
        </div>
        <div class="listBox grid-var" :style={height:scrollHeight}>
          <scroll-view class="content" scroll-y="true">
            <text-card></text-card>


            <div :key=key v-for="(x,key) in dataList">
              <video-card :videos=x @toVideo='toVideo' :index='0' :leftNone=leftNone></video-card>
            </div>
          </scroll-view>

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
import videoCard from "@/components/videoCard";
import textCard from "@/components/textCard";
import searchBox from "@/components/searchBox";

export default {
  data() {
    return {
      thisPage: "player",
      prePage: undefined,
      leftNone: true,
      fixed: false,
      scrollHeight: "500px",
      dataList: [],
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew:0,
    };
  },

  components: {
    mainTitle,
    videoCard,
    textCard,
    searchBox
  },

  methods: {
    toSearch() {
      this.hideSearch = true;
      this.listHide = true;
      setTimeout(() => {
                        this.searchNew=+ new Date()

        this.listShow = false;
      }, 500);
    },
    getList() {
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
        },
        {
          title: "固件升级",
          text1: "优化线路,修复导航缺陷,增加避障功能",
          text2: "",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08143.png"
        },
        {
          title: "固件升级",
          text1: "优化线路,修复导航缺陷,增加避障功能",
          text2: "",
          url:
            "http://jxjweb.gz01.bdysite.com/img/assets/dajan/explain/08143.png"
        },
        {
          title: "固件升级",
          text1: "优化线路,修复导航缺陷,增加避障功能",
          text2: "",
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
      var rule = 750 / wx.getSystemInfoSync().windowWidth;
      var height = wx.getSystemInfoSync().windowHeight;
      // console.log(height, rule);
      this.scrollHeight = `${height * rule - (103 + 423)}rpx`;
      // console.log(this.scrollHeight);
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
      wx.setStorageSync("data_box", arr);
    } else {
      wx.setStorageSync("pre_page", "none");
    }
    wx.setNavigationBarTitle({
      title: "系列产品说明" //页面标题为路由参数
    });
    this.getList();
  },
  // //监听屏幕滚动 判断上下滚动
  // onPageScroll: function(ev) {
  //   var _this = this;
  //   var width = wx.getSystemInfoSync().windowWidth;
  //   console.log(ev.scrollTop, width / 750 * 103);
  //   if (ev.scrollTop > width / 750 * 103) {
  //     this.fixed = true;
  //   } else {
  //     this.fixed = false;
  //   }
  //   console.log(this.fixed);
  // },
  onHide() {
    this.exit();
  },
  onUnload() {
    this.exit();
  }
};
</script>

<style scoped lang='scss'>
.grid-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.grid-var {
  flex: 1;
}

.content {
  height: 100%;
}

.listBox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 500rpx;
}

.videoBox {
  width: 737rpx;
  height: 423rpx;
  margin: 0 auto;
  video {
    width: 100%;
    height: 100%;
  }
  .fixedVideo {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 750rpx;
    height: 423rpx;
    left: 0;
    right: 0;
  }
}

.listBoxTotal {
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
  width:100%;
}

.listHide {
  transform: translateY(100%);
}

.contentBox {
  position: relative;
}
</style>
