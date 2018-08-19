import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Pet from '@/components/Pet'
import Ship from '@/components/SHip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/pet',
      name: 'pet',
      component: Pet
    },
    {
      path: '/ship',
      name: 'ship',
      component: Ship
    }
  ]
})
