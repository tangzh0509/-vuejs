<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" :key="title" @click="itemClick(index)"
         class="tab-control-item" :class="{active: index === currentIndex}">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: pink;
  }
  .active span{
    border-bottom: pink solid 2px;
    padding: 0 5px 3px;
  }
</style>