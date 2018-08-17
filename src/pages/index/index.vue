<template>
  <div>
    <main-title :thisPage=thisPage></main-title>

    <div class="listBox">
      <div :key=key v-for="(x,key) in dataList">
        <index-card :goods=x @toDetail='toDetail' :index='key' :leftNone='leftNone' ></index-card>
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
      thisPage: 'index',
      prePage: undefined,
      leftNone:false,
      dataList:[],
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
      var arr = wx.getStorageSync('data_box')
      arr.push({ 'pre_page': this.thisPage, pre_data: undefined })
      wx.setStorageSync('data_box', arr)
      wx.setStorageSync('pre_page', this.thisPage)
      const url = '../childIndex/main'
      wx.navigateTo({ url })
    },
    getList(){
      this.leftNone=false;
      this.dataList= [
        { text: false, id: 1, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/02.png' },
        { text: false, id: 2, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/03.png' },
        { text: false, id: 3, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/04.png' },
        { text: false, id: 4, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/05.png' },
        { text: false, id: 5, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/06.png' },
        { text: false, id: 6, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/07.png' },
        { text: false, id: 7, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/08.png' },
      ]
      setTimeout(()=>{
        this.leftNone=true;
      },100)
    }
  },
  onShow() {
    this.prePage = wx.getStorageSync('pre_page');
    if(this.prePage=='none'){
      var arr = wx.getStorageSync('data_box')
      arr.pop()
      var obj=arr[arr.length-1]
      this.prePage = obj.pre_page
      wx.setStorageSync('data_box', arr)  
    }else{
      wx.setStorageSync('pre_page', 'none');
    }
    wx.setNavigationBarTitle({
      title: '系列产品说明'//页面标题为路由参数
    })
    this.getList()
  },
  onHide(){
    this.leftNone=false;
    this.dataList=[];
  },

}
</script>

<style scoped lang='scss'>
.listBox {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>
