<template>
    <div class="tabControl">
        <div class="tab-control" >
            <div @click="change(index)" v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}">
                <span>{{item}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        change(index){
            this.currentIndex = index
            // console.log(this.currentIndex)
            this.$emit('tabclick',index)//将事件从内部传出去 home页面监听此点击事件
        },
    },
}
</script>

<style>
    .tabControl{
        z-index: 99;
    }
    .tab-control{
        height: 1rem;
        line-height: 1rem; 
        font-size: 0.45rem;
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .active{
        color: #ee7b85;
        border-bottom: 0.05rem solid #ee7b85; 
    }
</style>


