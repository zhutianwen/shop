<template>
  <div class="container-water-fall">  
        <waterfall :col='col' :data="goods"  @scroll="scroll"  >  
            <template>
                <!-- <div class="goods-list"> -->
                <goodListitem v-for="(item,index) in goods" :goodsItem='item' :key="index"></goodListitem>
                <!-- </div> -->
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
    .goods-list{
        /* display: flex;
        justify-content: space-between; */
        /* flex-wrap: wrap; */
        width: 97%;
        margin: 0 auto;
        margin-top: 0.4rem;
        margin-bottom: 1.8rem;
    }
   .vue-waterfall-column{
       margin-bottom:1.5rem;
   }
    
</style>

