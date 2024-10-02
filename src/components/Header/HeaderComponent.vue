<template>
    <div class="bg-white flex w-full px-12 md:px-12 lg:px-24 xl:px-36 2xl:px-48 h-16 items-center">
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
        </div>
        <div class="block md:hidden">
            <n-popselect @update:value="routerTo" :options="buttons" trigger="click">
                <n-button quaternary  ><n-icon size="20"><MenuIcon/></n-icon></n-button>
            </n-popselect>
        </div>
    </div>
</template>
<script setup lang="ts">

import BookIcon from '@/assets/icons/BookIcon.vue';
import MenuIcon from '@/assets/icons/MenuIcon.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const routerTo = (url:string)=>{
    
    router.push({
        path:url
    });
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
</script>