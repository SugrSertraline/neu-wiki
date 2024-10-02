<template>
    <div class="text-base my-4">
       <div v-html="html_string"></div>

    </div>

</template>
<script setup lang="ts">
import { stringToHtml } from '@/utils/utils';
import { computed } from 'vue';
const props = defineProps(['data']);
const html_string = computed(() =>stringToHtml(props.data));
</script>