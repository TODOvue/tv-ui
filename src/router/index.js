import { createRouter, createWebHistory } from 'vue-router';
import SlugDemo from '../docs/[slug].vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/:slug',
    name: 'documentation',
    component: SlugDemo,
    props: true
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
