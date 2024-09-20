<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="shadow-md hover:shadow-xl duration-200 fixed top-0 left-0 right-0 z-20">
      <HeaderComponent  />
    </div>
    <div>
      <RouterView />
    </div>
  </div>


</template>

<style scoped></style>
