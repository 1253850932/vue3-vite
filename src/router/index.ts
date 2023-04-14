import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/centralControl',
    name: 'centralControl',
    meta: {
      title: 'centralControl'
    },
    component: () => import('@/pages/centralControl.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
