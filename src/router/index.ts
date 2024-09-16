import { createRouter, createWebHistory } from 'vue-router';
import ReadView from '@/views/ReadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: import('@/views/IndexView.vue'),
      meta:{
        title:'首页'
      }
    }, {
      path: '/read',
      name: 'read',
      component: ReadView,
      meta:{
        title:'阅读'
      },
      children:[
        {
          path:'',
          name:'default',
          component: import('@/views/read/DeveloperGreetingView.vue')
        },
        {
          path:'developer_greeting',
          name:'developer_greeting',
          component: import('@/views/read/DeveloperGreetingView.vue')
        }
      ]
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
