import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Demo3 from '../views/demo3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //路径 唯一
      name: 'home', //名字 唯一
      component: HomeView, //对应组件 可以不唯一
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3,
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/new/Parent.vue')
    },
    {
      path: '/parent2',
      name: 'parent2',
      component: () => import('../views/new/Parent2.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/new/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
