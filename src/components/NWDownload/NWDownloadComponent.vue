<template>
  <div class="bg-white shadow-sm border border-gray-200 rounded-xl p-4 my-3 hover:shadow-md transition-shadow duration-300">
    <!-- 响应式布局：小屏垂直，大屏水平 -->
    <div class="flex flex-col md:flex-row md:items-start gap-4">
      <!-- 左侧：图标 -->
      <div class="flex-shrink-0 self-start md:self-auto">
        <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm overflow-hidden">
          <img 
            v-if="downloadProps.iconUrl && downloadProps.iconUrl.trim() !== ''"
            :src="downloadProps.iconUrl" 
            :alt="downloadProps.title" 
            class="w-full h-full object-cover rounded-lg"
            @error="handleImageError"
          />
          <n-icon v-else size="32" class="text-blue-600">
            <Download />
          </n-icon>
        </div>
      </div>

      <!-- 中间：标题和描述 -->
      <div class="flex-1 min-w-0">
        <h2 class="text-lg font-bold text-gray-800 mb-2 break-words">
          {{ downloadProps.title }}
        </h2>
        
        <div class="text-gray-600 text-sm leading-relaxed break-words mb-3">
          <span v-if="downloadProps.description && downloadProps.description.trim()">
            {{ downloadProps.description }}
          </span>
          <span v-else class="text-gray-400 italic">
            暂无描述
          </span>
        </div>
      </div>

      <!-- 右侧：下载按钮 -->
      <div class="flex-shrink-0">
        <n-button 
          type="primary" 
          size="medium"
          class="flex items-center gap-2"
          @click="handleDownload">
          <template #icon>
            <n-icon>
              <Download />
            </n-icon>
          </template>
          下载
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon, NButton, useMessage } from 'naive-ui'
import { Download } from '@vicons/ionicons5'
import type { NWDownload } from '@/types/interface'
import { ref } from 'vue'

const message = useMessage()

const props = defineProps<{
  downloadProps: NWDownload
}>()

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const handleDownload = () => {
  try {
    // 创建一个隐藏的 a 标签来触发下载
    const link = document.createElement('a')
    link.href = props.downloadProps.downloadUrl
    
    // 如果提供了文件名，则使用它，否则尝试从 URL 中提取
    if (props.downloadProps.fileName && props.downloadProps.fileName.trim() !== '') {
      link.download = props.downloadProps.fileName
    } else {
      // 尝试从 URL 中提取文件名
      const urlParts = props.downloadProps.downloadUrl.split('/')
      const fileName = urlParts[urlParts.length - 1]
      link.download = fileName || 'download'
    }
    
    // 将 a 标签添加到 DOM 中，触发点击，然后移除
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    message.success('开始下载!')
  } catch (error) {
    console.error('下载失败:', error)
    message.error('下载失败，请稍后重试!')
  }
}
</script>