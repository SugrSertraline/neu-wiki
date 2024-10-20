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
        <div class="flex-1">
            
        </div>
        <div class="hidden md:block">
            <n-button v-for="item in buttons" :key="item.id" quaternary @click="routerTo(item.value)">
                {{ item.label }}
            </n-button>
            <n-button  quaternary @click="copyUrl">
                分享
            </n-button>
            <n-button quaternary @click="openLink('https://docs.qq.com/form/page/DSUZ1Wk1LR0hicmdu')">
                建议或投稿
            </n-button>
        </div>
        <div class="block md:hidden">
            <n-popselect @update:value="routerTo" :options="buttons" trigger="click">
                <n-button quaternary  ><n-icon size="20"><MenuIcon/></n-icon></n-button>
                
            </n-popselect>
            <n-button quaternary  @click="copyUrl"><n-icon size="20"><ShareIcon/></n-icon></n-button>
            <n-button quaternary @click="openLink('https://docs.qq.com/form/page/DSUZ1Wk1LR0hicmdu')">
                <n-icon size="20"><AdviceIcon/></n-icon>
            </n-button>
        </div>
    </div>
</template>
<script setup lang="ts">

import {BookIcon,MenuIcon,AdviceIcon,ShareIcon} from '@/assets/icons'
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';
const router = useRouter();
const message = useMessage();
const routerTo = (url:string)=>{
    
    router.push({
        path:url
    });
}

const copyUrl = async ()=>{
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

interface ButtonItem {
    id: number,
    label: string,
    value:string
}
const buttons: ButtonItem[] = [
    { id: 1, label: '首页',value:'/'},
    { id: 2, label: '阅读',value:'/read' }
]

function openLink(link:string): void {
  window.open(link, '_blank');
}
</script>