<template>
    <div class="text-xl">
        <div v-html="data"></div>
    </div>

</template>
<script setup lang="ts">
const props = defineProps(['data'])
</script>