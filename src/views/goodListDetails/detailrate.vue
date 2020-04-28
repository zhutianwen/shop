<template>
    <div class="detailrate">
        <div class="top-title">
            <span>用户评论</span>
            <span>更多</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailrate',
    props:{
        rate:{
            tyape:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .detailrate{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.4rem;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.8rem;
    }
    .top-title{
        font-size: 0.4rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 0.2rem;
    }
</style>