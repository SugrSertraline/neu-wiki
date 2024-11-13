<script setup lang="ts">
import { ref, provide } from 'vue';
import { NWHeader } from './components';
import type { LayoutInst } from 'naive-ui';
const contentRef = ref<LayoutInst | null>(null);
provide('contentRef', contentRef);

import { onMounted } from 'vue';

declare global {
  interface Window {
    _hmt?: string[];
  }
}

onMounted(() => {
  // 使用 window 对象来声明 _hmt，确保它在全局作用域中是可访问的
  const _hmt: string[] = window._hmt || [];

  (function () {
    const hm: HTMLScriptElement = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e03d1197ba7abe7aa689977cff58c39a";
    const s: HTMLScriptElement | null = document.getElementsByTagName("script")[0] as HTMLScriptElement | null;
    if (s) {
      s.parentNode?.insertBefore(hm, s);
    }
  })();
});

</script>



<template>
  <n-notification-provider>
    <n-message-provider>
      <n-layout position="absolute">
        <n-layout-header>
          <div class="shadow hover:shadow-lg duration-200 fixed top-0 left-0 right-0 z-20">
            <NWHeader />
          </div>
        </n-layout-header>

        <n-layout position="absolute" style="top: 64px;" ref="contentRef" :native-scrollbar="false">
          <router-view />
        </n-layout>

      </n-layout>
    </n-message-provider>
  </n-notification-provider>
</template>

<style scoped></style>
