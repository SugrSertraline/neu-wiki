import { createRouter, createWebHistory } from 'vue-router';
import { usePageInfoStore } from '@/stores/PageInfoStore';
import IndexView from '@/views/IndexView.vue';
import ReadView from '@/views/ReadView.vue';
import DeveloperGreetingView from '@/views/read/DeveloperGreetingView.vue';
import MedicalReimbursementView from '@/views/read/MedicalReimbursementView.vue';
import CampusCardServiceView from '@/views/read/CampusCardServiceView.vue';
import CampusNetworkView from '@/views/read/CampusNetworkView.vue'
import BasicAcademicInfoView from '@/views/read/BasicAcademicInfoView.vue';
import ComputerBasedExamGuideView from '@/views/read/ComputerBasedExamGuideView.vue';
import RecommendationExemptionView from '@/views/read/RecommendationExemptionView.vue';
import GeneralCoursesView from '@/views/read/GeneralCoursesView.vue';
import CompetitionsView from '@/views/read/CompetitionsView.vue';
import SelectedTraineeView from '@/views/read/SelectedTraineeView.vue';
import { PAGE_CONFIG } from '@/config/PageConfig';

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
      },
      children:[
        {
          path:'',
          redirect:'/read/developer_greeting'
        },
        {
          path:'developer_greeting',
          name:'developer_greeting',
          component:DeveloperGreetingView
        },
        {
          path:'medical_reimbursement',
          name:'medical_reimbursement',
          component:MedicalReimbursementView
        },
        {
          path:'campus_card_service',
          name:'campus_card_service',
          component:CampusCardServiceView
        },
        {
          path:'campus_network',
          name:'campus_network',
          component:CampusNetworkView
        },
        {
          path:'basic_academic_info',
          name:'basic_academic_info',
          component:BasicAcademicInfoView
        },
        {
          path:'computer_based_exam_guide',
          name:'computer_based_exam_guide',
          component:ComputerBasedExamGuideView
        },
        {
          path:'recommendation_exemption',
          name:'recommendation_exemption',
          component:RecommendationExemptionView
        },
        {
          path:'general_courses',
          name:'general_courses',
          component:GeneralCoursesView
        },
        {
          path:'competitions',
          name:'competitions',
          component:CompetitionsView
        },
        {
          path:'selected_trainee',
          name:'selected_trainee',
          component:SelectedTraineeView
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
