// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

// import Bus from './views/bus/bus';  
// Vue.prototype.$bus = Bus;

Vue.config.productionTip = false

//
Vue.prototype.$bus = new Vue()


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



//引入阿里巴巴矢量图标
import './fonts/iconfont.css'

//引入公共js
import 'assets/js/common.js'

//引入瀑布流插件
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

//引入vue 懒加载模块
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require('assets/images/loading.gif')
})

//解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body) 




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
