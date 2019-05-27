import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import city from '@/components/city'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
