<template>
  <div>
    <main-title></main-title>
    <div class="listBox">
      <div :key=item v-for="(x,item) in dataList">
        <index-card :goods=x @toDetail='toDetail'></index-card>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from '@/components/mainTitle'
import indexCard from '@/components/indexCard'


export default {
  data() {
    return {
      dataPre: {},
      dataList: [
        { text: false, id: 1, url: '//jxj322991.github.io/img/assets/dajan/index/index1/01.png' },
        { text: false, id: 2, url: '//jxj322991.github.io/img/assets/dajan/index/index1/02.png' },
        { text: false, id: 3, url: '//jxj322991.github.io/img/assets/dajan/index/index1/03.png' },
      ],
    }
  },

  components: {
    mainTitle,
    indexCard
  },

  methods: {
    getList() {
      wx.getStorage({
        key: 'goods',
        success: (res) => {
          console.log(res.data)
          this.dataPre = JSON.parse(res.data)
        }
      })
    },
    toDetail() {
      const url = '../explain/main'
      wx.navigateTo({ url })
    }
  },

  created() {

  },
  onShow() {
    wx.setNavigationBarTitle({
      title: '系列产品说明'//页面标题为路由参数
    })
    this.getList();
  }
}
</script>

<style scoped lang='scss'>
.listBox {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>
