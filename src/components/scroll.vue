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
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            },
        },
        mounted(){
            //1.创建bscroll对象
            this.scroll = new BSroll(this.$refs.wapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad    
            });
            //2.监听滚动位置
            this.scroll.on('scroll',(position)=>{
                // console.log(position)
                this.$emit('scroll',position) //定义scroll方法  传入position参数
            });
            //3.监听上拉事件
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp') //定义pullingUp方法  
            })
            // console.log(this.scroll)
        },
        methods:{
            scrollTo(x,y,time=500){
                this.scroll && this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
               this.scroll && this.scroll.finishPullUp()
            },
            refresh(){
                // console.log('//////')
                this.scroll && this.scroll.refresh()
            },
        },   
    }
</script>