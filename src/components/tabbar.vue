<template>
    <div class="tabbar">
        <!-- <router-view /> -->
        <van-tabbar route>
            <van-tabbar-item 
            @click="tabClick(index,item.path)" 
            v-for="(item,index) in tarbar"
             :key="index"
              replace :to='item.path'>
                <div class="iconfont ico" v-html="item.icon"></div>
                <div class="bar-title">{{item.title}}</div>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                // active: 0,
                currentIndex:0,
                currentPath:'/home',
                tarbar:[
                    {
                        path:'/home',
                        title:'首页',
                        icon:'&#xe600'
                    },
                    {
                        path:'/category',
                        title:'分类',
                        icon:'&#xe603'
                    },
                    {
                        path:'/shopCart',
                        title:'购物车',
                        icon:'&#xe604'
                    },
                    {
                        path:'/mine',
                        title:'我的',
                        icon:'&#xe602'
                    },

                ]
            }
        },
        methods:{
            tabClick(index,val){
                // console.log(val)
                this.currentIndex = index;
                this.$router.push(val)
            },
        },
    
        // watch:{
        //     $route(to,from){
        //         console.log(to.path);
        //     }
        // },
    }
</script>

<style>
    
    .van-tabbar{
        height: 1.35rem;
    }
    .van-tabbar-item__text{
        font-size: 0.2rem;
    }
    .ico{
        text-align: center;
        font-size: 0.45rem;
    }
    .bar-title{
        margin-top: 0.1rem;
        font-size: 0.4rem;
    }
    .van-tabbar-item--active {
        color: #ee7b85;
    }
</style>

