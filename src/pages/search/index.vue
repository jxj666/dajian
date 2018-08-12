<template>
  <div>
    <main-title></main-title>

    <search-input></search-input>
    <div class="listBox">
    <div class="searchText" :key="index"  v-for="(x,index) in list">
      搜索项目
    </div>
    </div>

  </div>

</template>

<script>
import mainTitle from '@/components/mainTitle'
import searchInput from '@/components/searchInput'


export default {
  data() {
    return {
      motto: 'Hello World',
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      userInfo: {}
    }
  },

  components: {
    mainTitle,
    searchInput
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
	margin: 0 16rpx 0 42rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  .searchText{
    line-height: 45rpx;
    height:45rpx;
    font-size: 20rpx;
background:rgba(241,241,241,1);
color:rgba(0,0,0,1);
border:1px solid rgba(07,07,07,0.32);
border-radius:8rpx;
padding: 0 15rpx;
display:inline-block;
margin-bottom: 26rpx;
margin-right: 26rpx;
font-weight: 100;
// flex-basis: auto;
  }
}
</style>
