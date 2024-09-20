<template>
  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="config.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <MenuComponent :data="config.menu_data" />
    </n-drawer-content>
  </n-drawer>

  <div class="w-fit bg-white shadow-md fixed left-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4 h-full overflow-y-auto">
      <MenuComponent :data="config.menu_data" />
    </div>
  </div>

  <div class="flex-1 p-8 overflow-y-auto mt-8 md:ml-64 md:mr-64">
    <button class="md:hidden mb-4 text-gray-600 hover:text-gray-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <router-view />
  </div>

  <div
    class="w-64 bg-white shadow-md fixed right-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
   <div class="p-4">
    <n-anchor :trigger-top="24" :top="88" style="z-index: 1" :bound="24" :show-rail="false">
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础22用法" href="#test" />
        <n-anchor-link title="忽略22间隔" href="#ignore-gap.vue" />
        <n-anchor-link title="固定" href="#affix.vue" />
        <n-anchor-link title="滚动到" href="#scrollto.vue" />
      </n-anchor-link>
      <n-anchor-link title="API" href="#API" />
    </n-anchor>
   </div>
  </div>




  <!-- <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full px-8 flex justify-center items-center">
      您认为此篇文章的内容如何？
      <n-button type="tertiary" class="mx-2">
        推荐
      </n-button>
      <n-button type="tertiary">
        不推荐
      </n-button>
    </div>

    <div class="w-5/6 flex flex-col items-center">

      <div class="w-5/6 lg:w-2/3 text-xl font-bold">
        建议反馈
      </div>
      <div class="my-2 w-full flex justify-center ">
        <div class="w-5/6 lg:w-2/3">
          <n-input type="textarea" placeholder="请输入您的建议和意见，如需投稿请选择“投稿专区”。" />
          <div class="flex mt-2 justify-between items-center">
            <div class="flex-1 flex flex-col justify-center items-center border mr-2 rounded">
              <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
                <n-button size="small" class="mt-2 ml-2">上传文件</n-button>
                未选择任何文件
              </n-upload>
            </div>
            <div>
              <n-button size="large">确认</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MenuComponent from '../components/MenuComponent.vue';
import { h } from 'vue';
import { NIcon, type LayoutInst } from 'naive-ui';
import { RouterLink } from 'vue-router';

const scrollToTop = () => {
  window.scrollTo(0, 0);
}
const renderLinkItem = (label: string, key: string, path: string) => {
  return {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: path
          }
        },
        { default: () => label }
      ),
    key: key,
  }
}

const config = ref({
  if_drawer: false,
  menu_data:
    [
      {
        label: '网站简介',
        type: 'group',
        children: [
          renderLinkItem('开发者寄语', 'developer_greeting', '/read/developer_greeting')
        ]
      }, {
        label: '校内资源',
        type: 'group',
        children: [
          {
            label: '快速连接',
            key: 'quick_links',
          }, {
            label: '校内群聊',
            key: 'campus_chat',
          }
        ]
      }, {
        label: '生活出行',
        type: 'group',
        children: [
          {
            label: '医疗与报销',
            key: 'medical_reimbursement',
          }, {
            label: '气候与穿衣',
            key: 'climate_and_dress',
          }, {
            label: '诈骗防范',
            key: 'fraud_prevention',
          }, {
            label: '校园卡业务',
            key: 'campus_card_service',
          }, {
            label: '校园网',
            key: 'campus_network',
          }
        ]
      }, {
        label: '学在东大',
        type: 'group',
        children: [
          {
            label: '基础学业信息（绩点、学分）',
            key: 'basic_academic_info',
          }, {
            label: '机考指南',
            key: 'computer_based_exam_guide',
          }, {
            label: '推免（保研）',
            key: 'recommendation_exemption',
          }, {
            label: '公共课',
            key: 'general_courses',
          }, {
            label: '竞赛',
            key: 'competitions',
          }, {
            label: '选调2生',
            key: 'selected_trainee',
          }, {
            label: '选调生',
            key: 'select3ed_trainee',
          }, {
            label: '选123调2生',
            key: 'select2ed_trainee',
          }, {
            label: '选213调生',
            key: 'sele2cted_trainee',
          }
        ]
      },
    ]

})
</script>
