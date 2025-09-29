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
      path: '/read/:page?',
      name: 'read',
      component: ReadView,
      meta:{
        title:'阅读'
      }
    },{
      path:'/test',
      name:'test',
      component:()=>import('@/views/TestView.vue')
    },{
      path:'/changeCommit',
      name:'changeCommit',
      component:()=>import('@/views/ChangeCommitView.vue')

    },{
      path:'/editor',
      name:'JsonPageEditor',
      component:()=>import('@/views/JsonPageEditor.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'read') {
    const newPage = to.params.page
  }
  
  next()
})


export default router
