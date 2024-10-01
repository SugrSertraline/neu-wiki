<template>
    <div class="text-base my-4">
        <div class="text-lg font-bold my-2">{{subsection}}</div>
       <div v-html="html_string"></div>

    </div>

</template>
<script setup lang="ts">
import { stringToHtml } from '@/utils/utils';
import { computed } from 'vue';
const props = defineProps(['data','subsection']);
const html_string = computed(() =>stringToHtml(props.data));
</script>