<template>
    <div class="goods-list" v-masonry gutter = 5 transition-duration="0.3s" item-selector=".item">
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
        width: 97%;
        margin: 0 auto;
        margin-top: 0.4rem;
        margin-bottom: 1.8rem;
    }
</style>

