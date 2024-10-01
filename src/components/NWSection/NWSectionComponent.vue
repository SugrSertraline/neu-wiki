<template>
        <div :id="id" class="my-2">
        <div v-if="title" class="text-xl my-2 font-bold">
            {{ title }}
        </div>
        <slot />
        <n-divider />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps(['title', 'id'])
</script>
