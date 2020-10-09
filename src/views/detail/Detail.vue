<template>
  <div>
    <detailnavbar/>
    <detailcarousel :carrouselImages="carrouselImages" :carouselHeight="getCarouselHeight"/>
    <detailbaseinfo :good="good"/>
  </div>
</template>

<script>
import detailnavbar from './childComps/DetailNavBar'
import detailcarousel from './childComps/DetailCarousel'
import detailbaseinfo from './childComps/DetailBaseInfo'

import {getDetail, Goods, ShopInfo} from "network/detail";

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      carrouselImages:[],
      good:null,
      shopInfo:null
    }
  },
  components:{
    detailnavbar,
    detailcarousel,
    detailbaseinfo
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
      console.log(this.good);
      //获取店铺展示信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      console.log(this.shopInfo);
    })


  },
  computed:{
    getCarouselHeight(){
      return document.body.clientWidth * 0.8 + "px"
    }
  }
}
</script>

<style scoped>

</style>