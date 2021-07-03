import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: () => import('@/view/home/index.vue') },
    { name: 'detail', path: '/detail', component: () => import('@/view/detail/index.vue') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
  ],
})
