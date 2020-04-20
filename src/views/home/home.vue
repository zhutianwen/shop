<template>
    <div class="home">
        <navbar class="home-nav">
            <div slot="center">享 购</div>
        </navbar>
        <!--   @pullingUp="loadMore" -->
        <scroll class="home-scroll"
         ref="scroll"
          :pull-up-load="true"
         
            :probe-type="3"
             @scroll="contentScroll">
            <!-- 轮播 -->
            <swiper :banner="banner"></swiper>
            <!-- 推荐 -->
            <recommend :recommend="recommend"></recommend>
            <!-- 选项卡 -->
            <tabControl class="tab-position" :titles="['流行','新款','精选']" @tabclick="tabclick" ></tabControl>   <!-- v-on:tabclick 监听点击事件 -->
            <!-- <tabControl :titles="titles"></tabControl> -->
            <!-- 商品列表 -->
            <goodlist :goods="showGoods"></goodlist>
            <!-- <goodlist :goods=" goods['pop'].list "></goodlist> -->
        </scroll>
        <!-- 回到顶部图标 -->
        <backtop @click.native="backtop" v-show="isShow"></backtop><!-- 监听组件点击事件 加上native--->
    </div>
</template>

<script>

import {getHomemultidata,getGoodsList} from 'network/home.js' //没有default 加大括号


import swiper from './children/swiper'
import recommend from './children/recommend' //有default 不用加

import navbar from 'components/navbar'
import tabControl from 'components/tabControl/tabControl'
import goodlist from 'components/goods/goodlist'
import scroll from 'components/scroll'
import backtop from 'components/backTop'
import { delay } from 'q'

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
            },
            currentType:'pop',
            isShow:false,
        }
    },
    computed:{ //计算显示goods
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        this.getHomemultidata()
        this.getGoodsList('pop')
        this.getGoodsList('new')
        this.getGoodsList('sell')
    },
    mounted(){
        const refresh = this.debounce(this.$refs.scroll.refresh,200)
         //监听img加载
        this.$bus.$on('itemtmg',()=>{
            refresh()
            // this.$refs.scroll.refresh()
        })
    },
    methods:{
        //事件监听方法
        tabclick(index){
            // console.log(index);
            switch(index){
                case 0:
                  this.currentType = "pop" 
                  break   
                case 1:
                  this.currentType = "new" 
                  break   
                case 2:
                  this.currentType = "sell"   
                  break 
            }
        },
        backtop(){
            this.$refs.scroll.scrollTo(0,0);
        },
        contentScroll(position){
            // console.log(position)
            this.isShow = -position.y > 1000
        },
        // 防抖动
        debounce(func,delay){
            let timer = null
            return function(...args){
                if(timer) clearTimeout(timer)
                timer = setTimeout(()=>{
                    func.apply(this,args)
                },delay)
            }
        },
        // loadMore(){
        //     //  console.log('上拉加载更多')
        //     this.getGoodsList(this.currentType);
        //     //刷新
        //     this.$refs.scroll.scroll.refresh();
            
        // },
        // 网络请求方法
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

            // this.$refs.scroll.finishPullUp()
        })
        }
    },
    components:{
        navbar,
        swiper,
        recommend,
        tabControl,
        goodlist,
        scroll,
        backtop
    },
}
</script>

<style>
    .home{
         background:#f6f6f6 ;
         height: 100vh;
         position: relative;
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
        /* position: sticky; */
        top:1.3rem;
        background: #fff;
    }
   .home-scroll{
       /* height: calc(100% - 1.65rem); */
       overflow: hidden;
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
   }
   
 
</style>


