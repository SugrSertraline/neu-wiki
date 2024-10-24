<template>

            <div class="w-full h-full rounded-lg bg-gray-100 flex flex-col justify-center items-center">
                <div class="m-2">
                    <n-avatar round :size="60" :src="avatar_url" />
                </div>
                <div class="font-bold text-base">
                    {{ name }}
                </div>
                <div class="text-gray-600">
                    本业内容贡献者
                </div>
            </div>
        <!-- </div>
    </div> -->
</template>
<script setup lang="ts">

interface Props {
    name: string
    avatar_url: string
}
defineProps < Props > ();

</script>