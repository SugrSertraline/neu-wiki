<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">My Photo Album</h1>
    <NWPhotoAlbum :photos="myPhotos" />
  </div>
</template>

<script setup lang="ts">
import { NWPhotoAlbum } from '@/components';
const myPhotos = [
  { url: '/aning.jpg', alt: 'Mountain landscape' },
  { url: '/aning.jpg', alt: 'River in forest' },
  { url: '/aning.jpg', alt: 'Cloudy mountain peaks' },
  // ... 添加更多照片
]
</script>