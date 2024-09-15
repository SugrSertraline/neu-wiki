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
      meta:{
        title:'首页'
      }
    }, {
      path: '/read',
      name: 'read',
      component: ReadView,
      meta:{
        title:'阅读'
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.title){
    window.document.title = 'NEU百科全书 | '+<string>to.meta.title;
  }else{
     window.document.title = 'NEU百科全书';
  }
  next();
});
export default router
