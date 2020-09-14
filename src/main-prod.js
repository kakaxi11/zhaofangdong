import Vue from 'vue'
import App from './App.vue'
import router from './router'

//全局样式
import '@/assets/css/global.css'
// 字体图标
import '@/assets/fonts/iconfont.css'
//树形table 已弃用
// import TreeTable from 'vue-table-with-tree-grid'


//导入NProgress包对应的js和css

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://shares.yixingyige.com/'
//再request拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
   return config
})
//在response拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config

})
Vue.prototype.$http = axios


Vue.config.productionTip = false

// Vue.component('tree-table', TreeTable)

//将富文本编辑器注册为全局可用的组件

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
