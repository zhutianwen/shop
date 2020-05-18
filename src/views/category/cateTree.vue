<template>
    <div class="cateTree">
        <div class="cate-item" v-for="(item,index) in categoryList"
         :key="index"
          @click="cateClick(index,item)"
           :class="{cateActive:currentIndex === index}">
            {{item.title}}
        </div>
    </div>
</template>

<script>



export default {
    name:"cateTree",
    data(){
        return{
            currentIndex:0,
        }
    },
   
    methods:{
        cateClick(index,item){
            this.currentIndex = index;
            this.$emit('categoryClick',item)
        },
    },
    props:{
        categoryList:{
            type:Array,
            default(){
                return []
            }
        },
    },
}
</script>

<style>
    .cateTree{
        background: #F7F7F7;
        width: 30%;
        overflow: auto;
    }
    .cate-item{
        font-size: 0.5rem;
        padding: 0.2rem;
        /* touch-action: none; */
        text-align: center;
        padding: 0.3rem;
    }
    .cateActive{
        background: #fff;
        color: #ee0a24;
        border-left: 0.08rem solid #ee0a24;
    }
</style>