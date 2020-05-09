<template>
    <div class="carItem">
        <scroll class="car-scoll" ref="carScroll">
            <div class="item-content" v-for="(item,index) in carList" :key="index">
                <checkButton
                 class="checked"
                  :isChecked = "item.checked"
                   @click.native="checkClick(item)"></checkButton> 
                <div class="item-img">
                    <img :src="item.image" alt="">
                </div>
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <div class="priceCount">
                        <div class="price-count">￥{{item.price}}</div>
                        <!-- <div class="price-count">x{{item.count}}</div> -->
                        <div class="carCount">
                           <span @click="reduce(item)" class="btn1">
                               <i class="iconfont  icon-iconfontmove"></i>
                           </span>
                           <span class="itemCount">{{item.count}}</span>
                           <span @click="add(item)" class="btn2">
                               <i class="iconfont icon-jiahao"></i>
                           </span>
                        </div>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>

import scroll from 'components/scroll'

import {mapGetters} from 'vuex'

import checkButton from 'components/checkButton'

export default {
    name:'carItem',
    activated(){
        this.$refs.carScroll.refresh()
    },
    computed:{
        ...mapGetters([
            'carList',
        ])
    },
    methods:{
        checkClick(item){
            // console.log(item)
            item.checked = !item.checked
        },
        reduce(item){
            if(item.count > 0){
                item.count--;
            }else{
                item.count = 0
            }  
        },
        add(item){
            item.count++;
        },
    },
    components:{
        scroll,
        checkButton
    },
}
</script>

<style>
    .car-scoll{
       overflow: hidden;
       position: absolute;
       top: 1.3rem;
       bottom: 2.6rem;
       left: 0;
       right: 0;
    }
    .item-content{
        padding: 0.2rem 0 0.2rem 0;
        width: 98%;
        display: flex;
        border-bottom:1px solid #aaa; 
        justify-content: space-between;
        margin: 0 auto;
    }
    .item-title,.item-desc{
        font-size: 0.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .item-desc{
        font-size: 0.38rem;
        color: #807d7d;
        margin-top: 0.2rem;
    }
    .priceCount{
        display: flex;
        justify-content: space-between;
        margin-top: 0.4rem;
    }
    .price-count{
        font-size: 0.4rem;
        color: #ff6034;
    }
    .checked{
        text-align: center; 
        width: 10%;
    }
    .item-img{
        width: 20%;
    }
    .item-info{
        width: 60%;
    }
    .item-img img{
        border-radius: 5px;
    }
    .carCount{
        width:2rem;
        border:1px solid #aaa;
        height: 0.5rem;
        line-height: 0.5rem;  
        display: flex;
        justify-content: space-between;  
        border-radius: 3px;
    }
    .btn1,.btn2,.itemCount{
        font-size: 0.4rem;
        display: block;
        /* height: 0.5rem;
        line-height: 0.5rem; */
    }
    .btn1,.btn2{
        width: 30%;
        text-align: center;
    }
    .btn1{
        border-right:1px solid #aaa ;
    }
    .btn2{
        border-left:1px solid #aaa ;    
    }
    .icon-jiahao,.icon-iconfontmove{
        font-size: 0.4rem;
    }
</style>