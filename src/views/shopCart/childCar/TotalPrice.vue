<template>
    <div class="TotalPrice">
        <checkButton class="totalcheck"></checkButton>
        <div class='item1'>全选</div>
        <div class='item2'>合计 {{totalPric}}</div>
        <div class='item3'>去计算({{calculation}})</div>
    </div>
</template>

<script>

import checkButton from 'components/checkButton'

export default {
    name:"TotalPrice",
    computed:{
        totalPric(){
            return '￥' + this.$store.state.carList.filter(item => {
                return item.checked   
            }).reduce((preValue,item)=>{//preValue 前一个值
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        calculation(){
            return this.$store.state.carList.filter(item =>item.checked).length
        },
    },
    components:{
        checkButton
    },
}
</script>

<style>
    .TotalPrice{
        text-align: center;
        font-size: 0.5rem;
        position: absolute;
        height: 1.2rem;
        width: 100%;
        bottom: 1.35rem;
        display: flex;
        justify-content: space-between;
        line-height: 1.2rem;
        background: #ffb5bc;
    }
    .totalcheck{
        text-align: right;
        width: 20%;
    }
    .item1{
        text-align: left;
        width: 20%;
    }
    .item2{
        text-align: left;
        width: 60%;
    }
    .item3{
        color: #fff;
        width: 30%;    
        background: #ff8917;
    }
    
</style>