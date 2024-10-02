<template>
<div class="w-full flex justify-center">
<n-image :src="src" :width="width"></n-image>
</div>
</template>
<script setup lang="ts">
const props = defineProps(['width','src'])
</script>