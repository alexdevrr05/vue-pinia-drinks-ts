import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/drinks/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/drinks/views/FavoritesView.vue'),
    },
  ],
});

export default router;
