<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll class="scroll-wrapper">
      <homecarousel :banners="banners"/>
      <homerecview :recommends="recommends"/>
      <featureview/>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <goodslist :goods="showGoods"/>
    </scroll>
  </div>
</template>

<script>

import homecarousel from './childComps/HomeCarousel'
import homerecview from './childComps/HomeRecommendView'
import featureview from './childComps/FeatureView'

import navbar from 'components/common/navbar/NavBar'
import tabcontrol from 'components/content/tabcontrol/TabControl'
import goodslist from 'components/content/goods/GoodsList'
import scroll from 'components/common/scroll/Scroll'

import {getHomeMultidate, getHomeGoods} from "@/network/home"
export default {
  name: "Home",
  components:{
    navbar,
    homecarousel,
    homerecview,
    featureview,
    tabcontrol,
    goodslist,
    scroll
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      },
      currenttype:'pop'
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidate();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
    showGoods(){
      return this.goods[this.currenttype].list
    }
  },
  methods:{
    /**
     * 事件监听相关方法
     */
    tabClick(index){
      switch (index){
        case 0:
          this.currenttype = 'pop';
          break;
        case 1:
          this.currenttype = 'new';
          break;
        case 2:
          this.currenttype = 'sell';
      }
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidate(){
      getHomeMultidate().then(res => {
        //console.log(res.data.banner.list[0].image);
        this.banners = res.data.banner
        this.recommends = res.data.recommend
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
  #home{
    width: 100%;
    height: 100vh;
  }
  .home-nav{
    background-color: pink;
    color: white;
  }
  .scroll-wrapper{
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>