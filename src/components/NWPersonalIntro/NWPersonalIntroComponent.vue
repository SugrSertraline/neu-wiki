<template>
  <div class="py-6">
    <n-card class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex flex-col lg:flex-row items-center p-4">
        <div class="flex flex-col sm:flex-row items-center lg:w-2/3">
          <n-avatar object-fit="cover" :src="user?.avatarUrl ?? defaultAvatarUrl" :fallback-src="defaultAvatarUrl" :size="80" class="rounded-full mb-4 sm:mb-0" />
          <div class="ml-0 sm:ml-6 text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-800">{{ user.name }}</h2>
            <p class="text-gray-600">{{ user.college }} - {{ user.grade }}</p>
            <p v-if="user.major" class="text-gray-600">专业: {{ user.major }}</p>
          </div>
        </div>
        <div class="lg:w-1/3 mt-4 lg:mt-0 text-center lg:text-right">
          <h3 class="font-semibold text-lg text-gray-700">毕业去向</h3>
          <p class="text-xl font-bold text-blue-600 mt-2">{{ user.graduation }}</p>
        </div>
      </div>
      <div class="px-4 py-2">
        <h3 class="font-semibold text-gray-700 text-center">个人介绍</h3>
        <p class="text-gray-600 text-center mt-2">{{ user.introduction }}</p>
      </div>
      <div v-if="user.achievements" class="px-4 py-4">
        <h3 class="font-semibold text-gray-700 mb-3 text-center">个人成就</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <n-tag v-for="achievement in user.achievements" :key="achievement" type="success" round>
            {{ achievement }}
          </n-tag>
        </div>
      </div>
      <div class="px-4 py-4">
        <div class="grid  place-items-center grid-cols-1 gap-4 md:grid-cols-2">
          <div v-if="user.qq" class="flex items-center">
            <n-icon size="20" class="text-blue-500 mr-2">
              <Qq />
            </n-icon>
            <span class="text-gray-600">QQ: {{ user.qq }}</span>
          </div>
          <div v-if="user.wechat" class="flex items-center">
            <n-icon size="20" class="text-green-500 mr-2">
              <LogoWechat />
            </n-icon>
            <span class="text-gray-600">微信: {{ user.wechat }}</span>
          </div>
          <div v-if="user.github" class="flex items-center">
            <n-icon size="20" class="text-gray-700 mr-2">
              <Github />
            </n-icon>
            <a :href="user.github" target="_blank" class="hover:underline">点此链接前往</a>
          </div>
          <div v-if="user.email" class="flex items-center">
            <n-icon size="20" class="text-red-500 mr-2">
              <mail />
            </n-icon>
            <span class="text-gray-600">邮箱: {{ user.email }}</span>
          </div>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { NCard, NAvatar, NIcon, NTag } from 'naive-ui'
import { MessageCircle, Mail } from '@vicons/tabler';
import { Qq, Github } from '@vicons/fa';
import { LogoWechat } from '@vicons/ionicons5';
interface UserProfile {
  name: string
  avatarUrl: string
  college: string
  grade: string
  major?: string
  graduation: string
  introduction: string
  achievements?: string[]
  qq?: string
  wechat?: string
  github?: string
  email?: string
}

const props = defineProps<{
  user: UserProfile
}>()

 const defaultAvatarUrl = 'https://q8.itc.cn/q_70/images03/20240113/49890c994f1b4e1b90ed902f1cb838f3.jpeg'
</script>