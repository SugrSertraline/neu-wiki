<template>
    <div class="bg-white p-4 rounded-lg">
      <ul class="space-y-4">
        <li v-for="(item, index) in items" :key="index" class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div class="flex-grow mb-2 sm:mb-0">
            <p class="text-gray-700 font-bold text-lg">{{ item.text }}</p>
            <a
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-700 hover:text-green-800 transition-colors duration-200 break-all"
            >
              {{ item.link }}
            </a>
          </div>
          <n-button
            size="small"
            @click="copyToClipboard(item.link)"
            class="self-start sm:self-center"
          >
            <template #icon>
              <n-icon><CopyOutline /></n-icon>
            </template>
            复制链接
          </n-button>
        </li>
      </ul>
      <div class="mt-6">
        <n-button
          type="primary"
          @click="copyAllToClipboard"
          class="w-full"
        >
          <template #icon>
            <n-icon><CopyOutline /></n-icon>
          </template>
          一键复制所有链接
        </n-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NButton, NIcon, useMessage } from 'naive-ui'
  import { CopyOutline } from '@vicons/ionicons5'
import type { LinkListItem } from '@/types/interface';
import { getPageURLs } from '@/config/PageConfig';
  

  
  const message = useMessage()
  const items = getPageURLs()
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      message.success('链接已复制到剪贴板')
    } catch (err) {
      message.error('复制失败，请手动复制')
    }
  }
  
  const copyAllToClipboard = async () => {
    const allLinks = items.map(item => `${item.text}：${item.link}`).join('\r\n');
    try {
      await navigator.clipboard.writeText(allLinks)
      message.success('所有链接已复制到剪贴板')
    } catch (err) {
      message.error('复制失败，请手动复制')
    }
  }
  </script>