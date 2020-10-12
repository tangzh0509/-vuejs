<template>
  <div>
    <detailnavbar class="detail-navbar"/>
    <scroll ref="scroll" class="detail-scroll-wrapper">
      <detailcarousel :carrouselImages="carrouselImages" :carouselHeight="getCarouselHeight"/>
      <detailbaseinfo :good="good"/>
      <detailshopinfo :shop="shopInfo"/>
      <detailgoodsinfo :detailInfo="detailInfo" @imageLoad="imgLoad"/>
      <detailparaminfo :paramInfo="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
import detailnavbar from './childComps/DetailNavBar'
import detailcarousel from './childComps/DetailCarousel'
import detailbaseinfo from './childComps/DetailBaseInfo'
import detailshopinfo from './childComps/DetailShopInfo'
import detailgoodsinfo from './childComps/DetailGoodsInfo'
import detailparaminfo from './childComps/DetailParamInfo'

import scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, ShopInfo, GoodsParam} from "network/detail";

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      carrouselImages:[],
      good: {},
      shopInfo:{},
      detailInfo:{},
      paramInfo:{}
    }
  },
  components:{
    detailnavbar,
    detailcarousel,
    detailbaseinfo,
    detailshopinfo,
    detailgoodsinfo,
    detailparaminfo,
    scroll
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid
    //根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      //获取轮播图信息
      this.carrouselImages = data.itemInfo.topImages
      //获取商品详情信息
      this.good = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取店铺展示信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      console.log(this.shopInfo);
      //获取商品详情图片以及信息
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })


  },
  computed:{
    getCarouselHeight(){
      return document.body.clientWidth * 0.8 + "px"
    }
  },
  methods:{
    imgLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  .detail-navbar{
    position: relative;
    background-color: white;
    z-index: 9;
  }
  .detail-scroll-wrapper{
    position: absolute;
    top:44px;
    bottom: 0;
    left: 0;
    right:0;
    background-color: white;
    z-index: 8;
  }
</style>