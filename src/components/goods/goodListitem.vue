<template>
    <div class="goods-item item" @click="itemClick">
        <img v-lazy="showimg" alt="" @load="imageLoad">
        <div class="price-collect">
            <div class="goodsItem-title">{{goodsItem.title}}</div>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">
              <span class="iconfont icon-shoucang"></span> {{goodsItem.cfav}}
            </span>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showimg(){
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    // computed:{
    //     showImg(){
    //         return this.goodsItem.image ||goodsItem.show.img
    //     }
    // },
    methods:{
        imageLoad(){
            // console.log('imageLoad')
            this.$bus.$emit('itemtmg')
        },
        itemClick(){
            this.$router.push({
                path:'/goodListDetails',
                query: {
                    id:this.goodsItem.iid
                }
            })
        },
    },
}
</script>

<style>
   /* .item{
        background: #fff;
        width: 48%;
        margin-left: 1%;
        margin-top: 0.2rem;
        border-bottom-left-radius: 8px;   
        border-bottom-right-radius: 8px;
    } */
    .item{
        /* width: 49%; */
        background: #fff;
        border-bottom-left-radius: 8px;   
        border-bottom-right-radius: 8px;
        border-top-left-radius: 8px;   
        border-top-right-radius: 8px;
        margin-top: 0.15rem;
    }
    .item img{
        border-top-left-radius: 8px;   
        border-top-right-radius: 8px;
    }
    .goodsItem-title{
        font-size: 0.05rem;
        /* padding: 0 0.2rem; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin-top: 0.15rem;
    }
    .price,.collect{
        font-size: 0.05rem;
        margin-top: -0.2rem;
    }
    .price-collect{
        padding: 0 0.2rem;
        line-height: 0.5rem;
    }
    .icon-shoucang{
        font-size: 0.2rem;
    }
</style>
