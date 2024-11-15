<template>
    <div class="w-full flex items-center flex-col justify-center">
        <div class="w-5/6 mt-2 flex">
            <n-input v-model:value="password" type="text" />
            <n-button @click="handleClick" type="primary">请求</n-button>
        </div>
        <template v-for="commit in all_commits" :key="commit.id">
            <n-card :title="commit.page_id" :bordered="true" style="width: 300px; margin: 20px;">
                <template #header-extra>
                    <n-button @click="changeCommitState(commit.id,commit.visible)">改变状态</n-button>
                </template>
                <div>
                    <n-text strong>Visible: </n-text> <n-text>{{ commit.visible === 0 ? 'No' : 'Yes' }}</n-text>
                </div>
                <div>
                    <n-text strong>ID: </n-text> <n-text>{{ commit.id }}</n-text>
                </div>
                <div>
                    <n-text strong>Time: </n-text> <n-text>{{ commit.time }}</n-text>
                </div>
                <div>
                    <n-text strong>Content: </n-text> <n-text>{{ commit.content }}</n-text>
                </div>
            </n-card>
        </template>
    </div>
</template>
<script setup lang="ts">
import { readApi } from '@/api/readApi';
import { ref } from 'vue';

const password = ref('aning@neuwiki');
const all_commits = ref<any[]>([])
const handleClick = async () => {
    const temp_commits: any[] = await readApi.getAllComment(password.value);
    temp_commits.forEach(temp_commit => all_commits.value.push(temp_commit));
}
const changeCommitState = (id: number,visible:number) => {
    readApi.changeVisible(password.value,id, visible^1)
}
</script>