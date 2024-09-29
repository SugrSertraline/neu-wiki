<template>
    <div class="w-full flex flex-col items-center justify-center mt-16">



        <!-- 左侧介绍文字+右侧图片的容器，使用flex布局 -->
        <div class="w-full xl:w-5/6 flex flex-col lg:flex-row items-center">

            <!-- 左侧文字部分，如果lg尺寸，将order修改为1-->
            <div class="flex-1 order-2 lg:order-1 lg:pl-12">

                <!-- 标题文字 -->
                <div
                    class="text-3xl text-center flex flex-col items-center md:text-4xl lg:items-start lg:text-5xl font-bold text-green-900">
                    NEU百科
                </div>

                <!-- 标题下面的次级标题 -->
                <div class="text-3xl text-center flex flex-col items-center md:text-4xl lg:items-start 
            lg:text-start lg:text-5xl lg:leading-tight font-bold text-gray-900">
                    为NEUer们提供的简单、快捷的校园信息查询
                </div>

                <!-- 交流QQ群号码 -->
                <div class="text-xl text-center flex flex-col items-center lg:items-start  text-gray-500 mt-2">
                    交流QQ群：2152012727
                </div>

                <!-- 开始阅读按钮 -->
                <div class="flex justify-center  lg:justify-start mt-4">
                    <n-button strong type="primary" round @click="routerTo('/read')">
                        开始阅读
                    </n-button>
                </div>

            </div>

            <!-- 右侧的图片 -->
            <div class="flex-1 order-1 lg:order-2 ">
                <n-image class="w-64 lg:w-full flex justify-center" width="400" src="/index_image.png" />
            </div>
        </div>
        <div class=" px-12 w-5/6 box-border flex flex-col lg:flex-row justify-around align-bottom">
            <div class="flex-1 w-full lg:w-1/3 p-8 m-2 flex flex-col rounded-lg bg-gray-100"
                v-for="i in config.description_list" :key="i.title">
                <!-- 标题的图标 -->
                <div class="m-4">
                    <n-icon size="50">
                        <component :is="i.icon">
                        </component>
                    </n-icon>

                </div>
                <!-- 标题文字 -->
                <div class="text-xl  font-bold">
                    {{ i.title }}
                </div>
                <div class="text-lg mt-2 text-gray-600">
                    {{ i.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BubbleTeaIcon from '@/assets/icons/BubbleTeaIcon.vue';
import HotDogIcon from '@/assets/icons/HotDogIcon.vue';
import ColaIcon from '@/assets/icons/ColaIcon.vue';

const router = useRouter();
const config = ref({
    description_list: [
        {
            icon: HotDogIcon,
            title: '更新日志',
            content: '网站技术进行了重构，将原本的纯阅读型网站修改为能够进行交互的网站'
        },
        {
            icon: ColaIcon,
            title: '网站简介',
            content: '给NEUer们包括吃喝玩乐、出行、水电网费等多方面的攻略和建议'
        },
        {
            icon: BubbleTeaIcon,
            title: '联系我们',
            content: '网站作者的手机号为19282438246，有任何建议意见可以随时给我发短信'
        }
    ]
});

const routerTo = (url: string) => {
    router.push(url)
}


</script>