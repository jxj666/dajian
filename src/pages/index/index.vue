<template>
  <div>
    <main-title></main-title>

    <div class="listBox">
      <div :key=item v-for="(x,item) in dataList">
        <index-card :goods="x" @toDetail='toDetail' ></index-card>
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
      dataList: [
        { text: false, id: 1, url: '//jxj322991.github.io/img/assets/dajan/index/02.png' },
        { text: false, id: 2, url: '//jxj322991.github.io/img/assets/dajan/index/03.png' },
        { text: false, id: 3, url: '//jxj322991.github.io/img/assets/dajan/index/04.png' },
        { text: false, id: 4, url: '//jxj322991.github.io/img/assets/dajan/index/05.png' },
        { text: false, id: 5, url: '//jxj322991.github.io/img/assets/dajan/index/06.png' },
        { text: false, id: 6, url: '//jxj322991.github.io/img/assets/dajan/index/07.png' },
        { text: false, id: 7, url: '//jxj322991.github.io/img/assets/dajan/index/08.png' },
      ],
    }
  },
  components: {
    mainTitle,
    indexCard
  },
  methods: {
    toDetail(x) {
      wx.setStorage({
        key: 'goods',
        data: JSON.stringify(x),
      })
      const url = '../childIndex/main'
      wx.navigateTo({ url })
    },
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
	flex-wrap: wrap;
}
</style>
