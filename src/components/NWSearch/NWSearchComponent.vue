<template>
  <div class="relative">
    <n-input
      v-model:value="searchQuery"
      placeholder="搜索..."
      @focus="openSearch"
      @keyup.enter="performSearch"
      autosize
      class="w-24 sm:w-32 search-trigger"
    >
      <template #prefix>
        <n-icon :component="SearchOutline" />
      </template>
    </n-input>

    <transition name="fade">
      <div v-if="isSearchOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-y-auto" @click="closeSearch">
        <div class="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl" @click.stop>
          <div class="p-4">
            <n-input-group>
              <n-input
                v-model:value="searchQuery"
                placeholder="搜索..."
                @keyup.enter="performSearch"
                ref="modalSearchInput"
                class="w-full"
                :loading="isLoading"
              >
                <template #prefix>
                  <n-icon :component="SearchOutline" />
                </template>
              </n-input>
              <n-button type="primary" @click="performSearch" :disabled="isLoading">
                搜索
              </n-button>
            </n-input-group>

            <div class="mt-4">
              <div v-if="isLoading" class="text-center p-8 text-gray-500">
                正在努力搜索中...
              </div>
              
              <ul v-else-if="showResults" class="divide-y divide-gray-200">
                <n-scrollbar style="max-height: 60vh">
                  <li 
                    v-for="(result, index) in results" 
                    :key="index"
                    class="p-4 hover:bg-gray-100 cursor-pointer"
                    @click="handleResultClick(result.pageName)"
                  >
                    <h3 class="text-lg font-semibold text-gray-900"> - {{ result.pageTitle }} - </h3>
                    <p class="mt-1 text-sm text-gray-600" v-html="result.snippet"></p>
                  </li>
                </n-scrollbar>
              </ul>

              <div v-else-if="searchQuery && !isLoading" class="text-center p-8 text-gray-500">
                找不到与 "{{ searchQuery }}" 相关的内容。
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue';
import { NInput, NInputGroup, NButton, NIcon, NScrollbar } from 'naive-ui';
import { SearchOutline } from '@vicons/ionicons5';
import { performFullSearch, type SearchResultItem } from '@/services/SearchService';

const searchQuery = ref('');
const isSearchOpen = ref(false);
const isLoading = ref(false);
const modalSearchInput = ref<InstanceType<typeof NInput> | null>(null);
const results = ref<SearchResultItem[]>([]);

const showResults = computed(() => !isLoading.value && searchQuery.value !== '' && results.value.length > 0);

const openSearch = () => {
  isSearchOpen.value = true;
  nextTick(() => {
    modalSearchInput.value?.focus();
  });
};

const closeSearch = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    isSearchOpen.value = false;
  }
};

const performSearch = async () => {
  if (searchQuery.value.trim() === '') {
    results.value = [];
    return;
  }

  isLoading.value = true;
  try {
    const searchResults = await performFullSearch(searchQuery.value);
    results.value = searchResults;
  } catch (error) {
    console.error("搜索时发生错误:", error);
    results.value = [];
  } finally {
    isLoading.value = false;
  }
};

const handleResultClick = (pageName: string) => {
  isSearchOpen.value = false;
  searchQuery.value = '';
  results.value = [];
  window.location.href = `/read/${pageName}`;
};

watch(searchQuery, (newValue) => {
  if (isSearchOpen.value && newValue.trim() !== '') {
    performSearch();
  } else if (newValue.trim() === '') {
    results.value = [];
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-active-to {
  opacity: 0;
}

.search-trigger.n-input--focus {
  box-shadow: none !important;
}
</style>