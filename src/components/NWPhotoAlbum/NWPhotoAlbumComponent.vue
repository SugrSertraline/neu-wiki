<template>

  <div class="w-full px-8 sm:px-6 md:px-4">
    <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <n-image-group>
        <div id="img_id" v-for="(photo, index) in photos" :key="index"
          class="relative rounded-lg shadow-md transition-transform hover:scale-105 duration-300  overflow-hidden max-w-[98%] mx-auto">
          <n-image :src="photo.url" :alt="photo.alt" class="w-full h-full object-cover" />
        </div>
      </n-image-group>

    </div>
  </div>

</template>
<script setup lang="ts">
import type { PhotoAlbumItem } from '@/types/interface';
import { NImage } from 'naive-ui';
import { inject } from 'vue';

interface Props {
  photos: PhotoAlbumItem[];
}



const contentRef = inject('contentRef')
defineProps<Props>();


</script>
