<template>
  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="config.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <MenuComponent :data="config.menu_data" />
    </n-drawer-content>
  </n-drawer>
  <n-float-button-group class="z-10" shape="square" position="absolute" :right="30" :bottom="30">
    <n-float-button class="block lg:hidden" @click="config.if_drawer = true">
      <n-icon>
        <MenuSharp />
      </n-icon>
    </n-float-button>
    <n-float-button @click="scrollToTop">
      <n-icon >
        <ChevronUpSharp />
      </n-icon>
    </n-float-button>
  </n-float-button-group>
  <!-- 中间整体的布局，一个layout，带有一个sider，作用是目录 -->
  <n-layout has-sider>


    <n-layout-sider class="hidden xl:block" bordered content-style="padding: 24px;">
      <MenuComponent :data="config.menu_data" />
    </n-layout-sider>


    <n-layout-content content-style="padding: 24px;">
      <n-layout has-sider content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout-content>

  </n-layout>
  <n-divider />
  <div class="w-full flex flex-col justify-center items-center">
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { MenuSharp,ChevronUpSharp} from '@vicons/ionicons5';
import MenuComponent from '../components/MenuComponent.vue';
import { h } from 'vue';
import { NIcon, type LayoutInst } from 'naive-ui';
import { RouterLink } from 'vue-router';

const scrollToTop = ()=>{
  window.scrollTo(0,0);
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
            label: '选调生',
            key: 'selected_trainee',
          }
        ]
      },
    ]

})
</script>
