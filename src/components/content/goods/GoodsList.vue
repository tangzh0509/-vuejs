<template>
  <div class="goods">
    <goodlistitem v-for="good in goods" :key="good.index" :goodsitem="good"/>
  </div>
</template>

<script>
import goodlistitem from './GoodsListItem'
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodlistitem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }

</style>