<template>
    <div class="comment-section">
        <div class="mb-4">
            <n-input-group>
                <n-input v-model:value="newComment" type="textarea" placeholder="写下你的评论..."
                    :autosize="{ minRows: 3, maxRows: 5 }">
                    <template #suffix>
                        <n-button type="primary" @click="addComment" :disabled="!newComment.trim()">
                            发表评论
                        </n-button>
                    </template>
                </n-input>
            </n-input-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { NInput, NInputGroup, NButton, NList, NListItem, NThing, NEmpty } from 'naive-ui'

const newComment = ref('')


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