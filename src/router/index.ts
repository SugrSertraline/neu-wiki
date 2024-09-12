import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import ReadView from '@/views/ReadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    }, {
      path: '/read',
      name: 'read',
      component: ReadView,
    },
  ]
})

export default router
