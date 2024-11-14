<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-center mb-8">我们的贡献者</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NWContributor
        v-for="contributor in contributors"
        :key="contributor.username"
        :contributor="contributor"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NWContributor } from '@/components';
const contributors = ref([
  {
    username: '张三',
    avatar: 'https://example.com/avatar1.jpg',
    contributionType: '代码开发',
    contribution: '实现了用户认证功能和数据可视化模块',
    bio: '全栈开发者，热爱开源项目，专注于Web应用开发。',
    qq: '123456789',
    wechat: 'zhangsan_dev',
    email: 'zhangsan@example.com',
  },
  {
    username: '李四',
    avatar: 'https://example.com/avatar2.jpg',
    contributionType: '内容创作',
    contribution: '编写了产品文档和用户指南',
    bio: '技术文档专家，擅长将复杂概念简化。',
    email: 'lisi@example.com'
  },
  {
    username: '王五',
    avatar: 'https://example.com/avatar3.jpg',
    contributionType: '代码开发',
    contribution: '优化了后端性能，提高了50%的响应速度',
    bio: '后端工程师，专注于系统优化和高并发处理。',
    qq: '987654321',
    wechat: 'wangwu_backend'
  }
])
</script>