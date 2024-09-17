<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent class="fixed top-0 left-0 z-10"/>
 <div class="mt-16">
  <RouterView />
 </div>

</template>

<style scoped>
</style>
