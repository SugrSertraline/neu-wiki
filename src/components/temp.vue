<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <n-card class="w-full max-w-2xl shadow-lg" :bordered="false">
        <div class="space-y-6">
          <div class="question-section">
            <div class="flex items-center space-x-3 mb-2">
              <n-avatar round size="large" src="https://api.dicebear.com/6.x/avatars/svg?seed=interviewer" />
              <h3 class="text-lg font-semibold text-gray-800">面试官</h3>
            </div>
            <n-alert type="info" :show-icon="false" class="bg-blue-50 border-blue-200">
              <template #header>
                <div class="text-blue-700 font-medium">{{ question }}</div>
              </template>
            </n-alert>
          </div>
          
          <div class="answer-section">
            <div class="flex items-center space-x-3 mb-2">
              <n-avatar round size="large" src="https://api.dicebear.com/6.x/avatars/svg?seed=interviewee" />
              <h3 class="text-lg font-semibold text-gray-800">候选人</h3>
            </div>
            <n-alert type="success" :show-icon="false" class="bg-green-50 border-green-200">
              <template #header>
                <div class="text-green-700 font-medium">{{ answer }}</div>
              </template>
            </n-alert>
          </div>
        </div>
      </n-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { NCard, NAlert, NAvatar } from 'naive-ui'
  
  const question = ref('你能描述一下你在前端开发中遇到的最大挑战是什么，以及你是如何克服它的？')
  const answer = ref('我在前端开发中遇到的最大挑战是优化大规模应用的性能。为了克服这个挑战，我采取了以下步骤：首先，我使用Chrome DevTools进行性能分析，找出瓶颈。然后，我实施了代码分割和懒加载技术，减少初始加载时间。其次，我优化了React组件的渲染，使用了memo和useCallback等hooks来避免不必要的重渲染。最后，我实施了服务器端渲染（SSR）来改善首次内容渲染的速度。这些措施显著提高了应用的性能和用户体验。')
  </script>
  
  <style scoped>
  .n-card {
    @apply bg-white rounded-xl transition-all duration-300 ease-in-out hover:shadow-xl;
  }
  
  .n-alert {
    @apply rounded-lg border transition-all duration-300 ease-in-out;
  }
  
  .question-section .n-alert:hover {
    @apply shadow-md bg-blue-100;
  }
  
  .answer-section .n-alert:hover {
    @apply shadow-md bg-green-100;
  }
  </style>