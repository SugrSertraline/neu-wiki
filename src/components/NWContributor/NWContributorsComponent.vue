<template>
    <div class="w-full flex flex-col md:flex-row justify-start flex-wrap my-4 ">
        <div v-for="item in data"
            class="h-36 w-full md:w-1/2 p-2 box-border">
            <div class="w-full h-full rounded-lg bg-gray-100 flex flex-col justify-center items-center">
                <div class="m-2">
                <n-avatar round :size="48" :src="item.src" />
            </div>
            <div class="font-bold text-base">
                {{ item.name }}
            </div>
            <div class="text-gray-600">
                本业内容贡献者
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
</script>