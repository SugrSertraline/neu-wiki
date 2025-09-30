<template>
  <div class="bg-white shadow-sm border border-gray-200 rounded-xl p-4 my-3 hover:shadow-md transition-shadow duration-300">
    <!-- 二维码预览模态框 -->
    <n-modal v-model:show="isPreviewVisible" :mask-closable="true" preset="card"
      style="width: auto; max-width: 90vw; max-height: 90vh;">
      <img :src="ClubProps.imageUrl" alt="Preview Image" class="max-w-full max-h-[80vh] object-contain" @click.stop />
    </n-modal>

    <div class="flex items-start gap-4">
      <!-- 左侧：Logo -->
      <div class="flex-shrink-0">
        <n-avatar 
          v-if="hasCustomLogo"
          :src="ClubProps.logo" 
          :alt="ClubProps.name" 
          :size="64" 
          class="bg-gray-100 shadow-sm" 
          round 
        />
        <!-- 没有自定义logo时显示随机SVG图标 -->
        <div v-else class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-sm overflow-hidden">
          <img :src="defaultIcon" :alt="ClubProps.name" class="w-10 h-10 object-contain" />
        </div>
      </div>

      <!-- 中间：名称和群号 -->
      <div class="flex flex-col justify-center min-w-0">
        <h2 class="text-lg font-bold text-gray-800 mb-2 break-words">
          {{ ClubProps.name }}
        </h2>
        
        <div class="flex flex-col gap-1.5 min-w-[200px]">
          <n-button 
            tertiary 
            type="default" 
            size="small"
            @click="copyText(ClubProps.qqGroup)">
            <template #icon>
              <n-icon>
                <Copy />
              </n-icon>
            </template>
            <span class="truncate">QQ群：{{ ClubProps.qqGroup }}</span>
          </n-button>

          <n-button 
            v-if="ClubProps.imageUrl"
            type="primary" 
            size="small"
            @click="showPreview">
            <template #icon>
              <n-icon>
                <QrCode />
              </n-icon>
            </template>
            扫码加入
          </n-button>
        </div>
      </div>

      <!-- 右侧：介绍 -->
      <div class="flex-1 min-w-0 pl-4 border-l border-gray-200">
        <div class="text-gray-600 text-sm leading-relaxed break-words">
          <span v-if="ClubProps.description && ClubProps.description.trim()">
            {{ ClubProps.description }}
          </span>
          <span v-else class="text-gray-400 italic">
            简介正在来的路上...
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar, NIcon, useMessage, NButton, NModal } from 'naive-ui'
import { QrCode, Copy } from '@vicons/ionicons5'
import type { ClubProps } from '@/types/interface'
import { ref, computed } from 'vue'
import { getRandomEmojiIcon } from '@/utils/emojiIconUtils'

const message = useMessage()

const props = defineProps<{
  ClubProps: ClubProps
}>()

const isPreviewVisible = ref(false)

// 计算属性：判断是否有自定义 logo
const hasCustomLogo = computed(() => {
  return props.ClubProps.logo && 
         props.ClubProps.logo.trim() !== '' && 
         props.ClubProps.logo !== '/neulogo.png'
})

// 计算属性：获取默认图标（基于社团名称生成稳定的随机图标）
const defaultIcon = computed(() => {
  return getRandomEmojiIcon(props.ClubProps.name)
})

const showPreview = () => {
  isPreviewVisible.value = true
}

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    message.success('链接已复制到剪贴板!')
  } catch (err) {
    message.error('复制失败!')
  }
}
</script>