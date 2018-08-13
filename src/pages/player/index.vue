<template>
  <div>
    <main-title></main-title>
    <div class="videoBox">
      <video :src="src" controls></video>

    </div>
    <text-card></text-card>
    <div class="listBox">
      <div :key=item v-for="(x,item) in list">
        <video-card></video-card>
      </div>
    </div>

  </div>

</template>

<script>
import mainTitle from '@/components/mainTitle'
import videoCard from '@/components/videoCard'
import textCard from '@/components/textCard'



export default {
  data() {
    return {
      motto: 'Hello World',
      list: [{}, {}, {}],
      userInfo: {},
      src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    }
  },

  components: {
    mainTitle,
    videoCard,
    textCard,
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created() {
    wx.setNavigationBarTitle({
      title: '系统产品说明'//页面标题为路由参数
    })
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang='scss'>
.listBox {
	display: flex;
	justify-content: space-around;
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
