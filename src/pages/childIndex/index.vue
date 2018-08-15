<template>
  <div>
    <main-title :thisPage=thisPage></main-title>
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
      thisPage: 'childIndex',
      dataPre: {},
      dataList: [
        { text: false, id: 1, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/index1/01.png' },
        { text: false, id: 2, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/index1/02.png' },
        { text: false, id: 3, url: 'http://jxjweb.gz01.bdysite.com/img/assets/dajan/index/index1/03.png' },
      ],
    }
  },

  components: {
    mainTitle,
    indexCard
  },

  methods: {
    getList() {
      prePage: undefined,
        wx.getStorage({
          key: 'goods',
          success: (res) => {
            console.log(res.data)
            this.dataPre = JSON.parse(res.data)
          }
        })
    },
    toDetail() {
                    var arr=wx.getStorageSync('data_box')  
                         arr.push({'pre_page': this.thisPage,pre_data:undefined})  
                              wx.setStorageSync('data_box', arr)      
                               wx.setStorageSync('pre_page', this.thisPage)


      const url = '../explain/main'
      wx.navigateTo({ url })
    }
  },

  created() {

  },
  onShow() {
    this.prePage= wx.getStorageSync('pre_page');
    if(this.prePage=='none'){
      var arr = wx.getStorageSync('data_box')
      arr.pop()
      var obj=arr[arr.length-1]
      this.prePage = obj.pre_page
      console.log(obj)
      wx.setStorageSync('data_box', arr)  
    }else{
      wx.setStorageSync('pre_page', 'none');
    }

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
