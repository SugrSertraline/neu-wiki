<template>
    <div class="w-full flex items-center flex-col justify-center">
        <div class="w-5/6 mt-2 flex">
            <n-input v-model:value="password" type="text" />
            <n-button @click="handleClick" type="primary">请求</n-button>
        </div>
        <div class="flex w-full flex-wrap justify-center">
            <template v-for="commit in all_commits" :key="commit.id">
            <n-card :title="commit.page_id" :bordered="true" style="width: 300px; margin: 20px;">
                <template #header-extra>
                    <n-button @click="changeCommitState(commit.id,commit.visible)" :type="commit.visible==1?'success':'error'">改变状态</n-button>
                </template>
                <div>
                    <n-text strong>Visible: </n-text> <n-text>{{ commit.visible }}</n-text>
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
      
    </div>
</template>
<script setup lang="ts">
import { readApi } from '@/api/readApi';
import { ref } from 'vue';

const password = ref('');
const all_commits = ref<any[]>([])
const handleClick = async ()=>{
    await loadCommits();
}

const loadCommits = async () => {
    const temp_commits: any[] = await readApi.getAllComment(password.value);
    all_commits.value.splice(0,all_commits.value.length);
    temp_commits.forEach(temp_commit => all_commits.value.push(temp_commit));
}
const changeCommitState = async (id: number,visible:number) => {
    let temp_visible;
    if(visible==0)
    temp_visible=1;
    else
    temp_visible=0;
    await readApi.changeVisible(password.value,id, temp_visible);
    await loadCommits();
}
</script>