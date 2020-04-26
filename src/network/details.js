import {request} from './request'  //没有default 文件用大括号包起来

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class Goods{  //导出一个类
    constructor(itemInfo,columns,services){//传入参数
        this.title = itemInfo.title
        this.discountBgColor = itemInfo.discountBgColor
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}