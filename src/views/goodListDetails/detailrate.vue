<template>
    <div class="detailrate" v-if="Object.keys(rate).length !==0">
        <div class="top-title">
            <span>用户评论</span>
            <span>更多</span>
        </div>
        <div class="user-info">
            <span class="user-avatar">
                <img :src="rate.list[0].user.avatar" alt="">
            </span>
            <span class="user-name">{{rate.list[0].user.uname}}</span>
        </div>
        <div class="user-rate">
            <div class="rate-content">{{rate.list[0].content}}</div>
            <div class="created-style">
                <span>{{rate.list[0].created | showDate}}</span>
                <span>{{rate.list[0].style}}</span>
            </div>
            <div class="user-img">
                <img v-for="(item,index) in rate.list[0].images" :key="index" :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>

import { formatDate } from 'components/utils/utils'

export default {
    name:'detailrate',
    props:{
        rate:{
            tyape:Object,
            default(){
                return {}
            }
        }
    },

    filters:{
        showDate(value){
        //1.将时间戳转成Date对象
        const date = new Date(value * 1000)
        //2.将date进行格式化
        return formatDate(date,'yyyy-MM-dd')
        }
    },
    //  filters: {
    //     formatDate(value) {
    //         const date = new Date(value * 1000);
    //         return formatDate(date, 'yyyy-MM-dd');
    //     }
    // }
}
</script>

<style>
    .detailrate{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.4rem;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.8rem;
    }
    .top-title{
        font-size: 0.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 0.2rem;
    }
    .user-info{
        position: relative;
        margin-top: 0.2rem;
    }
    .user-avatar{
        width: 18%;
    }
    .user-avatar img{
        border-radius:50%;
    }
    .user-name{
        font-size: 0.4rem;
        position: absolute;
        top: 0.6rem;
        margin-left: 0.3rem;
    }
    .user-avatar,.user-name{
        display: inline-block;
    }
    .rate-content{
        font-size: 0.4rem;
    }
    .created-style{
        font-size: 0.38rem;
        color: #aba8a8;
        margin-top:0.2rem;
    }
    .user-img{
        width: 20%;
        margin-top:0.2rem;
        display: flex;
    }
    .user-img img{
        padding-right: 0.2rem;
    }
</style>