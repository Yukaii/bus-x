import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NearBy from '@/views/NearBy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nearby',
      name: 'NearBy',
      component: NearBy
    }
  ]
})
