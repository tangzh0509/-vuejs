<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {};
    }
  },
  methods:{
    clickItem(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
    color: #bfbfbf;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin: 5px 7px 0px 7px;
    vertical-align: middle;
  }
</style>