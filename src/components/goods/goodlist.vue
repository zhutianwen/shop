<template>
  <div class="container-water-fall bgColor">  
        <waterfall :col='col' :data="goods"  @scroll="scroll"  >  
            <template>
                <goodListitem v-for="(item,index) in goods" :goodsItem='item' :key="index"></goodListitem>
            </template>
        </waterfall>
    </div>
</template>

<script>

import goodListitem from './goodListitem'

export default {
    name:'goodlist',
     data(){
            return{
                data:[],
                col:2,
            }
        },
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
    },
    methods:{
        scroll(scrollData){
            // console.log(scrollData)
        },
        switchCol(col){
            this.col = col
            // console.log(this.col)
        },
    }
}
</script>


<style>
    .bgColor{
        background: #f7f7f7;
    }
    .goods-list{
        /* display: flex;
        justify-content: space-between;
        flex-wrap: wrap; 
        width: 97%;
        margin: 0 auto;
        margin-top: 0.4rem;
        margin-bottom: 1.8rem;*/
    }
    .vue-waterfall {
        width: 98%!important;

        margin: 0 auto;
    }
    .vue-waterfall-column:nth-child(2){
        margin-right: 2%;
    }
   .vue-waterfall-column{
       width: 49%!important;
       /* margin-bottom:1.4rem; */
   }
    
</style>

