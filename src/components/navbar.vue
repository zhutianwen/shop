<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div> 	
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>     
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .navbar{
        display: flex;
        line-height: 1.3rem;
        height:1.3rem;
        text-align: center;
        position: fixed;
        z-index: 99;
        width: 100%;
        box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .1);
    }
    .left,.right{
        width:1.6rem;
    }
    .center{
        flex:1;
    }
</style>

