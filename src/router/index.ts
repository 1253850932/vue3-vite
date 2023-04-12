import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'centralControl',
    meta: {
      title: 'centralControl'
    },
    component: () => import('@/pages/centralControl.vue')
  },
  {
    path: '/screen',
    name: 'screen',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/screen.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
