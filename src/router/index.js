import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import demo2 from '@/components/demo2'
import demo3 from '@/components/demo3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo,
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'demo1',
      component: demo
    },
    {
      path: '/second',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/third',
      name: 'demo3',
      component: demo3
    }
  ]
})
