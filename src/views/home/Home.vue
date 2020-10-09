<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                class="tab-controll"
                v-show="isTabFixed"/>
    <scroll class="scroll-wrapper" ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @scrollPosition="scrollContent"
            @loadMore="loadMore">
      <homecarousel :banners="banners" :carouselHeight="getCarouselHeight" @carouselImgLoad="carouselImgLoad"/>
      <homerecview :recommends="recommends"/>
      <featureview/>
      <tabcontrol :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabControl2"/>
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
      banners:{},
      recommends:{},
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      },
      currenttype:'pop',
      isShow:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
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
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  computed:{
    showGoods(){
      return this.goods[this.currenttype].list
    },
    getCarouselHeight(){
      return document.body.clientWidth * 0.52 + "px"
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
      const y = this.tabOffsetTop
      this.$refs.scroll.scrollTo(0, -y)
    },
    scrollContent(position){
      //判断backTop是否显示
      this.isShow = (-position.y > 1000) ? true:false
      //决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currenttype)
    },
    carouselImgLoad(){
      //获取tabControl的offsetTop
      //console.log(this.$refs.tabControl.$el.offsetTop) 好奇怪，结果总是大46px=》重新npm run serve后就没有这种情况了
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
    /*height: calc(100% - 93px);*/
    overflow: hidden;

    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-controll{
    position: relative;
    z-index: 9;
  }
</style>