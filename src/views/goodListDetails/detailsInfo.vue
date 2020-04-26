<template>
    <div class="detailsInfo">
        <div class="detailsInfo-title">{{goodsInfo.title}}</div>
        <div class="priceContent">
            <span class="price1">{{goodsInfo.newPrice}}</span>
            <span class="price2">{{goodsInfo.oldPrice}}</span>
            <span class="price3" :style="{background:goodsInfo.discountBgColor}">{{goodsInfo.discount}}</span>
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
    .detailsInfo{
        width: 98%;
        margin:0 auto;
        margin-top: 0.2rem;
    }
    .detailsInfo-title{
        font-size: 0.4rem;
    }
   .priceContent{
       width: 47%;
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
        right: 0;
    }
</style>