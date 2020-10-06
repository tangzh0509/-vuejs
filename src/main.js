import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Carousel, CarouselItem} from 'element-ui'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$bus = new Vue()

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
