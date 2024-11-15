<template>
  <div class="comment-section">
    <div class="mb-4">
      <n-input-group>
        <n-input :value="modelValue" type="textarea" placeholder="写下你的评论..." :autosize="{ minRows: 3, maxRows: 5 }"
          @update:value="updateValue">
          <template #suffix>
            <n-button type="primary" @click="addComment" :disabled="!modelValue.trim()">
              发表评论
            </n-button>
          </template>
        </n-input>
      </n-input-group>
    </div>
{{internalCommits}}
    <div class="comments-list">
      <n-list v-if="internalCommits.length > 0">
        <n-list-item v-for="comment in internalCommits" :key="comment.id">
          <n-thing>
            <template #description>
              <p>{{ comment.content }}</p>
              <p class="text-xs text-gray-500">{{ formatDate(comment.time) }}</p>
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
      <n-empty v-else description="暂无评论" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NInput, NInputGroup, NButton, NList, NListItem, NThing, NEmpty } from 'naive-ui';

export interface Commit {
  page_id: string,
  id: number,
  time: string,
  content: string
}

interface Props {
  modelValue: string;
  commits: Commit[];
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'buttonClick']);
import { watch, ref } from 'vue';

// 创建一个内部的 commits 存储
const internalCommits = ref<Commit[]>(props.commits);

// 监听 props.commits 的变化
watch(() => props.commits, (newCommits) => {
  internalCommits.value = newCommits;
}, { deep: true }); // 深度监听，以确保对子数组的修改也能触发更新

const updateValue = (value: string) => {
  emit('update:modelValue', value);
}

const addComment = async () => {
  if (!props.modelValue.trim()) return;
  emit('buttonClick');
}

const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以加1
  const day = String(date.getDate()).padStart(2, '0'); // 日期
  const hours = String(date.getHours()).padStart(2, '0'); // 小时
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 分钟
  const seconds = String(date.getSeconds()).padStart(2, '0'); // 秒

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped>
.comment-section {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.comments-list {
  margin-top: 20px;
}
</style>
