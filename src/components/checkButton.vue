<template>
    <div class="checkButton">
        <div class="check-img">
            <i class="iconfont icon-yixuanzhong" :class="{check:isChecked}"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'checkButton',
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    },
}
</script>

<style>
    .icon-yixuanzhong{
        color: #aaa;
    }
    .check{
        color: #ff8917;
    }
</style>