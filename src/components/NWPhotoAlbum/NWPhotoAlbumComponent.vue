<template>
  <div class="w-full px-8 sm:px-6 md px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(photo, index) in photos" :key="index" class="aspect-square">
        <n-image :src="photo.url" :alt="photo.alt" object-fit="cover"
          class="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhotoAlbumItem } from '@/types/interface';
import { NImage } from 'naive-ui'



interface Props {
  photos: PhotoAlbumItem[];
}

defineProps<Props>();
</script>

