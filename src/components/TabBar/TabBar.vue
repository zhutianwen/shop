<template>
    <div class="TabBar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
    .TabBar{
        height: 1.35rem;
        border: 1px solid;
        position: fixed;
        right: 0;
        left: 0;
        bottom: 1.35rem;
        display: flex;
        background: #fff;
    }
</style>