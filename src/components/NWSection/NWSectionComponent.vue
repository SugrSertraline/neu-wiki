<template>
    <div :id="id">
        <div class="my-2">
            <div v-if="title" :class="title_classes">
                {{ title }}
            </div>
            <slot />
            <n-divider v-if="level == 1" />
        </div>
    </div>

</template>
<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps(['title', 'id', 'level']);
const title_classes = computed(() => {
    return {
        'text-xl': props.level == 1,
        'font-bold': true,
        'text-gray-800': props.level == 2,
        'text-lg': props.level == 2
    }
})
</script>
