import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import home from '../components/home'
import about from '../components/about'
import user from '../components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/user/:id',
      component: user
    }
  ]
})
