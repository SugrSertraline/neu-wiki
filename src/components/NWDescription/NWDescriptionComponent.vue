<template>
    <div class="text-base my-4">
       <div class="katexspan" v-html="html_string"></div>
    </div>

</template>
<script setup lang="ts">
import { stringToHtml } from '@/utils/utils';
import { computed, onMounted, ref } from 'vue';
import katex from 'katex' 
import 'katex/dist/katex.min.css';
const props = defineProps({
    text:String
});
const html_string = computed(() =>{
    if(props.text!=undefined){
        return stringToHtml(props.text);
    }
});

</script>