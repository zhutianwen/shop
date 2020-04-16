<template>
    <div class="home">
        <navbar class="home-nav">
            <div slot="center">享 购</div>
        </navbar>
        <!-- 轮播 -->
        <swiper :banner="banner"></swiper>
        <!-- 推荐 -->
       <recommend :recommend="recommend"></recommend>
        <!-- 选项卡 -->
         <tabControl class="tab-position" :titles="['流行','新款','精选']"></tabControl>
        <!-- <tabControl :titles="titles"></tabControl> -->
        <!-- 商品列表 -->
        <goodlist :goods=" goods['pop'].list "></goodlist>

        

    </div>
</template>

<script>

import {getHomemultidata,getGoodsList} from 'network/home.js' //没有default 加大括号


import swiper from './children/swiper'
import recommend from './children/recommend' //有default 不用加

import navbar from 'components/navbar'
import tabControl from 'components/tabControl/tabControl'
import goodlist from 'components/goods/goodlist'

export default {
    data(){
        return{
            banner:[],
            recommend:[],
            // titles:[
            //     '流行',
            //     '新款',
            //     '精选'
            // ],
            goods:{
                'pop':{ page:0, list:[] },
                'new':{ page:0, list:[] },
                'sell':{ page:0, list:[] },
            }
        }
    },
    created(){
        this.getHomemultidata()
        this.getGoodsList('pop')
        this.getGoodsList('new')
        this.getGoodsList('sell')
    },
    methods:{
        getHomemultidata(){//包装一层方法
            getHomemultidata().then(res=>{
                // console.log(res)
                this.banner = res.data.banner.list
                this.recommend = res.data.recommend.list
            });
        },
        getGoodsList(type){
            const page = this.goods[type].page+1
            getGoodsList(type,page).then(res=>{
            // getGoodsList(type,1).then(res=>{
            // console.log(res)
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+1 //处理完 页码加一
        })
        }
    },
    components:{
        navbar,
        swiper,
        recommend,
        tabControl,
        goodlist,
    },
}
</script>

<style>
    .home{
         background:#f6f6f6 ;
    }
    .home-nav{
        background: #ee7b85;
        font-size:0.5rem;
        font-weight: bold;
        color: #fff;
    }
    .van-swipe__indicator{
        background-color: #fff;
        opacity: 1;
    }
    .tab-position{
        position: sticky;
        top:1.3rem;
        background: #fff;
    }
   
   
 
</style>


