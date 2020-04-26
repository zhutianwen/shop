<template>
    <div class="goodListDetails">
        <!-- 导航栏 -->
        <Details></Details>
        <!-- 商品轮播图 -->
        <detailSwiper :topImgList="topImgList"></detailSwiper>
        <!-- 商品信息 -->
        <detailsInfo :goodsInfo="goodsInfo"></detailsInfo>
    </div>
</template>

<script>
import Details from './detailsNav'
import detailSwiper from './detailSwiper'
import detailsInfo from './detailsInfo'

import {getDetail,Goods} from 'network/details'

export default {
    name:'goodListDetails',
    data(){
        return{
            iid:'',
            topImgList:[],
            goodsInfo:{}//返回对象
        }
    },
    created(){
        this.iid = this.$route.query.id
        // console.log(this.iid)
        this.getDetail()
        //获取商品信息
        
    },
    methods:{
        getDetail(){
            getDetail(this.iid).then(res=>{
                console.log(res)
                this.topImgList = res.result.itemInfo.topImages
                //获取商品信息
                const data = res.result
                this.goodsInfo =new Goods(data.itemInfo,data.columns,data.shopInfo.services) //创建
            })
        }
    },
    components:{
        Details,
        detailSwiper,
        detailsInfo
    }
}
</script>

<style scoped>

</style>