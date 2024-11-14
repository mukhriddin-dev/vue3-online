import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue'),
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/service.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
