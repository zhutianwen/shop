<template>
    <div class="home">
        <navbar class="home-nav">
            <div slot="center">享 购</div>
        </navbar>
        <!-- 轮播 -->
        <swiper :banner="banner"></swiper>
        <!-- 推荐 -->
       <recommend :recommend="recommend"></recommend>

    </div>
</template>

<script>
import navbar from 'components/navbar'
import {getHomemultidata} from 'network/home.js' //没有default 加大括号
import recommend from './children/recommend' //有default 不用加
import swiper from './children/swiper' 

export default {
    data(){
        return{
            banner:[],
            recommend:[],
        }
    },
    created(){
        getHomemultidata().then(res=>{
            // console.log(res)
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    },
    components:{
        navbar,
        swiper,
        recommend,
    },
}
</script>

<style>
    .home{
        background: #fff;
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
    /*  */
    
</style>


