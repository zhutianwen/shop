<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive exclude="goodListDetails">
      <router-view/>
    </keep-alive>
    <tabbar v-show="$route.name!=='goodListDetails'"></tabbar>
    <!-- <tab-bar>
      <tab-bar-item path="/home" activeStyle="#ee7b85">
        <div slot="item-img" class="tab-img">
            <img slot="item-img" src="~assets/images/home2.png" alt=""> 
        </div>
        <div slot="item-img-active" class="tab-img">
            <img slot="item-img-active" src="~assets/images/home1.png" alt="">
        </div>
        <div slot="item-text" class="tab-title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeStyle="#ee7b85">
        <div slot="item-img" class="tab-img">
            <img slot="item-img" src="~assets/images/catger2.png" alt="">
        </div>
        <div slot="item-img-active" class="tab-img">
            <img slot="item-img-active" src="~assets/images/catger1.png" alt="">
        </div>
        <div slot="item-text" class="tab-title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopCart" activeStyle="#ee7b85">
          <div slot="item-img" class="tab-img">
            <img slot="item-img" src="~assets/images/car2.png" alt="">
          </div>
          <div slot="item-img-active" class="tab-img">
            <img slot="item-img-active" src="~assets/images/car1.png" alt="">
          </div>
          <div slot="item-text" class="tab-title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mine" activeStyle="#ee7b85">
          <div slot="item-img" class="tab-img">
            <img slot="item-img" src="~assets/images/mine2.png" alt="">
          </div>
           <div slot="item-img-active" class="tab-img">
             <img slot="item-img-active" src="~assets/images/mine1.png" alt="">
          </div>
          <div slot="item-text" class="tab-title">我的</div>
      </tab-bar-item>
    </tab-bar> -->
  </div>
</template>

<script>

import tabbar from 'components/tabbar'
import TabBar from 'components/TabBar/TabBar'
import TabBarItem from 'components/TabBar/TabBarItem'

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    tabbar,
    TabBar,
    TabBarItem,
  },
  
}
</script>

<style>
  @import 'assets/css/base.css';   
</style>
