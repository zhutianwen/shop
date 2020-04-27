<template>
    <div class="detailsBusiness">
        <div class="logo-name">
            <span class="logo">
                <img :src="Business.logo" alt="">
            </span> &nbsp;
            <span class="bus-name">{{Business.name}}</span>
        </div>
        <div class="bus-count">
            <div>
                <span class="left1">
                    <span v-if="Business.cSells">{{transNumber(Business.cSells,1)}}</span>
                    <div>总销量</div>
                </span>
                <span class="left1">
                    <span>{{Business.cGoods}}</span>
                    <div>全部宝贝</div>
                </span>
            </div>
            <span></span>
            <div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { transNumber } from 'components/utils/utils'

export default {
    name:'detailsBusiness',
    props:{
        Business:{
            tyape:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        transNumber
    },
}
</script>

<style>
    .detailsBusiness{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.5rem;
        position: relative;
    }
    .logo{
        display: inline-block;
        width: 15%;
    }
    .bus-name{
        font-size: 0.45rem;
        position: absolute;
        top: 0.4rem;
    }
    .left1{
        font-size: 0.4rem;
        text-align: center;
        display: inline-block;
    }
</style>