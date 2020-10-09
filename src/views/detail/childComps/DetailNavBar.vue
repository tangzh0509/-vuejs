<template>
  <navbar>
    <div slot="left" id="back-home" @click="backHome">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" id="detail-tab-control">
      <tabcontrol :titles="['流行','新款','精选']"/>
    </div>
  </navbar>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import tabcontrol from 'components/content/tabcontrol/TabControl'

export default {
  name: "DetailNavBar",
  components:{
    navbar,
    tabcontrol
  },
  methods:{
    backHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  #detail-tab-control{
    font-size: 12px;
    padding-top: 5px;
  }
  #back-home{
    padding-top: 5px;
  }
</style>