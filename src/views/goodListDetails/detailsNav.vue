<template>
    <div class="detailsNav">
        <nav-bar class="nav-bar">
            <div slot="left">
                <div class="back" @click="goBack">
                    <img src="~assets/images/left.png" alt="">
                </div>
            </div>
            <div slot="center" class="title">
                <div
                 class="item-titles"
                  v-for="(item,index) in titles"
                   :key="index"
                    :class="{active2:index===currentIndex}" 
                    @click="changeClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/navbar'



export default {
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
        }
    },
    methods:{
        changeClick(index){
            this.currentIndex = index;
            this.$emit('titleClick',index)
        },
        goBack(){
            this.$router.go(-1)
        },
    },
   components:{
        NavBar
    },
}
</script>

<style scoped>
    .nav-bar{
        background: #fff;
    }
    .title{
        display: flex;
        font-size: 0.4rem;
    }
    .item-titles{
        flex: 1;
    }
    .active2{
        color: #ee7b85;
    }
    .back{
        width: 0.8rem;
        margin: 0 auto;        
        margin-top: 0.2rem;
    }
</style>