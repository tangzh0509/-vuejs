<template>
  <div class="base-info">
    <div class="info-title">
      {{good.titles}}
    </div>
    <div class="info-price">
      <span id="new-price">{{good.newPrice}}</span>
      <span id="old-price">{{good.oldPrice}}</span>
      <span id="discount">{{good.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1]}}</span>
      <span>{{good.services[3].name}}</span>
    </div>
    <div class="info-services">
      <div v-for="item in good.services.slice(0, 3)" :key="item.desc">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    good:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
 .info-title{
   padding: 10px 5px;
 }
 .info-price #new-price{
   font-size: 24px;
   color: deeppink;
   margin: 0 5px;
 }
 .info-price #old-price{
   font-size: 13px;
   text-decoration: line-through;
   margin: 0 5px 0 0;
   color: darkgray;
 }
 .info-price #discount{
   font-size: 12px;
   color: white;
   background-color: deeppink;
   border-radius: 6px;
   padding: 1px 3px;
   position: relative;
   top: -8px;
 }
 .info-other{
   padding: 15px 0 5px;
   margin: 0 8px;
   display: flex;
   justify-content: space-between;
   font-size: 13px;
   color: darkgray;
   border-bottom: rgba(100,100,100,.1) 1px solid;
 }
 .info-services img{
   width: 14px;
   height: 14px;
 }
 .info-services{
   font-size: 13px;
   color: #333;
   display: flex;
   justify-content: space-between;
   margin: 25px 8px;
 }
 .base-info{
   border-bottom: #f6f6f6 5px solid;
 }
</style>