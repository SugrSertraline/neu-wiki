<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header class="h-16 flex justify-center" bordered>
      <!-- 页面的头部 -->
      <HeaderComponent />
    </n-layout-header>
<!-- 页面的主要内容，使用routerview -->
    <RouterView />
  </n-layout>
</template>

<style scoped>
</style>
