import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import PokemonDetail from './components/PokemonDetail.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { name: 'pokemon', path: '/pokemon/:id', component: PokemonDetail },
    { name: 'register', path: '/register', component: Register}
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
