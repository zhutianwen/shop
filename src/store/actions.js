import {
    ADD_COUNTER,
    ADD_TO_CAR 
} from './mutation-types'
export default{
    addCar(context,payload){
        let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
        // 2.判断oldProduct
        if(oldProduct){
            // oldProduct.count +=1
            context.commit('ADD_COUNTER',oldProduct)
        }else{
            payload.count=1
            // context.state.carList.push(payload)
            context.commit('ADD_TO_CAR',payload)
        }
    }    
}