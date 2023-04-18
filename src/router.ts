import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/displayNames',
    name: 'DisplayNames',
    component: () => import('./views/DisplayNames.vue')
  },
  {
    path: '/dateTimeFormat',
    name: 'DateTimeFormat',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/relativeTimeFormat',
    name: 'RelativeTimeFormat',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/numberFormat',
    name: 'NumberFormat',
    component: () => import('./views/Home.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes, router };
