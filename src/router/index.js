import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import category from '@/views/category/category'
import shopCart from '@/views/shopCart/shopCart'
import mine from '@/views/mine/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',redirect:'/home',component:home},
    {path:'/home',name:'home',component:home},
    {path:'/category',name:'category',component:category},
    {path:'/shopCart',name:'shopCart',component:shopCart},
    {path:'/mine',name:'mine',component:mine},
  ]
})
