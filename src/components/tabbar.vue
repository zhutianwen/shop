<template>
    <div class="tabbar">
        <van-tabbar v-model="active">
            <van-tabbar-item @click="goHome" class="iconfont icon-tabbar icon-shouye">首页</van-tabbar-item>
            <van-tabbar-item @click="goCategory" class="iconfont icon-tabbar icon-fenlei-0">分类</van-tabbar-item>
            <van-tabbar-item @click="goCart" class="iconfont icon-tabbar icon-gouwuche">购物车</van-tabbar-item>
            <van-tabbar-item @click="goMine" class="iconfont icon-tabbar icon-wodedangxuan">我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods:{
            goHome(){
                this.$router.push({
                    path:'/home'
                })
            },
            goCategory(){
                this.$router.push({
                    path:'/category'
                })
            },
            goCart(){
                this.$router.push({
                    path:'/shopCart'
                })
            },
            goMine(){
                this.$router.push({
                    path:'/mine'
                })
            },

        },
        watch: {
        //监听路由变化
            $route(to) {
                this.tabbarActive(to.path);
                console.log(this.tabbarActive(to.path))
            }
        },
        
    }
</script>

<style>
    .van-tabbar{
        height: 1.35rem;
    }
    .van-tabbar-item__text{
        font-size: 0.2rem;
    }
    .icon-tabbar{
        font-size: 0.45rem;
    }
</style>

