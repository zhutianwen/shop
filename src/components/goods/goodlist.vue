<template>
    <div class="goods-list">
       <goodListitem v-for="(item,index) in goods" :goodsItem='item' :key="index"></goodListitem>
    </div>
</template>

<script>
import goodListitem from './goodListitem'




export default {
    name:'goodlist',
    components:{
        goodListitem,
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>


<style>
    .goods-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 97%;
        margin: 0 auto;
        margin-top: 0.4rem;
        margin-bottom: 1.8rem;
    }
</style>

