import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@pages/index.vue'),
    meta: {
      title: "Főoldal"
    }
  },
  {
    name: 'single-cartoon',
    path: '/cartoons/:id',
    component: () => import('@pages/cartoon.vue'),
    meta: {
      title: "A kiválasztott rajzfilm"
    }
  },
];

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
})