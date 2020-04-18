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
        props:{
            probeType:{
                type:Number,
                default:0
            }
        },
        mounted(){
            //1.创建bscroll对象
            this.scroll = new BSroll(this.$refs.wapper,{
                click:true,
                probeType:this.probeType
            });
            //2.监听滚动位置
            this.scroll.on('scroll',(position)=>{
                // console.log(position)
                this.$emit('scroll',position) //定义scroll方法  传入position参数
            })
        },
        methods:{
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            }
        },   
    }
</script>