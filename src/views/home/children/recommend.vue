<template>
    <div class="recommend">
        <div class="recommend-content">
            <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
                <div class="recommend-title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
       return{

       } 
    },
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            },
        }
    },
}
</script>

<style>
    .recommend{
        margin-top: 0.5rem;
        border-bottom: 0.3rem solid #e1e0e0;
    }
    .recommend-content{
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 1.5rem;
    }
    .recommend-item{
        text-align: center;
        width: 23%;
    }
    .recommend-item img{
        border-radius: 50%;
    }
    .recommend-title{
        font-size: 0.3rem;
        margin-top: 0.2rem;
    }
</style>

