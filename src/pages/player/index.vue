<template>
  <div>
    <main-title :thisPage=thisPage ></main-title>
    <div class="videoBox">
      <video :src="src" controls></video>

    </div>
    <text-card></text-card>
    <div class="listBox">
      <div :key=key v-for="(x,key) in dataList">   
        <video-card :videos=x @toVideo='toVideo' :index='0' :leftNone=leftNone></video-card>
      </div>
    </div>

  </div>

</template>

<script>
import mainTitle from "@/components/mainTitle";
import videoCard from "@/components/videoCard";
import textCard from "@/components/textCard";

export default {
  data() {
    return {
      thisPage: "player",
      prePage: undefined,
      leftNone: false,

      dataList: [
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
      ],
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    };
  },

  components: {
    mainTitle,
    videoCard,
    textCard
  },

  methods: {
    getList() {

    },
    toVideo(x) {
      wx.setStorage({
        key: "video",
        data: JSON.stringify(x)
      });
      var arr = wx.getStorageSync("data_box");
      arr.push({ pre_page: this.thisPage, pre_data: undefined });
      wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);

      const url = "../player/main";
      wx.navigateTo({ url });
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
  }
};
</script>

<style scoped lang='scss'>
.listBox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.videoBox {
  width: 737rpx;
  height: 423rpx;
  margin: 0 auto;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
