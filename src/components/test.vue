<template>
    <n-card class="max-w-2xl mx-auto my-8 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
      <div class="flex flex-col items-center text-center">
        <n-icon size="48" class="text-indigo-500 mb-4">
          <message-circle />
        </n-icon>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">寄语</h2>
        <div class="relative">
          <n-icon size="24" class="absolute top-0 left-0 text-indigo-300 transform -translate-x-1/2 -translate-y-1/2">
            <quote />
          </n-icon>
          <p class="text-lg text-gray-700 italic px-8 py-2">{{ message }}</p>
          <n-icon size="24" class="absolute bottom-0 right-0 text-indigo-300 transform translate-x-1/2 translate-y-1/2">
            <quote />
          </n-icon>
        </div>
        <p class="mt-4 text-gray-600 font-semibold">— {{ author }}</p>
      </div>
    </n-card>
  </template>
  
  <script setup lang="ts">
  import { NCard, NIcon } from 'naive-ui'
  import { MessageCircle, Quote } from '@vicons/tabler'
  
  interface Props {
    message: string
    author: string
  }
  
  defineProps<Props>()
  </script>