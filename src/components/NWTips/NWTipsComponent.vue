<template>
    <div class="my-2">
      <n-alert :title="title" :type="case">
      {{ html_string }}
    </n-alert>
    </div>
</template>
<script setup lang="ts">
import { stringToHtml } from '@/utils/utils';
import { computed } from 'vue';

const props = defineProps(['title','case','data']);
const html_string = computed(() =>{
    if(props.data!=undefined){
        return stringToHtml(props.data);
    }
});
</script>