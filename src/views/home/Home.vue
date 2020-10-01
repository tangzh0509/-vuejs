<template>
  <div>
    <navbar class="homenav">
      <div slot="center">购物街</div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import {getHomeMultidate} from "@/network/home";

export default {
  name: "Home",
  components:{
    navbar
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidate().then(res => {
      console.log(res);
      this.banners = res.data.banner
      this.recommends = res.data.recommend
    })
  }
}
</script>

<style scoped>
  .homenav{
    background-color: pink;
    color: white;
  }
</style>