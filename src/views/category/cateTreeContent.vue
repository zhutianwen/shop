<template>
    <div class="cateTreeContent">
        <div class="cateItem" v-for="(item,index) in treeContent" :key="index">
            <img :src="item.image" alt="">
            <div class="cate-title">{{item.title}}</div>
        </div>
    </div>
</template>

<script>


export default {
    name:'cateTreeContent',
    data(){
        return{
            
        }
    },
    props:{
        treeContent:{
            type:Array,
            default(){
                return []
            }
        },
    },
}
</script>

<style>
    .cateTreeContent{
        width: 70%;
        font-size: 0.5rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background: #fff; 
        overflow: auto;
    }
    .cateItem{
        width: 40%;   
        margin-top: 0.2rem; 
        text-align: center;            
    }
    .cate-title{
        margin-top: 0.2rem;
    }
</style>