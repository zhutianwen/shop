<template>
    <div class="goodListDetails">
        <!-- 导航栏 -->
        <Details></Details>
        <scroll class="content">
            <!-- 商品轮播图 -->
            <detailSwiper :topImgList="topImgList"></detailSwiper>
            <!-- 商品信息 -->
            <detailsInfo :goodsInfo="goodsInfo"></detailsInfo>
            <!-- 商家信息 -->
            <detailsBusiness :Business="Business"></detailsBusiness>
        </scroll>
    </div>
</template>

<script>
import Details from './detailsNav'
import detailSwiper from './detailSwiper'
import detailsInfo from './detailsInfo'
import detailsBusiness from './detailsBusiness'

import scroll from 'components/scroll'

import {getDetail,Goods,Business} from 'network/details'

export default {
    name:'goodListDetails',
    data(){
        return{
            iid:'',
            topImgList:[],
            goodsInfo:{},//返回对象
            Business:{},
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
                this.Business =new Business(data.shopInfo) //创建
            })
        }
    },
    components:{
        Details,
        detailSwiper,
        detailsInfo,
        detailsBusiness,
        scroll
    }
}
</script>

<style scoped>
    .goodListDetails{
        position: relative;
        z-index: 999;
        background: #fff;
        height: 100vh;
    }
    .content{
       position: absolute;
       top: 1.3rem;
       bottom: 0;
       left: 0;
       right: 0; 
      
      /* height: calc(100% - 1.3rem); */
       
    }
</style>