<template>
  <div>
    <el-carousel :height="carouselHeight" arrow="always">
      <el-carousel-item class="el-carousel-item" v-for="item in banners.list" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  props:{
    banners:{
      type:Object,
      default(){
        return {}
      }
    },
    carouselHeight:{
      type:String,
      default:"150px"
    }
  },
  data(){
    return {
      isLoad: false
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){
        this.$emit('carouselImgLoad')
      }
      this.isLoad = true
    }
  },
  computed:{
    heightCalc(){
      return 0
    }
  }
}
</script>

<style scoped>
  .el-carousel-item img{
    width: 100%;
    height: auto;
  }
</style>