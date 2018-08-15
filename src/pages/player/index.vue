<template>
  <div>
    <main-title></main-title>
    <div class="videoBox">
      <video :src="src" controls></video>

    </div>
    <text-card></text-card>
    <div class="listBox">
      <div :key=item v-for="(x,item) in dataList">
        <video-card :videos=x @toVideo=toVideo></video-card>
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
      dataList: [
        { title: '固件升级', text1: '优化线路,修复导航缺陷', text2: '版本1232', url: '//jxj322991.github.io/img/assets/dajan/explain/08143.png' },
        { title: '固件升级1', text1: '优化线路,修复导航缺陷', text2: '版本1232', url: '//jxj322991.github.io/img/assets/dajan/explain/08144.png' },
        { title: '固件升级1', text1: '优化线路,修复导航缺陷', text2: '版本1232', url: '//jxj322991.github.io/img/assets/dajan/explain/08143.png' },
        { title: '固件升级', text1: '优化线路,修复导航缺陷,增加避障功能', text2: '', url: '//jxj322991.github.io/img/assets/dajan/explain/08143.png' },


      ],
      src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    }
  },

  components: {
    mainTitle,
    videoCard,
    textCard,
  },

  methods: {
       toVideo(x) {
      wx.setStorage({
        key: 'video',
        data: JSON.stringify(x),
      })
      const url = '../player/main'
      wx.navigateTo({ url })
    }
  },

  created() {

  },
  onShow(){
    wx.setNavigationBarTitle({
      title: '系列产品说明'//页面标题为路由参数
    })
  }
}
</script>

<style scoped lang='scss'>
.listBox {
	display: flex;
	justify-content: space-around;
  flex-wrap:wrap;
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
