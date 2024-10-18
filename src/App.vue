<script setup lang="ts">
import { ref, provide } from 'vue';
import { NWHeader } from './components';
import type { LayoutInst } from 'naive-ui';
const contentRef = ref<LayoutInst | null>(null);
provide('contentRef', contentRef);
</script>

<script setup>
import { onMounted } from 'vue'
onMounted(()=>{
   var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?e03d1197ba7abe7aa689977cff58c39a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
})


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
