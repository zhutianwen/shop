<template>
    <div class="detailBar">
        <div class="detailBar-con">
            <div class="bottom-title">
                <i class="iconfont icon-ziyuan"></i>
                <span class="barTitle">客服</span>
            </div>
            <div class="bottom-title">
                <i class="iconfont icon-dianpu"></i>
                <span class="barTitle">店铺</span>
            </div>
            <div class="bottom-title">
                <i class="iconfont icon-shoucang1"></i>
                <span class="barTitle">收藏</span>
            </div>
            <div class="bottom-title" style="line-height:1.3rem;background:#ffd01e">
                <span class="barTitle">加入购物车</span>
            </div>
            <div class="bottom-title" style="line-height:1.3rem;background:#ee7b85;color:#fff">
              <span class="barTitle">购买</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailBar'
}
</script>

<style>
    .detailBar{
        height: 1.3rem;
        line-height: 0.6rem;
        background: #fff;
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .detailBar-con{
        display: flex;
        text-align: center;
    }
    .barTitle{
        display: block;
        font-size: 0.35rem;
    }
    .bottom-title{
        width: 20%;
    }
</style>