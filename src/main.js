import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import PokemonDetail from './components/PokemonDetail.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/pokemon/:id', component: PokemonDetail, name: 'details' }
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
