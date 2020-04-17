<template>
    <div class="wrapper" ref="wapper">
        <div class="content">
            <slot></slot>
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

            })
        }   
    }
</script>