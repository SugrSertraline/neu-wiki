<template>
    <n-card  class="my-2 w-full  mx-auto max-w-3xl bg-gray-100">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-primary-600 font-question ">
          {{ q }}
        </h2>
        
        <div class="text-lg text-gray-700 font-answer">
          <NWDescription :text="a"></NWDescription>
        </div>
      </div>
    </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NDivider } from 'naive-ui'
import { NWDescription } from '../NWDescription';


const props = defineProps<{
  q: string,
  a: string;
}>();

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css');

body {
  font-family: 'Noto Sans SC', sans-serif;
}

.font-question {
  font-family: 'LXGW WenKai', 'Noto Sans SC', sans-serif;
}

.font-answer {
  font-family: 'Noto Sans SC', sans-serif;
}
</style>