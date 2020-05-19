<template>
    <div class="mine">
       <div class="mine-top">
           <div class="mine-title">我的信息</div>
           <div class="userInfo">
               <div>
                   <i class="iconfont icon-gerenyonghutouxiang"></i>
               </div>
               <div class="mine-center">
                   <div>登陆/注册</div>
                   <div>
                       <i class="iconfont icon-shouji"></i>
                       <span>暂无绑定手机号</span>
                   </div>
               </div>
               <div>
                   <i class="iconfont icon-youjiantou"></i>
               </div>
           </div>
       </div>
       <!--  -->
       <div class="user-info-item">
           <div class="info-item info-left">
               <div>
                   <span class="conut">0.00</span>
                   <span>元</span>
                    <div>我的余额</div>
               </div>
           </div>
           <div class="info-item info-center">
               <div>
                   <span class="conut">0</span>
                   <span>个</span>
                    <div>我的优惠</div>
               </div>
           </div>
           <div class="info-item info-right">
               <div>
                   <span class="conut">0</span>
                   <span>分</span>
                    <div>我的积分</div>
               </div>
           </div>
       </div>
       <!--  -->
       <div class="mine-content2">
           <div class="fenlei">
               <span class="ico1"> <i class="iconfont icon-youjian"></i> </span>
               <span class="info1">我的消息</span>
           </div>
           <div class="fenlei">
               <span class="ico1"> <i class="iconfont icon-jifen"></i> </span>
               <span  class="info1 jifen">积分商城</span>
           </div>
           <div class="fenlei">
               <span class="ico1"> <i class="iconfont icon-huiyuan"></i> </span>
               <span  class="info1">会员卡</span>
           </div>
       </div>
       <!--  -->
       <div class="mine-content3">
           <div class="fenlei">
               <span class="ico1"> <i class="iconfont icon-gouwuche"></i> </span>
               <span class="info1 gouwu">我的购物车</span>
           </div>
           <div class="fenlei">
               <span class="ico1"> <i class="iconfont icon-gouwu-copy"></i> </span>
               <span  class="info1 ">下载购物APP</span>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"mine"
}
</script>

<style>
    .mine-top{
        padding: 0.3rem;
        background: #fb8994;
        text-align: center;
        color: #fff2f2;
        font-size: 0.5rem;
    }
    .userInfo{
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .icon-gerenyonghutouxiang{
        font-size: 0.9rem;
        background: #ccc;
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    .mine-center{
        text-align: left;
        width: 70%;
    }
    .icon-youjiantou{
        font-size: 0.8rem;
    }
    .icon-shouji{
        font-size: 0.45rem;
    }
    .user-info-item{
        text-align: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.2rem solid #f2f2f2;
        height: 2.2rem;
    }
    .info-center{
        border-left: 1px solid #f9e7e7;
        border-right: 1px solid #f9e7e7;
    }
    .info-item{
        font-size: 0.4rem;
        width: 33%;
        align-items: center;
        display: grid;
    }
    .conut{
        font-size: 0.5rem;
        color: #ff6034;
    }
    .mine-content2{
        font-size: 0.45rem;
        padding-left: 0.4rem;
        border-bottom: 0.2rem solid #f2f2f2;
    }
    .mine-content3{
        font-size: 0.45rem;
        padding-left: 0.4rem;
    }
    .gouwu{
        border-bottom: 1px solid #f9e7e7;
    }
    .fenlei{
        display: flex;
        height: 1.3rem;
        line-height: 1.3rem;
    }
    .ico1{
        display: inline-block;
        margin-right: 0.3rem;
    }
    .jifen{
        border-bottom: 1px solid #f9e7e7;
        border-top: 1px solid #f9e7e7;
    }
    .info1{
        width: 100%;
        display: inline-block;
        
        height: 1.3rem;
        line-height: 1.3rem;
    }
    .icon-youjian,
    .icon-jifen,
    .icon-huiyuan,
    .icon-gouwuche,
    .icon-gouwu-copy{
        font-size: 0.6rem;
        color:#fb8994 ;
    }
</style>
