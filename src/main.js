// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入阿里巴巴矢量图标
import './fonts/iconfont.css'

//引入公共js
import 'assets/js/common.js'

//引入瀑布流插件
// import {VueMasonryPlugin} from 'vue-masonry';
// Vue.use(VueMasonryPlugin)
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
