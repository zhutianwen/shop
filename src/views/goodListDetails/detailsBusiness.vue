<template>
    <div class="detailsBusiness">
        <div class="logo-name">
            <span class="logo">
                <img :src="Business.logo" alt="">
            </span> &nbsp;
            <span class="bus-name">{{Business.name}}</span>
        </div>
        <div class="bus-count">
            <div class="left-content">
                <span class="left1">
                    <span v-if="Business.cSells">{{transNumber(Business.cSells,1)}}</span>
                    <div>总销量</div>
                </span>
                <span class="left1">
                    <span>{{Business.cGoods}}</span>
                    <div>全部宝贝</div>
                </span>
            </div>
            <span style="height:1.5rem;display:inline-block;border:0.5px solid #cccccc"></span>
            <div v-if="Business.score">
                <div class="pin-fen">
                    {{Business.score[0].name}}&nbsp;&nbsp;<span>{{Business.score[0].score}}</span>
                </div>
                <div class="pin-fen">
                    {{Business.score[1].name}}&nbsp;&nbsp;<span>{{Business.score[1].score}}</span>
                </div>
                <div class="pin-fen">
                    {{Business.score[2].name}}&nbsp;&nbsp;<span>{{Business.score[2].score}}</span>
                </div>
            </div>
        </div>
        <div class="into-shop">进店逛逛</div>
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
    mounted(){
     
    },
    methods:{
        transNumber,
 
    },
}
</script>

<style>
    .detailsBusiness{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.5rem;
        position: relative;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.7rem;
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
    .bus-count{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .pin-fen{
        font-size: 0.4rem;
    }
    .pin-fen span{
        color: coral;
    }
    .left-content{
        margin-top: 0.3rem;
    }
    .into-shop{
        width: 40%;
        text-align: center;
        font-size: 0.4rem;
        margin: 0 auto;
        border-radius: 8px;
        background: #e4f2f5;
        margin-top: 0.4rem;
        height: 0.7rem;
        line-height: 0.7rem;
    }

</style>