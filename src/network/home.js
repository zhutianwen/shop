import {request} from './request'  //没有default 文件用大括号包起来

export function getHomemultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getGoodsList(type,page){//传两个参数 类型 页码
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}