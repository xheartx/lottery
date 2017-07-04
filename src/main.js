// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './vuex/store'
import Lottery from './components/lottery'
import Setup from './components/setup'
import Admin from './components/admin'
import Recording from './components/recording'
import { ToastPlugin } from 'vux'
// 移动端自适应方案
import '../static/js/flexible_css.js'
import '../static/js/flexible.js'
Vue.use(VueRouter)
Vue.use(ToastPlugin)
const routes = [{
  path: '/',
  component: Admin
}, {
  path: '/setup',
  component: Setup
}, {
  path: '/recording',
  component: Recording
}, {
  path: '/lottery',
  component: Lottery
}, {
  path: '*',
  component: Admin
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
