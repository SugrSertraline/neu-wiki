<script setup lang="ts">
import { ref,provide} from 'vue';
import { Header } from './components/Header';

import type { LayoutInst } from 'naive-ui';

const contentRef = ref<LayoutInst | null>(null);
provide('content_ref',contentRef);
</script>

<template>
  <!-- <div class="flex flex-col h-screen">
    <div class="shadow hover:shadow-lg duration-200 fixed top-0 left-0 right-0 z-20">
      <Header />
    </div>
    <div>
      <router-view />
    </div>
  </div> -->
  <n-layout position="absolute" >
    <n-layout-header>
      <div class="shadow hover:shadow-lg duration-200 fixed top-0 left-0 right-0 z-20">
      <Header />
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px;"  ref="contentRef"  :native-scrollbar="false">
      
        <router-view />
    </n-layout>
  </n-layout>
  
</template>

<style scoped></style>
