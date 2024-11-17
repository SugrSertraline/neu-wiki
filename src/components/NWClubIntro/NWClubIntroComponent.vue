<template>
    <div class="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg m-2">
      <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <n-avatar
          :src="logo"
          :alt="name"
          :size="100"
          class="flex-shrink-0"
        />
        <div class="flex-grow">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center sm:text-left">
            {{ name }}
          </h2>
          <p class="text-gray-600 mb-4 text-center sm:text-left">
            {{ description }}
          </p>
          <div class="flex justify-center sm:justify-start items-center space-x-2 text-gray-700">
            <n-icon size="16">
              <Qq />
            </n-icon>
            <span >QQ群：{{ qqGroup }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NAvatar, NIcon } from 'naive-ui'
  import { Qq } from '@vicons/fa'
  
  interface ClubProps {
    name: string
    logo: string
    description: string
    qqGroup: string
  }
  
  const props = defineProps<ClubProps>()
  </script>