<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>

import tabbar from 'components/tabbar'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    tabbar,
  },
}
</script>

<style>
  @import 'assets/css/base.css';   
</style>
