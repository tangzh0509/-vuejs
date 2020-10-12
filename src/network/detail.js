import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo, columns, services) {
        this.titles = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class ShopInfo{
    constructor(ShopInfo) {
        this.logo = ShopInfo.shopLogo
        this.name = ShopInfo.name
        this.sells = ShopInfo.cSells
        this.goodsCount = ShopInfo.cGoods
        this.score = ShopInfo.score
    }
}

export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}