<template>
      <div class="p-4">
        <n-list>
        <n-list-item v-for="(problem, index) in sortedProblems" :key="index">
          <div :class="[
            'flex items-start gap-4 p-4 rounded-lg transition-all',
            index === 0 ? 'bg-yellow-100 scale-110' :
            index === 1 ? 'bg-gray-100 scale-105' :
            index === 2 ? 'bg-orange-100 scale-100' : 'bg-white'

          ]">
            <n-text class="text-2xl font-bold min-w-[2ch]">
              {{ index + 1 }}.
            </n-text>
            <div class="flex-grow">
              <n-text :class="['font-semibold', index < 3 ? 'text-lg' : 'text-base']">
                {{ problem.description }}
              </n-text>
              <n-space align="center" class="mt-2">
                <n-rate readonly :value="problem.urgency" />
                <n-text>紧急程度</n-text>
              </n-space>
            </div>
          </div>
        </n-list-item>
      </n-list>
      </div>
  </template>
  
  <script lang="ts" setup>
import type { Problem } from '@/types/interface';
import { computed } from 'vue';

    const sortedProblems = computed(() => 
        [...props.problems].sort((a, b) => b.urgency - a.urgency)
      )
 
  const props = defineProps<{
    problems:Problem[]
  }>()
 
 </script>