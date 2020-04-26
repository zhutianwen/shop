<template>
    <div class="detailSwiper">
        <van-swipe :autoplay="3000" indicator-color="red">
            <van-swipe-item class="detailSwiperitem" v-for="(item,index) in topImgList" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props:{
        topImgList:{
            type:Array,
            default(){
                return []
            }
        }
    }, 
}
</script>

<style scoped>
    .detailSwiperitem{
        height: 10rem!important;
        overflow: hidden;
    }
</style>