<template>
  <div class="w-full grid gap-6 grid-cols-1 xl:grid-cols-2">

    <template v-for="(item, index) in site_contributors" :key="index">
      <n-card
        class="bg-gray-50 shadow-lg rounded-xl m-2 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
        :bordered="false">
        <div class="flex flex-col h-full">
          <div class="flex items-center mb-4">
            <n-avatar :src="item.avatar" :alt="item.username" :size="80" class="border-4 border-white shadow-lg" />
            <div class="ml-4">
              <h3 class="text-xl font-bold text-gray-800">{{ item.username }}</h3>
              <n-tag class="mt-1">
                {{ item.contributionType }}
              </n-tag>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 class="text-sm font-semibold mb-1 text-gray-700">贡献内容</h4>
              <p class="text-sm text-gray-600">{{ item.contribution }}</p>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-1 text-gray-700">个人简介</h4>
              <p class="text-sm text-gray-600">{{ item.bio }}</p>
            </div>
          </div>

          <div class="mt-auto">
            <h4 class="text-sm font-semibold mb-2 text-gray-700">联系方式</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div v-if="item.qq" class="flex items-center">
                <i-mdi-qqchat class="mr-2 text-blue-500" />
                <span>QQ: {{ item.qq }}</span>
              </div>
              <div v-if="item.wechat" class="flex items-center">
                <i-mdi-wechat class="mr-2 text-green-500" />
                <span>微信: {{ item.wechat }}</span>
              </div>
              <div v-if="item.email" class="flex items-center">
                <i-mdi-email class="mr-2 text-red-500" />
                <span>邮箱: {{ item.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </n-card>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NAvatar, NTag } from 'naive-ui'
import type { SiteContributor } from '@/types/interface';

const props = defineProps<{
  site_contributors: SiteContributor[]
}>()
</script>
