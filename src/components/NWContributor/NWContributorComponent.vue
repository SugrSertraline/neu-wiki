<template>
    <n-card class="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out h-full hover:shadow-xl hover:-translate-y-1" :bordered="false">
      <div class="flex flex-col h-full">
        <div class="flex items-center mb-4">
          <n-avatar
            :src="contributor.avatar"
            :alt="contributor.username"
            :size="80"
            class="border-4 border-white shadow-lg"
          />
          <div class="ml-4">
            <h3 class="text-xl font-bold text-gray-800">{{ contributor.username }}</h3>
            <n-tag class="mt-1">
              {{ contributor.contributionType }}
            </n-tag>
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="text-sm font-semibold mb-1 text-gray-700">贡献内容</h4>
            <p class="text-sm text-gray-600">{{ contributor.contribution }}</p>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-1 text-gray-700">个人简介</h4>
            <p class="text-sm text-gray-600">{{ contributor.bio }}</p>
          </div>
        </div>
  
        <div class="mt-auto">
          <h4 class="text-sm font-semibold mb-2 text-gray-700">联系方式</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div v-if="contributor.qq" class="flex items-center">
              <i-mdi-qqchat class="mr-2 text-blue-500" />
              <span>QQ: {{ contributor.qq }}</span>
            </div>
            <div v-if="contributor.wechat" class="flex items-center">
              <i-mdi-wechat class="mr-2 text-green-500" />
              <span>微信: {{ contributor.wechat }}</span>
            </div>
            <div v-if="contributor.email" class="flex items-center">
              <i-mdi-email class="mr-2 text-red-500" />
              <span>邮箱: {{ contributor.email }}</span>
            </div>
          </div>
        </div>
      </div>
    </n-card>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { NCard, NAvatar, NTag } from 'naive-ui'
  
  interface SiteContributor {
    username: string,
    avatar: string,
    contributionType: string,
    contribution: string,
    bio: string,
    qq?: string,
    wechat?: string,
    email?: string
  }
  
  const props = defineProps<{
    contributor: SiteContributor
  }>()
  
  
  </script>