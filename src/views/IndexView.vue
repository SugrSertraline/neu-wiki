<template>
    <div class="w-full flex justify-center">
        <div class="w-full xl:w-5/6 flex flex-col lg:flex-row items-center">
            <div class="flex-1 order-2 lg:order-1 lg:pl-12">

                <!-- 标题文字 -->
                <div
                    class="text-3xl text-center flex flex-col items-center md:text-4xl lg:items-start lg:text-5xl font-bold text-green-900">
                    NEU百科全书
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
        <div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const routerTo = (url:string)=>{
    router.push(url)
}


</script>