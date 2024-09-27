<template>
<div :id="id">
    <n-h2 class="font-bold">{{ title }}</n-h2>
<slot></slot>
</div>

</template>
<script setup lang="ts">
const props = defineProps(['id','title'])
 
</script>