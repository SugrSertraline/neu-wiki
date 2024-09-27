import { createRouter, createWebHistory } from 'vue-router';
import { usePageInfoStore } from '@/stores/PageInfoStore';

import { PAGE_CONFIG } from '@/config/PageConfig';
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
      component: import('@/views/ReadView.vue'),
      meta:{
        title:'阅读'
      },
      children:[
        {
          path:'',
          redirect:'/read/developer_greeting'
        },
        {
          path:'developer_greeting',
          name:'developer_greeting',
          component: import('@/views/read/DeveloperGreetingView.vue')
        },
        {
          path:'medical_reimbursement',
          name:'medical_reimbursement',
          component:import('@/views/read/MedicalReimbursementView.vue')
        },
        {
          path:'campus_card_service',
          name:'campus_card_service',
          component:import('@/views/read/CampusCardServiceView.vue')
        },
        {
          path:'campus_network',
          name:'campus_network',
          component:import('@/views/read/CampusNetworkView.vue')
        },
        {
          path:'basic_academic_info',
          name:'basic_academic_info',
          component:import('@/views/read/BasicAcademicInfoView.vue')
        },
        {
          path:'computer_based_exam_guide',
          name:'computer_based_exam_guide',
          component:import('@/views/read/ComputerBasedExamGuideView.vue')
        },
        {
          path:'recommendation_exemption',
          name:'recommendation_exemption',
          component:import('@/views/read/RecommendationExemptionView.vue')
        },
        {
          path:'general_courses',
          name:'general_courses',
          component:import('@/views/read/GeneralCoursesView.vue')
        },
        {
          path:'competitions',
          name:'competitions',
          component:import('@/views/read/CompetitionsView.vue')
        },
        {
          path:'selected_trainee',
          name:'selected_trainee',
          component:import('@/views/read/SelectedTraineeView.vue')
        }
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  const pageInfoStore = usePageInfoStore();
  if(to.meta.title){
    window.document.title = 'NEU百科全书 | '+<string>to.meta.title;
  }else{
     window.document.title = 'NEU百科全书';
  };
  PAGE_CONFIG.forEach((group)=>{
    group.children.forEach((item)=>{
      if(item.name==to.name){
       
        pageInfoStore.setPageInfo(item.title);
      }
    })
  })

  next();
});


export default router
