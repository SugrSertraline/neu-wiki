<template>
    <div class="bg-white flex w-full px-4 md:px-12 lg:px-24 xl:px-36 2xl:px-48 h-16 items-center">
        <div @click="routerTo('/')" class="flex items-center cursor-pointer">
            <n-icon size="20">
                <BookIcon />
            </n-icon>
            <div class="text-l font-semibold text-gray-600 m-2">
                NEU-Wiki
            </div>
        </div>
        <NWSearch />
        <div class="flex-1">

        </div>
        <div class="hidden md:block">
            <n-button v-for="(item, index) in buttons" :key="index" quaternary @click="item.handler">
                {{ item.label }}
            </n-button>
        </div>
        <div class="block md:hidden">
            <n-popselect @update:value="handleUpdate" :options="buttons" trigger="click">
                <n-button quaternary><n-icon size="20">
                        <MenuIcon />
                    </n-icon></n-button>
            </n-popselect>
        </div>
    </div>
</template>
<script setup lang="ts">

import { BookIcon, MenuIcon, AdviceIcon, ShareIcon } from '@/assets/icons'
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';
import { NWSearch } from '../NWSearch';
const router = useRouter();
const message = useMessage();
const routerTo = (url: string) => {
    router.push({
        path: url
    });
}

const copyUrl = async () => {
    try {
        // 获取当前页面的URL
        const url = window.location.href;
        // 将URL复制到剪贴板
        await navigator.clipboard.writeText(url);
        // 提示用户链接已复制
        message.success('链接已复制到剪贴板')
    } catch (err) {
        message.warning(`无法复制链接:${err}`);
    }

}
const handleUpdate = (value:any,option:ButtonItem)=>{
    option.handler();
}

interface ButtonItem {
    label: string,
    url:string|undefined
    value: string ,
    handler: () => void;
}
const buttons: ButtonItem[] = [
    { label: '首页', url: '/',value:'index', handler: () => routerTo('/') },
    { label: '阅读', url: '/read',value:'read',  handler: () => routerTo('/read') },
    { label: '分享', url: undefined,value:'share',  handler: () => copyUrl() },
    { label: 'Github', url: undefined,value:'Github',  handler: () => openLink('https://github.com/SugrSertraline/neu-wiki') }

]

function openLink(link: string): void {
    window.open(link, '_blank');
}
</script>