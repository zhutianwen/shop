<template>
    <div class="TabBarItem" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-img"></slot>
        </div>
        <div v-else>
            <slot name="item-img-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        
        <!-- <div class="tab-img">
            <img src="~assets/images/home2.png" alt="">
        </div>
        <div class="tab-title">首页</div> -->
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    data(){
        return{
            // isActive:false
        } 
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    props:{
        path:{
            type:String,
        },
        activeColor:{
            type:String,
            default:'#ee7b85'
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    },
}
</script>

<style>
    .TabBarItem{
        flex: 1;
        text-align: center;
    }
    .tab-img{
        width: 20%;
        margin: 0 auto;
        margin-top: 0.2rem;
    }
    .tab-title{
        font-size: 0.4rem;
    }
</style>