<template>
    <div class="detailsInfo">
        <div class="detailsInfo-title">{{goodsInfo.title}}</div>
        <div class="priceContent">
            <span class="price1">{{goodsInfo.newPrice}}</span>
            <span class="price2">{{goodsInfo.oldPrice}}</span>&nbsp;
            <span class="price3" :style="{background:goodsInfo.discountBgColor}">{{goodsInfo.discount}}</span>
        </div>
        <div class="info3" v-if="goodsInfo.columns">
            <span>{{goodsInfo.columns[0]}}</span>
            <span>{{goodsInfo.columns[1]}}</span>
            <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
        </div>
        <div class="info4" v-if="goodsInfo.services">
            <span v-for="index in goodsInfo.services.length-1" :key="index" v-if="index>0">
                <span class="icon">
                    <img :src="goodsInfo.services[index-1].icon" alt="">
                </span>
                <span>{{goodsInfo.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailsInfo',
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style>
    .detailsInfo,.info3,.info4{
        width: 98%;
        margin:0 auto;
        margin-top: 0.2rem;
    }
    .detailsInfo-title{
        font-size: 0.4rem;
    }
   .priceContent{
       position: relative;
       margin-top: 0.35rem;
   }
    .price1{
        color:#ee7b85;
        font-size: 0.5rem;
    }
    .price2{
        color: #c3c3c3;
        font-size: 0.4rem;
        text-decoration:line-through
    }
    .price3{
        display: inline-block;
        color: #fff;
        font-size: 0.35rem;
        padding: 0.05rem;
        border-radius: 5px;
        position: absolute;
        top: 0;
    }
    .info3{
        color: #989494;
        font-size: 0.4rem;
    }
    .info3{
        display: flex;
        justify-content: space-between;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.3rem;
    }
    .info4{
        text-align: center;
        font-size: 0.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.3rem;
    }
    .icon{
        width: 10%;
        display: inline-block;
    }
    
</style>