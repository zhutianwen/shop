<template>
    <div class="goodListDetails">
        <!-- 导航栏 -->
        <Details></Details>
        <scroll class="content" ref="scroll">
            <!-- 商品轮播图 -->
            <detailSwiper :topImgList="topImgList"></detailSwiper>
            <!-- 商品信息 -->
            <detailsInfo :goodsInfo="goodsInfo"></detailsInfo>
            <!-- 商家信息 -->
            <detailsBusiness :Business="Business"></detailsBusiness>
            <!-- 商品详情 -->
            <detailImg :detailInfo="detailInfo" @imgload="imgload"></detailImg>
            <!-- 商品参数 -->
            <detailitemParams :itemParams="itemParams"></detailitemParams>
            <!-- 商品评论 -->
            <detailrate :rate="rate"></detailrate>
            <!-- 推荐数据 -->
            <good-list :goods="recommends"></good-list>
        </scroll>
    </div>
</template>

<script>
import Details from './detailsNav'
import detailSwiper from './detailSwiper'
import detailsInfo from './detailsInfo'
import detailsBusiness from './detailsBusiness'
import detailImg from './detailImg'
import detailitemParams from './detailitemParams'
import detailrate from './detailrate'

import scroll from 'components/scroll'

import {getDetail,Goods,Business,getRecom} from 'network/details'

import GoodList from 'components/goods/goodlist'
import { debounce } from 'components/utils/utils'
import {itemLsten} from 'assets/js/mixin'

export default {
    name:'goodListDetails',
    data(){
        return{
            iid:'',
            topImgList:[],
            goodsInfo:{},//返回对象
            Business:{},
            detailInfo:{},
            itemParams:{},//参数
            rate:{},
            recommends:[],
            // itemImgListen:''
        }
    },
    created(){
        this.iid = this.$route.query.id
        // console.log(this.iid)
        //获取商品信息
        this.getDetail()
        //请求推荐数据
        this.getRecom()
        
    },
    mixins:[itemLsten],
    mounted(){
        // let refresh = debounce(this.$refs.scroll.refresh,50)
        // this.itemImgListen = ()=>{
        //     refresh()
        // }
        // this.$bus.$on('itemtmg',this.itemImgListen)
        // console.log('asd')
    },
    destroyed(){
        // console.log('destroyed')
        this.$bus.$off('itemtmg',this.itemImgListen)
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
                this.detailInfo = data.detailInfo
                this.itemParams = data.itemParams
                if(data.rate.cRate !=0){
                    this.rate = data.rate
                }
                // console.log(this.rate)
            })
        },
        //请求推荐数据
        getRecom(){
            getRecom().then(res=>{
                this.recommends = res.data.list
                // console.log(this.recommends)
            })
        }, 

        imgload(){
            this.$refs.scroll.refresh();
        },
    },
    components:{
        Details,
        detailSwiper,
        detailsInfo,
        detailsBusiness,
        scroll,
        detailImg,
        detailitemParams,
        detailrate,
        GoodList
        // detailGoods
    }
}
</script>

<style scoped>
    .goodListDetails{
        z-index: 999;
        background: #fff;
        height: 100vh;
        position: relative;
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