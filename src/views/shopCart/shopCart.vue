<template>
    <div class="shopCart">
        <navbar class="shop-nav">
            <div slot="center">购物车({{carLength}})</div>
        </navbar>
        <!-- 商品列表 -->
        <carItem></carItem>
        <!-- 总计 -->
        <total-price></total-price>
    </div>
</template>

<script>

import navbar from 'components/navbar'
import carItem from './childCar/carItem'
import TotalPrice from './childCar/TotalPrice'

import {mapGetters} from 'vuex'

export default {
    name:'shopCart',
    computed:{
        // carLength(){
        //     return this.$store.state.carList.length
        // }
        ...mapGetters([
            'carLength',
           
        ])
    },
    components:{
        navbar,
        carItem,
        TotalPrice
    },
}
</script>

<style>
    .shopCart{
        height: 100vh;
        position: relative;
    }
    .shop-nav{
        background: #ee7b85;
        font-size:0.5rem;
        font-weight: bold;
        color: #fff;
    }
    
</style>