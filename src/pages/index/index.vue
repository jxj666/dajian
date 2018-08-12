<template>
<div>
<main-title></main-title>

<div class="listBox">
<div  :key=item  v-for="(x,item) in list">
<index-card></index-card>
</div>
</div>

</div>

</template>

<script>
import mainTitle from '@/components/mainTitle'
import indexCard from '@/components/indexCard'


export default {
  data () {
    return {
      motto: 'Hello World',
      list:[{},{},{}],
      userInfo: {}
    }
  },

  components: {
    mainTitle,
    indexCard
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
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
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
       wx.setNavigationBarTitle({
      title: '大疆飞手百科'//页面标题为路由参数
    })
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang='scss'>
.listBox{
display: flex;
justify-content: space-around;
}
</style>
