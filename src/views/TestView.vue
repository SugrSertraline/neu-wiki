<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-center">贡献者</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="contributor in contributors" :key="contributor.username" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6 flex flex-col h-full">
          <div class="flex items-center mb-4">
            <n-avatar :src="contributor.avatar" :size="64" />
            <div class="ml-4">
              <h2 class="text-xl font-semibold">{{ contributor.username }}</h2>
              <p class="text-gray-600">{{ contributor.contributionType }}</p>
            </div>
          </div>
          <div class="flex-grow">
            <div v-if="contributor.contributionContent" class="mb-4">
              <h3 class="font-semibold mb-2">贡献内容：</h3>
              <p class="text-gray-700">{{ contributor.contributionContent }}</p>
            </div>
            <div v-if="contributor.personalIntro" class="mb-4">
              <h3 class="font-semibold mb-2">个人简介：</h3>
              <p class="text-gray-700">{{ contributor.personalIntro }}</p>
            </div>
            <div v-if="hasContact(contributor)">
              <h3 class="font-semibold mb-2">联系方式：</h3>
              <p v-if="contributor.contact?.qq" class="text-gray-700">QQ: {{ contributor.contact.qq }}</p>
              <p v-if="contributor.contact?.wechat" class="text-gray-700">微信: {{ contributor.contact.wechat }}</p>
              <p v-if="contributor.contact?.email" class="text-gray-700">邮箱: {{ contributor.contact.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NAvatar } from 'naive-ui'

interface Contact {
  qq?: string;
  wechat?: string;
  email?: string;
}

interface Contributor {
  username: string;
  avatar: string;
  contributionType: string;
  contributionContent?: string;
  personalIntro?: string;
  contact?: Contact;
}

const hasContact = (contributor: Contributor): boolean => {
  return !!contributor.contact && Object.values(contributor.contact).some(value => !!value);
}

const contributors = ref<Contributor[]>([
  {
    username: "张三",
    avatar: "https://via.placeholder.com/64",
    contributionType: "代码开发",
    contributionContent: "实现了用户认证功能和数据可视化模块",
    personalIntro: "全栈开发者，热爱新技术",
    contact: {
      qq: "12345678",
      email: "zhangsan@example.com"
    }
  },
  {
    username: "李四",
    avatar: "https://via.placeholder.com/64",
    contributionType: "内容创作",
    contributionContent: "编写了产品使用文档和API参考指南",
    personalIntro: "技术文档专家，擅长简化复杂概念",
    contact: {
      wechat: "lisi_wechat"
    }
  },
  {
    username: "王五",
    avatar: "https://via.placeholder.com/64",
    contributionType: "UI设计",
    contributionContent: "设计了网站的新版界面和图标系统",
    contact: {
      email: "wangwu@example.com"
    }
  },
  {
    username: "赵六",
    avatar: "https://via.placeholder.com/64",
    contributionType: "测试",
    personalIntro: "质量保证工程师，专注于自动化测试",
    contact: {
      qq: "87654321",
      wechat: "zhaoliu_wechat"
    }
  },
  {
    username: "钱七",
    avatar: "https://via.placeholder.com/64",
    contributionType: "运维",
    contributionContent: "优化了服务器架构，提高了网站性能",
  },
  {
    username: "孙八",
    avatar: "https://via.placeholder.com/64",
    contributionType: "市场推广",
    personalIntro: "数字营销专家，擅长社交媒体运营",
    contact: {
      email: "sunba@example.com"
    }
  },
  {
    username: "周九",
    avatar: "https://via.placeholder.com/64",
    contributionType: "客户支持",
    contributionContent: "建立了新的客户服务流程，提高了用户满意度",
  },
  {
    username: "吴十",
    avatar: "https://via.placeholder.com/64",
    contributionType: "产品经理",
    personalIntro: "有5年产品管理经验，专注于用户体验优化",
    contact: {
      wechat: "wushi_wechat",
      email: "wushi@example.com"
    }
  },
  {
    username: "郑十一",
    avatar: "https://via.placeholder.com/64",
    contributionType: "数据分析",
    contributionContent: "开发了新的数据分析模型，为产品决策提供支持",
    personalIntro: "数据科学家，擅长机器学习和统计分析",
  },
  {
    username: "刘十二",
    avatar: "https://via.placeholder.com/64",
    contributionType: "社区管理",
    contact: {
      qq: "11223344",
      email: "liushier@example.com"
    }
  }
])
</script>