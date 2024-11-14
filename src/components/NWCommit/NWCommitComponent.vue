<template>
    <div class="comment-section">
      <div class="mb-4">
        <n-input-group>
          <n-input
            v-model:value="newComment"
            type="textarea"
            placeholder="写下你的评论..."
            :autosize="{ minRows: 3, maxRows: 5 }"
          >
            <template #suffix>
              <n-button type="primary" @click="addComment" :disabled="!newComment.trim()">
                发表评论
              </n-button>
            </template>
          </n-input>
        </n-input-group>
      </div>
  
      <div class="comments-list">
        <n-list v-if="comments.length > 0">
          <n-list-item v-for="comment in comments" :key="comment.id">
            <n-thing>
              <template #description>
                <p>{{ comment.content }}</p>
                <p class="text-xs text-gray-500">{{ formatDate(comment.timestamp) }}</p>
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
        <n-empty v-else description="暂无评论" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { NInput, NInputGroup, NButton, NList, NListItem, NThing, NEmpty } from 'naive-ui'
  
  const newComment = ref('')
  const comments = ref([])
  
  const addComment = () => {
    if (newComment.value.trim()) {
      comments.value.unshift({
        id: Date.now(),
        content: newComment.value.trim(),
        timestamp: new Date()
      })
      newComment.value = ''
    }
  }
  
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
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