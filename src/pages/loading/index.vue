<template>
  <div class="box">
    <image src='../../static/img/gif.gif'></image>
    <h3>{{text}}</h3>
    <!-- <h3>搜索中</h3> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "加载中",
      thisPage: "start"
    };
  },
  onShow() {
    this.text = "加载中";
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      wx.setStorageSync("pre_page", "start");
      this.text = "返回退出";
    } else {
      this.get_user();
    }
  },
  methods: {
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
          wx.setStorageSync("pre_page", this.thisPage);
          const url = "../index/main";
          wx.navigateTo({ url });
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 235rpx;
  &.searchLoading {
    margin-top: 127rpx;
  }
  image {
    width: 200rpx;
    height: 200rpx;
    display: block;
    margin: 0 auto;
  }
  h3 {
    position: relative;
    top: -15rpx;
    z-index: 10;
    font-size: 30rpx;
    line-height: 30rpx;
    font-family: PingFang-SC-Regular;
    color: rgba(102, 102, 102, 1);
    text-align: center;
    font-weight: 200;
  }
}
</style>
