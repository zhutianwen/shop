import { debounce } from 'components/utils/utils'
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