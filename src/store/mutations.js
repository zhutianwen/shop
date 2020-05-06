import {
    ADD_COUNTER,
    ADD_TO_CAR 
} from './mutation-types'
export default{ 
    //payload新添加的商品
    // let oldProduct = "";
    // for(let item of state.carList){
    //     if(item.iid === payload.iid){
    //         oldProduct = item
    //     }
    // }
    //2.判断oldProduct
    // if(oldProduct){
    //     oldProduct.count +=1
    // }else{
    //     payload.count=1
    //     state.carList.push(payload)
    // }
    [ADD_COUNTER](state,payload){
        payload.count++
    },
    [ADD_TO_CAR](state,payload){
        state.carList.push(payload)
    },

}