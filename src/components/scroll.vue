<template>
    <div class="wrapper" ref="wapper">
        <div class="content">
            <slot></slot> <!-- 替换scroll中的内容 -->
        </div>
    </div>
</template>

<script>
    import BSroll from 'better-scroll'
    export default{
        data(){
            return{
                scroll:null
            }
        },
        mounted(){
            this.scroll = new BSroll(this.$refs.wapper,{
                click:true
            })
        }   
    }
</script>