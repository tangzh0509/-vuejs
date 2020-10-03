<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <homecarousel :banners="banners"/>
    <homerecview :recommends="recommends"/>
    <featureview/>
    <tabcontrol :titles="['流行','新款','精选']"/>
    <ul>
      <li v-for="item in 20" :key="item">{{111}}</li>
    </ul>
  </div>
</template>

<script>

import homecarousel from './childComps/HomeCarousel'
import homerecview from './childComps/HomeRecommendView'
import featureview from './childComps/FeatureView'

import navbar from 'components/common/navbar/NavBar'
import tabcontrol from 'components/content/tabcontrol/TabControl'

import {getHomeMultidate} from "@/network/home"
export default {
  name: "Home",
  components:{
    navbar,
    homecarousel,
    homerecview,
    featureview,
    tabcontrol
  },
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  created() {
    getHomeMultidate().then(res => {
      //console.log(res.data.banner.list[0].image);
      this.banners = res.data.banner
      this.recommends = res.data.recommend
    })
  }
}
</script>

<style scoped>
  #home{
    width: 100%;
  }
  .home-nav{
    background-color: pink;
    color: white;
  }

</style>