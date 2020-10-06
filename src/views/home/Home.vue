<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll class="scroll-wrapper" ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @scrollPosition="scrollContent"
            @loadMore="loadMore">
      <homecarousel :banners="banners"/>
      <homerecview :recommends="recommends"/>
      <featureview/>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <goodslist :goods="showGoods"/>
    </scroll>
    <backtop @click.native="clickBackTop" v-show="isShow"/>
  </div>
</template>

<script>

import homecarousel from './childComps/HomeCarousel'
import homerecview from './childComps/HomeRecommendView'
import featureview from './childComps/FeatureView'

import navbar from 'components/common/navbar/NavBar'
import scroll from 'components/common/scroll/Scroll'
import tabcontrol from 'components/content/tabcontrol/TabControl'
import goodslist from 'components/content/goods/GoodsList'
import backtop from 'components/content/backtop/BackTop'


import {getHomeMultidate, getHomeGoods} from "@/network/home"
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components:{
    navbar,
    homecarousel,
    homerecview,
    featureview,
    tabcontrol,
    goodslist,
    scroll,
    backtop
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
      currenttype:'pop',
      isShow:false
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
  mounted() {
    //监听图片加载是否完成
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
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
    clickBackTop(){
      const y = -556.5
      this.$refs.scroll.scrollTo(0, y)
    },
    scrollContent(position){
      this.isShow = (-position.y > 1000) ? true:false
    },
    loadMore(){
      this.getHomeGoods(this.currenttype)
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
        //finishPullUp，为下一次上拉做准备
        this.$refs.scroll.finishPullUp()
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