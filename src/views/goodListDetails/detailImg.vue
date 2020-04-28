<template>
    <div class="detailImg">
        <div class="detailInfo-desc">{{detailInfo.desc}}</div>
        <div v-if="detailInfo.detailImage" class="detailInfo-key">{{detailInfo.detailImage[0].key}}</div>
        <div v-if="detailInfo.detailImage" class="detailInfo-img" >
            <img v-for="(item,index) in detailInfo.detailImage[0].list"
             :key="index"
              :src="item"
              @load="imgload" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'detailImg',
    props:{
        detailInfo:{
            tyape:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            count:0,
            imgLength:0
        }
    },
    // created(){
    //     if(detailInfo.detailImage){
    //         console.log(this.detailInfo.detailImage[0].list.imgLength);
    //     }
    // },
    methods:{
        imgload(){
            //判断所有图片都加载完 进行调用
            // this.count += 1
            // if(this.count === this.imgLength){
            //     this.$emit('imgload')
            // }
            if(++this.count === this.imgLength){
                this.$emit('imgload')
            }
        },
    },
    watch:{
        detailInfo(){
            this.imgLength = this.detailInfo.detailImage[0].list.length
            // console.log(this.imgLength,'??')
        }
    },
}
</script>

<style>
    .detailImg{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.4rem;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.8rem;
    }
    .detailInfo-desc{
        font-size: 0.4rem;
        text-indent:1em;
    }
    .detailInfo-key{
        font-size: 0.4rem;
        color: black;
        margin-top:0.2rem ;
    }
    .detailInfo-img{
        margin-top: 0.4rem;
    }
</style>