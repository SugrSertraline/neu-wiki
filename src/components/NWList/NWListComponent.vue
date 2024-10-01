<template>
    <div>
        <div class="space-y-1"> <!-- 为列表项添加一些垂直间距 -->
            <template v-for="(item, index) in data" :key="index">
                <div class="flex space-x-2">
                    <span class="text-base" :class="{ 'text-disc': order, 'text-[#000000]': !order }">
                        {{ order ? index + 1 + '. ' : '• ' }}
                    </span>
                    <span class="text-base" v-html="stringToHtml(item)"></span>
                </div>
            </template>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { stringToHtml } from '@/utils/utils';

const props = defineProps(['order', 'data']);

</script>