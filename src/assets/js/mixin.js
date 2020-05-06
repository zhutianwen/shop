import { debounce } from 'components/utils/utils'
import backtop from 'components/backTop'
export const itemLsten = {
    data(){
        return{
            itemImgListen:''
        }
    },
    mounted(){
        let refresh = debounce(this.$refs.scroll.refresh,50)
        this.itemImgListen = ()=>{
            refresh()
        }
        this.$bus.$on('itemtmg',this.itemImgListen)
        // console.log('我被混入了')
    }
}

export const backTop = {
    data(){
        return{
            isShow:false,
        }
    },
    methods:{
        backtop(){
            this.$refs.scroll.scrollTo(0,0);
        },
      
    },
    components:{
        backtop
    },
}