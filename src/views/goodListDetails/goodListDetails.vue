<template>
    <div class="goodListDetails">
        <!-- 导航栏 -->
        <Details @titleClick = "titleClick" ref = "nav"></Details>
        <scroll class="content" ref="scroll" @scroll = "detailCon" :probe-type="3">
            <!-- 商品轮播图 -->
            <!-- <ul>
                <li v-for="item in $store.state.carList">{{item}}</li>
            </ul> -->
            <detailSwiper :topImgList="topImgList"></detailSwiper>
            <!-- 商品信息 -->
            <detailsInfo :goodsInfo="goodsInfo"></detailsInfo>
            <!-- 商家信息 -->
            <detailsBusiness :Business="Business"></detailsBusiness>
            <!-- 商品详情 -->
            <detailImg :detailInfo="detailInfo" @imgload="imgload"></detailImg>
            <!-- 商品参数 -->
            <detailitemParams ref="params" :itemParams="itemParams"></detailitemParams>
            <!-- 商品评论 -->
            <detailrate ref="rate" :rate="rate"></detailrate>
            <!-- 推荐数据 -->
            <good-list ref="recommend" :goods="recommends"></good-list>
        </scroll>
        <!-- 底部工具栏 -->
        <detail-bar @addCar="addCar"></detail-bar>
        <!-- 回到顶部图标 -->
        <backtop @click.native="backtop" v-show="isShow"></backtop>
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
import detailBar from './detailBar'

import scroll from 'components/scroll'

import {getDetail,Goods,Business,getRecom} from 'network/details'

import GoodList from 'components/goods/goodlist'
import { debounce } from 'components/utils/utils'
import {itemLsten,backTop} from 'assets/js/mixin'

import { Toast } from 'vant';
import { mapActions } from 'vuex'

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
            titleTop:[],
            getTitleTop:'',//防抖
            currentIndex:""
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

        //防抖
        this.getTitleTop = debounce(()=>{
            this.titleTop = [];
            this.titleTop.push(0);
            this.titleTop.push(this.$refs.params.$el.offsetTop);
            this.titleTop.push(this.$refs.rate.$el.offsetTop);
            this.titleTop.push(this.$refs.recommend.$el.offsetTop);
            this.titleTop.push(Number.MAX_VALUE)
            // console.log(this.titleTop)
        },100) 
    },
    mixins:[itemLsten,backTop],
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
        ...mapActions([
            'addCart'
        ]),
        getDetail(){
            getDetail(this.iid).then(res=>{
                // console.log(res)
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
            // 图片加载完成后 获取高度
            // this.titleTop.push(0);
            // this.titleTop.push(this.$refs.params.$el.offsetTop);
            // this.titleTop.push(this.$refs.rate.$el.offsetTop);
            // this.titleTop.push(this.$refs.recommend.$el.offsetTop);
            this.getTitleTop();
            
        },
        titleClick(index){
            // console.log(index)
            this.$refs.scroll.scrollTo(0,-this.titleTop[index],200)
        },
        detailCon(position){
            // console.log(position)
            //获取y值
            let positionY = -position.y
            //positionY 与主题值比较 0, 15550, 16714, 16938
            //positionY 在0和15550之间 index = 0
            //positionY 在15550和16714之间 index = 1
            //positionY 在16714和16938之间 index = 2
            //positionY 超过16938 index = 3
            let length = this.titleTop.length;
            for(let i = 0;i < length-1;i++){
                // i * 1
                // if(this.currentIndex !==i && ((i<length-1 && positionY >= this.titleTop[i] && positionY < this.titleTop[i+1]) || (i === length-1 && positionY >= this.titleTop[i]))){
                //     this.currentIndex = i
                //     // console.log(this.currentIndex);
                //     this.$refs.nav.currentIndex = this.currentIndex
                // }
                if(this.currentIndex !==i &&(positionY >= this.titleTop[i] && positionY < this.titleTop[i+1])){
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                    console.log(this.currentIndex)
                }
            }
            //
            this.isShow = -position.y > 1000
        },
        // 添加购物车
        addCar(){
            //1.获取购物车需要展示的商品信息
            const product = {};
            product.image = this.topImgList[0];
            product.title = this.goodsInfo.title;
            product.desc = this.goodsInfo.desc;
            product.price = this.goodsInfo.realPrice;
            product.iid = this.iid

            //2.将商品添加到购物车
            // this.$store.commit('addCar',product)

            this.addCart(product).then(res=>{
                // console.log(res)
                Toast.success('已添加购物车');
            })

            // this.$store.dispatch('addCart',product).then(res=>{
            //     console.log(res)
            // })

         
            
            // if(product){
            //     // console.log(product)
            //     Toast.success('已添加购物车');
            // }
        }
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
        GoodList,
        detailBar,
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
       bottom: 1.3rem;
       left: 0;
       right: 0; 
      
      /* height: calc(100% - 1.3rem); */
       
    }
</style>