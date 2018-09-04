<template>
  <div class="grid-box">
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="listBoxTotal" v-if="listShow" :class="{listHide:listHide}">
        <view class="videoBox">
          <video v-if="playerObj.class==2" id="showVideoBox" objectFit='fill' :src="src_fix" controls :class="{fixedVideo:fixed}" fixed="true"></video>
                 <txv-video v-if="playerObj.class ==1 " :vid="playerObj.video_id" playerid="showVideoBox" objectFit='fill' >

                 </txv-video>

        </view>
        <div class="listBox grid-var" :style={height:scrollHeight}>
          <scroll-view class="content" scroll-y="true">
           
            <text-card :video='playerObj'></text-card>


            <div :key=key v-for="(x,key) in dataList">
              <video-card :videos=x v-if='playerObj.id != x.id' @toVideo='toVideo' :index='-1' :leftNone=leftNone></video-card>

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
      // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      src: "http://static.video.qq.com/TPout.swf?vid=w0766f4ngw3&auto=1",
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      videoContext: {},
      vid: "w0766f4ngw3",
      playerObj: {}
    };
  },

  components: {
    mainTitle,
    videoCard,
    textCard,
    searchBox
  },
  computed: {
    src_fix() {
      return `http://dj.majiangyun.com/video/${this.playerObj.video_url}`;
    }
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
    getList() {
      var rule = 750 / wx.getSystemInfoSync().windowWidth;
      var height = wx.getSystemInfoSync().windowHeight;
      // console.log(height, rule);
      this.scrollHeight = `${height * rule - (103 + 423)}rpx`;
      // console.log(this.scrollHeight);

      var that = this;
      wx.getNetworkType({
        success: function(res) {
          if (res.networkType == "wifi") {
            that.videoContext = wx.createVideoContext("showVideoBox");
            that.videoContext.play();
          }
        }
      });
    },
    toVideo(x) {
      wx.setStorage({
        key: "video",
        data: JSON.stringify(x)
      });
      var arr = wx.getStorageSync("data_box");
      arr.push({
        pre_page: this.thisPage,
        pre_data: this.dataList,
        video:x,
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
    var arr = wx.getStorageSync("data_box");
    if (this.prePage == "none") {
      this.animation = false;
      arr.pop();
      wx.setStorageSync("data_box", arr);
      var obj = arr[arr.length - 1];
      this.prePage = obj.pre_page;
      this.dataList = obj.pre_data;
      this.playerObj = obj.video;
    } else {
      var obj = arr[arr.length - 1];
      this.prePage = obj.pre_page;
      this.dataList = obj.pre_data;
      this.playerObj = obj.video;
    }

    wx.setStorageSync("pre_page", "none");

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
  width: 100%;
}

.listHide {
  transform: translateY(100%);
}

.contentBox {
  position: relative;
}
</style>
