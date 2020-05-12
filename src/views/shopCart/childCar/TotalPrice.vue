<template>
    <div class="TotalPrice">
        <checkButton class="totalcheck"
         :is-checked="isSelectAll"
          @click.native="allClick"></checkButton>
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
        isSelectAll(){
        //    return !(this.$store.state.carList.filter(item => !item.checked).length)
            if(this.$store.state.carList.length === 0){
                return false
            }else{
                return !this.$store.state.carList.find(item => !item.checked) //寻找到未选中的商品
            }
           
        //    for( let item of this.$store.state.carList){
        //        if(!item.checked){
        //            return false
        //        }else{
        //            return true
        //        }
        //    }
        },
    },
    methods:{
        allClick(){
            if(this.isSelectAll){//全部选中
                this.$store.state.carList.forEach(item => item.checked = false)
            }else{//未选中
                this.$store.state.carList.forEach(item => item.checked = true)
            }
        }
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