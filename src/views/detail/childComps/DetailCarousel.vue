<template>
  <el-carousel :height="carouselHeight" arrow="always">
    <el-carousel-item class="el-carousel-item" v-for="item in carrouselImages.slice(0, 4)" :key="item.id">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "DetaiCarousel",
  props:{
    carrouselImages:{
      type:Array,
      default(){
        return []
      }
    },
    carouselHeight:{
      type:String,
      default:"400px"
    }
  }
}
</script>

<style scoped>
  .el-carousel-item img{
    width: 100%;
    height: auto;
    vertical-align: center;
  }
</style>