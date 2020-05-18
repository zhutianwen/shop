import {request} from './request'  //没有default 文件用大括号包起来

export function getCategory(){
    return request({
        url:'category'
    })
}

export function getSubCategory(maitKey) {
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    });
}