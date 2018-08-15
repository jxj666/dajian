<template>
  <div>
    <main-title :thisPage='thisPage' :hideNavSearch='hideNavSearch'></main-title>
    <search-input @searchText='searchText'></search-input>
    <div class="listBox">
      <div class="searchText" :key="index" v-for="(x,index) in dataList" @click="detailSearch(x)">
        {{x.text}}
      </div>
    </div>
    <!-- <search-no></search-no> -->
    <!-- <loading></loading> -->
    <!-- <station></station> -->
  </div>

</template>

<script>
import mainTitle from '@/components/mainTitle'
import searchInput from '@/components/searchInput'
import loading from '@/components/loading'
import station from '@/components/station'
import searchNo from '@/components/searchNo'



export default {
  data() {
    return {
      hideNavSearch: true,
      thisPage: 'search',
      prePage: undefined,
      dataList: [{ text: '依否' }, { text: '234' }, { text: '1234' }, { text: '42134234' }, { text: '依否' }, { text: '24423' }, { text: '依否' }, { text: '依否' }, { text: '234342' }, { text: '依否' }, { text: '43' }],
    }
  },

  components: {
    mainTitle,
    searchInput,
    loading,
    station,
    searchNo
  },

  methods: {
    detailSearch(x) {
      console.log(x)
                    var arr=wx.getStorageSync('data_box')   
                        arr.push({'pre_page': this.thisPage,pre_data:undefined}) 
                              wx.setStorageSync('data_box', arr)     
                                wx.setStorageSync('pre_page', this.thisPage)

      const url = '../explain/main'
      wx.navigateTo({ url })
    },
    searchText(x) {
      console.log(x)
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
      title: '大疆飞手百科'//页面标题为路由参数
    })

  },
}
</script>

<style scoped lang='scss'>
.listBox {
	margin: 0 16rpx 0 42rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: flex-start;
	.searchText {
		vertical-align: middle;
		box-sizing: border-box;
		line-height: 45rpx;
		height: 45rpx;
		font-size: 20rpx;
		background: rgba(241, 241, 241, 1);
		color: rgba(0, 0, 0, 1);
		border: 1rpx solid rgba(07, 07, 07, 0.32);
		border-radius: 8rpx;
		padding: 0 15rpx;
		display: inline-block;
		margin-bottom: 26rpx;
		margin-right: 26rpx;
		font-weight: 100;
		// flex-basis: auto;
	}
}
</style>
