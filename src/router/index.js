import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/:slug',
    name: 'documentation',
    component: import('../docs/[slug].vue'),
    props: true
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
