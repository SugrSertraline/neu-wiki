<template>
    <div class="flex flex-col space-y-4">
      <div class="flex items-start">
        <n-avatar
          class="flex-shrink-0"
          :size="40"
          src="/placeholder.svg?height=40&width=40"
          fallback-src="/placeholder.svg?height=40&width=40"
        />
        <div class="ml-3 bg-gray-100 rounded-lg py-2 px-4 max-w-[80%]">
          <p class="text-sm text-gray-900">{{ question }}</p>
        </div>
      </div>
      <div class="flex items-start justify-end">
        <div class="mr-3 bg-blue-100 rounded-lg py-2 px-4 max-w-[80%]">
          <p class="text-sm text-gray-900">{{ answer }}</p>
        </div>
        <n-avatar
          class="flex-shrink-0"
          :size="40"
          src="/placeholder.svg?height=40&width=40"
          fallback-src="/placeholder.svg?height=40&width=40"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NAvatar } from 'naive-ui'
  
  interface Props {
    question: string
    answer: string
  }
  
  defineProps<Props>()
  </script>