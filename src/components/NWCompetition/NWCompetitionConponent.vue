<template>
    <n-card class="bg-gray-50 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl" :bordered="false" size="large">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-primary truncate" :title="competition.name">
            {{ competition.name }}
          </h2>
          <n-tag round  :type="getPeriodType(competition.period)" size="large">
            <template #icon>
        <n-icon :component="Time" />
      </template>
            {{ competition.period }}
          </n-tag>
        </div>
      </template>
      <div class="space-y-4">
        <p class="text-gray-600">{{ competition.description }}</p>
        <div  v-if="competition.suitableColleges.length>0">
          <h3 class="font-semibold mb-2">适合学院：</h3>
          <div class="flex flex-wrap gap-2">
            <n-tag v-for="college in competition.suitableColleges" :type="getTagType(college)" :key="college" size="small">
              {{ college }}
            </n-tag>
          </div>
        </div>
        <div v-if="competition.tags.length>0">
          <h3 class="font-semibold mb-2">标签：</h3>
          <div class="flex flex-wrap gap-2">
            <n-tag v-for="tag in competition.tags" :key="tag" :type="getTagType(tag)" size="small">
              {{ tag }}
            </n-tag>
          </div>
        </div>
      </div>
    </n-card>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { NCard, NTag } from 'naive-ui'
import type { Competition } from '@/types/interface';
  
import { Time } from '@vicons/ionicons5'

  
  const props = defineProps<{
    competition: Competition
  }>()
  
  const getPeriodType = computed(() => {
    return (period: string) => {
      switch (period) {
        case '上旬':
          return 'success'
        case '中旬':
          return 'warning'
        case '下旬':
          return 'error'
        default:
          return 'default'
      }
    }
  })
  
  const getTagType = computed(() => {
    return (tag: string) => {
      const tagTypes: ('default' | 'success' | 'info' | 'warning' | 'error')[] = [
    'default',
    'success',
    'info',
    'warning',
    'error'
  ];
  const randomIndex = Math.floor(Math.random() * tagTypes.length);
  return tagTypes[randomIndex];
    }
  })
  </script>
  
  