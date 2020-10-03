<template>
  <div>
    <el-carousel height="150px" arrow="always">
      <el-carousel-item class="el-carousel-item" v-for="item in banners.list" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  props:['banners']
}
</script>

<style scoped>
  .el-carousel-item img{
    width: 100%;
    height: auto;
  }
</style>