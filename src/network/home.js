import {request} from './request'

export function getHomemultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getGoodsList(type,page){//传两个参数
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}