<template>
     <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'swiper',
    data(){
        return{

        }
    },
    props:{
        banner:{
            type:Array,
            default(){
                return []
            },
        }
    }
}
</script>

