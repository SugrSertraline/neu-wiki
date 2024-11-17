<template>
  <n-card class="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl" :bordered="false" size="large">
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-primary truncate" :title="competition.name">
          {{ competition.name }}
        </h2>
        <n-tag :type="getPeriodType(competition.period)" size="large">
          {{ competition.period }}
        </n-tag>
      </div>
    </template>
    <div class="space-y-4">
      <p class="text-gray-600">{{ competition.description }}</p>
      <div>
        <h3 class="font-semibold mb-2">适合学院：</h3>
        <div class="flex flex-wrap gap-2">
          <n-tag v-for="college in competition.suitableColleges" :key="college" size="small">
            {{ college }}
          </n-tag>
        </div>
      </div>
      <div>
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

interface Competition {
  name: string
  period: '上旬' | '中旬' | '下旬'
  description: string
  suitableColleges: string[]
  tags: string[]
}

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
    const tagTypes: { [key: string]: 'default' | 'success' | 'info' | 'warning' | 'error' } = {
      'AI': 'error',
      '创新': 'success',
      '全国性': 'info',
      '电子商务': 'warning',
      '创业': 'success',
      '计算机设计': 'info',
      '软件开发': 'warning',
      '教育科技': 'success'
    }
    return tagTypes[tag] || 'default'
  }
})
</script>

