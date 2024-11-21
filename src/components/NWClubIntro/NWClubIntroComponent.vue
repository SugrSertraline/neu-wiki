<template>
  <div class="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg m-8">
    <n-button type="primary" @click="showPreview"
      class="mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300">
      Show Image
    </n-button>

    <n-modal v-model:show="isPreviewVisible" :mask-closable="true" preset="card"
      style="width: auto; max-width: 90vw; max-height: 90vh;">
      <img :src="imageUrl" alt="Preview Image" class="max-w-full max-h-[80vh] object-contain" @click.stop />
    </n-modal>
    <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <n-avatar :src="ClubProps.logo" :alt="ClubProps.name" :size="100" class="flex-shrink-0" />
      <div class="flex-grow">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center sm:text-left">
          {{ ClubProps.name }}
        </h2>
        <p class="text-gray-600 mb-2 text-center sm:text-left">
          {{ ClubProps.description }}
        </p>
        <div class="flex justify-center sm:justify-start items-center space-x-2 text-gray-700">
          <n-icon size="16">
            <Qq />
          </n-icon>
          <span>QQ群：{{ ClubProps.qqGroup }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar, NIcon } from 'naive-ui'
import { Qq } from '@vicons/fa'
import type { ClubProps } from '@/types/interface';
import { NButton, NModal } from 'naive-ui'
import { ref } from 'vue';


const props = defineProps<{
  ClubProps: ClubProps
}>()


const imageUrl = ref('https://picsum.photos/1200/800')
const isPreviewVisible = ref(false)

const showPreview = () => {
  isPreviewVisible.value = true
}
</script>