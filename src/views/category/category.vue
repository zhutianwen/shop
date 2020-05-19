<template>
    <div class='category'>
        <nav-bar class="category-nav">
            <div slot="center">商品分类</div>
        </nav-bar>
        <!-- 侧边栏 -->
        <div class="cateGoryContent">
            <cateTree @categoryClick="categoryClick" :categoryList="categoryList"></cateTree>
            <cateTreeContent :treeContent="treeContent"></cateTreeContent>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/navbar'
import cateTree from './cateTree'
import cateTreeContent from './cateTreeContent'

import scroll from 'components/scroll'

import {getCategory,getSubCategory} from 'network/catedory'

export default {
    name:'category',
    data(){
        return{
            categoryList:[],
            treeContent:[],
            maitKey:3627,
        }
    },
    created(){
        this.getCategory();
        this.getSubCategory();
    },
    methods:{
        getCategory(){
            getCategory().then(res => {
                this.categoryList = res.data.category.list
                // console.log(this.categoryList)
            })
        },
        getSubCategory(){
            getSubCategory(this.maitKey).then(res => {
                this.treeContent = res.data.list
            })
        },
        categoryClick(item){
            this.maitKey = item.maitKey
            // console.log(this.maitKey);
            getSubCategory(this.maitKey).then(res => {
                this.treeContent = res.data.list
            })
        }
    },
    components:{
        NavBar,
        cateTree,
        cateTreeContent,
        scroll
    },        
}
</script>

<style>
    .category{
        position: relative;
        height: 100vh;
    }
    .category-nav{
        font-size:0.5rem;
        font-weight: bold;
        color: #fff;
        background: #ee7b85;
    }
    .cateGoryContent{
       display: flex;
        position: fixed;
        top: 1.3rem;
        bottom: 1.35rem;
        right: 0;
        left: 0;
        overflow: hidden;
    }
</style>
