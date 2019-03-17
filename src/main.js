import Vue from 'vue'
import app from './app.vue'
import {Header,Swipe,SwipeItem} from 'mint-ui'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
//导入router.js模块
import router from './router.js'
var vm=new Vue(
    {
        el:'#app',
        render:c=>c(app),
        router
    }
)