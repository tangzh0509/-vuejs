<template>
  <div class="testwrapper">
    <div class="testcontent">
      <ul>
        <li v-for="item in 150" :key="item.index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  mounted() {
    const bscroll = new BScroll(document.querySelector('.testwrapper'), {

    })
    console.log(bscroll);


  }
}
</script>

<style scoped>
  .testwrapper{
    height: 300px;
    background-color: #bfbfbf;
    overflow: hidden;
  }
</style>