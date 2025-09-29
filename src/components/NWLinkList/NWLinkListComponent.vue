<template>
  <div class="bg-white p-4 rounded-lg">
    <!-- 加载状态 -->
    <div v-if="loading" class="flex justify-center items-center py-8">
      <n-spin size="medium">
        <template #description>
          正在加载链接...
        </template>
      </n-spin>
    </div>

    <!-- 空状态 -->
    <div v-else-if="items.length === 0" class="text-center py-8 text-gray-500">
      暂无链接
    </div>

    <!-- 链接列表 -->
    <ul v-else class="space-y-4">
      <li 
        v-for="(item, index) in items" 
        :key="index" 
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
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

    <!-- 一键复制按钮 -->
    <div v-if="items.length > 0" class="mt-6">
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
import { NButton, NIcon, NSpin, useMessage } from 'naive-ui';
import { CopyOutline } from '@vicons/ionicons5';

// 定义 props 接口
interface LinkItem {
  text: string;
  link: string;
}

interface Props {
  items?: LinkItem[];
  loading?: boolean;
}

// 接收 props
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  loading: false
});

const message = useMessage();

/**
 * 复制单个链接到剪贴板
 */
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    message.success('链接已复制到剪贴板');
  } catch (err) {
    message.error('复制失败，请手动复制');
    console.error('Copy failed:', err);
  }
};

/**
 * 复制所有链接到剪贴板
 */
const copyAllToClipboard = async () => {
  const allLinks = props.items
    .map(item => `${item.text}：${item.link}`)
    .join('\r\n');
  
  try {
    await navigator.clipboard.writeText(allLinks);
    message.success('所有链接已复制到剪贴板');
  } catch (err) {
    message.error('复制失败，请手动复制');
    console.error('Copy all failed:', err);
  }
};
</script>