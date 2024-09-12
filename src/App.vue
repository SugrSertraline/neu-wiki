<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
    <n-layout position="absolute">
      <n-layout-header class="h-16 flex justify-center" bordered>
        <HeaderComponent/>
      </n-layout-header>
            <RouterView/>
    </n-layout>
</template>

<style scoped>
</style>
