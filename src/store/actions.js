import {
    ADD_COUNTER,
    ADD_TO_CAR 
} from './mutation-types'
export default{
    addCart(context,payload){
        return new Promise((resolve,reject) =>{
            let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
            // 2.判断oldProduct
            if(oldProduct){
                // oldProduct.count +=1
                context.commit('ADD_COUNTER',oldProduct)
                resolve('数量加+1')
            }else{
                payload.count=1
                // context.state.carList.push(payload)
                context.commit('ADD_TO_CAR',payload)
                resolve('添加新的商品')
            }
        })
    }    
}