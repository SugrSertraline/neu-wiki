<template>
    <div class="relative">
      <!-- 始终可见的搜索框 -->
      <n-input
        v-model:value="searchQuery"
        placeholder="搜索..."
        @focus="openSearch"
        @keyup.enter="performSearch"
        autosize
        class="w-8 sm:w-32"
      >
        <template #prefix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>
  
      <!-- 搜索模态框 -->
      <transition name="fade">
        <div v-if="isSearchOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-y-auto" @click="closeSearch">
            <div class="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl" @click.stop>
                <div class="p-4 border-b">
              <n-input-group>
                <n-input
                  v-model:value="searchQuery"
                  placeholder="搜索..."
                  @keyup.enter="performSearch"
                  ref="modalSearchInput"
                  class="w-full"
                >
                  <template #prefix>
                    <n-icon :component="SearchOutline" />
                  </template>
                </n-input>
                <n-button type="primary" @click="performSearch">
                  搜索
                </n-button>
              </n-input-group>
  
              <div v-if="showResults" class="mt-4">
                <ul  class="divide-y divide-gray-200">
                    <n-scrollbar style="max-height: 600px">
                  <li 
                    v-for="(result,index) in results" 
                    :key="index"
                    class="p-4 hover:bg-gray-100 cursor-pointer"
                    @click="handleResultClick(result.name)"
                  >
                    <h3 class="text-lg font-semibold text-gray-900"> - {{ result.title }} - </h3>
                    <p class="mt-1 text-sm text-gray-600">{{ result.snippet }}</p>
                  </li>
                  </n-scrollbar>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, nextTick, watch } from 'vue'
  import { NInput, NInputGroup, NButton, NIcon } from 'naive-ui'
  import { SearchOutline } from '@vicons/ionicons5'
import { PAGE_CONFIG, searchInGroups } from '@/config/PageConfig';
import router from '@/router';
  
  interface SearchResult {
    title: string;
    snippet: string;
    name:string;
  }
  
  const searchQuery = ref('');
  const results = ref<SearchResult[]>([])
  const showResults = computed(() => searchQuery.value !== '' && results.value.length > 0)
  const isSearchOpen = ref(false)
  const modalSearchInput = ref<HTMLInputElement | null>(null)
  
  const openSearch = () => {
    isSearchOpen.value = true
    nextTick(() => {
      modalSearchInput.value?.focus()
    })
  }
  watch(searchQuery,(newValue,oldValue)=>{
    performSearch();
  })
  const performSearch = async () => {
    if (searchQuery.value.trim() === '') return
    const temp_results = searchInGroups(PAGE_CONFIG, searchQuery.value);
    const search_results: SearchResult[] = []
    temp_results.forEach(result=>search_results.push({
        title: result.pageTitle,
        snippet: result.snippet,
        name:result.pageName,
    }))
  
  
    results.value = search_results
  }
  
  const handleResultClick = async (result: string) => {
    isSearchOpen.value = false
    // 在这里添加导航逻辑
    await router.push(`/read/${result}`)
    location.href = location.href
  }
  
  const closeSearch = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      isSearchOpen.value = false
    }
  }



  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter-from,
  .fade-to {
    opacity: 0;
  }
  </style>