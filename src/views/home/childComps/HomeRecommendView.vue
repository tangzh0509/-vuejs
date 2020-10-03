<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.list" :key="item.link">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:['recommends']
}
</script>

<style scoped>
  .recommend{
    display: flex;
    padding-bottom: 15px;
    border-bottom: #f6f6f6 solid 7px;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .recommend-item a{
    text-decoration: none;
    color: darkgray;
  }
</style>