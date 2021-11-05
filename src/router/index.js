import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: { full: () => import('./full.vue') },
      children: [
        { name: 'refresh', path: 'refresh', component: () => import('@/view/refresh.vue') },
        { name: 'home', path: '', component: () => import('@/view/home/index.vue') },
        { name: 'detail', path: 'detail', component: () => import('@/view/detail/index.vue') },
      ],
    },
    {
      path: '/test',
      components: { full: () => import('./admin.vue') },
      children: [
      ],
    },
  ],
})
