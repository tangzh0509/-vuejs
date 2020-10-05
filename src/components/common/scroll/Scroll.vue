<template>
  <div class="mywrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      myscroll: null
    }
  },
  mounted() {
    setTimeout(function (){
      this.myscroll = new BScroll(document.querySelector('.mywrapper'), {
        click:true,
      })
      console.log(this.myscroll);
    }, 500)
  }
}
</script>

<style scoped>

</style>