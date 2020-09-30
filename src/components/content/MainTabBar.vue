<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="item-icon" src="~assets/img/home/home.svg">
      <img slot="item-icon-active" src="~assets/img/home/home_active.svg">
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/discovery">
      <img slot="item-icon" src="~assets/img/discovery/discovery.svg">
      <img slot="item-icon-active" src="~assets/img/discovery/discovery_active.svg">
      <div slot="item-text">发现</div>
    </tabbaritem>
    <tabbaritem path="/">
      <div slot="item-text">+</div>
    </tabbaritem>
    <tabbaritem path="/shop">
      <img slot="item-icon" src="~assets/img/shop/shop.svg">
      <img slot="item-icon-active" src="~assets/img/shop/shop_active.svg">
      <div slot="item-text">商店</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-icon" src="~assets/img/profile/profile.svg">
      <img slot="item-icon-active" src="~assets/img/profile/profile_active.svg">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from '@/components/common/tabbar/TabBar.vue'
import tabbaritem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: "MainTabBar",
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>

</style>