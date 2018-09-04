import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default{
    config:{
        "usingComponents": {
            "txv-video":`plugin://myPlugin/video`
          }
    }

}