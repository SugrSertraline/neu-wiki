<template>
  <div class="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg m-8">


    <n-modal v-model:show="isPreviewVisible" :mask-closable="true" preset="card"
      style="width: auto; max-width: 90vw; max-height: 90vh;">
      <img :src="ClubProps.imageUrl" alt="Preview Image" class="max-w-full max-h-[80vh] object-contain" @click.stop />
    </n-modal>
    <div
      class="flex flex-col sm:flex-row items-center justify-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <div class="flex flex-col justify-center items-center">
        <n-avatar :src="ClubProps.logo" :alt="ClubProps.name" :size="100" class="flex-shrink-0" />

        <n-button type="primary" @click="showPreview" class="mt-2 rounded-md transition-colors duration-300">
          二维码
          <template #icon>
            <n-icon>
              <QrCode />
            </n-icon>
          </template>
        </n-button>
      </div>
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
import { Qq } from '@vicons/fa';
import { QrCode } from '@vicons/ionicons5'
import type { ClubProps } from '@/types/interface';
import { NButton, NModal } from 'naive-ui'
import { ref } from 'vue';


const props = defineProps<{
  ClubProps: ClubProps
}>()


const isPreviewVisible = ref(false)

const showPreview = () => {
  isPreviewVisible.value = true
}
</script>