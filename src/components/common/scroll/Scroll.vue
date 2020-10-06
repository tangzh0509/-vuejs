<template>
  <div class="mywrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll: null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    //创建scroll
    this.scroll = new BScroll(document.querySelector('.mywrapper'), {
      click:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动位置

    if(this.probeType == 3 || this.probeType == 2){
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollPosition', position)
        //console.log(position);
      })
    }
    //监听上拉事件
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', ()=>{
        this.$emit('loadMore')
        console.log('------');
      })
    }
  },
  methods:{
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>