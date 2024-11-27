<template>
  <div class="relative h-screen overflow-y-scroll" ref="scrollContainer">
    <div 
      v-for="(image, index) in images" 
      :key="index" 
      class="flex justify-center items-center my-10"
    >
      <img
        :src="image"
        :alt="'Image ' + index"
        :class="[
          'transition-transform duration-500 ease-in-out',
          activeIndex === index ? 'scale-110' : 'scale-100'
        ]"
        class="w-64 h-64 object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'ImageScrollEffect',
  setup() {
    const scrollContainer = ref<HTMLDivElement | null>(null);
    const images = ref([
      '/aning.jpg',
      '/aning.jpg',
      '/aning.jpg',
    ]);
    const activeIndex = ref<number | null>(null);

    let observer: IntersectionObserver | null = null;

    // Intersection Observer callback
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '-1');
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          activeIndex.value = index;
        }
      });
    };

    onMounted(() => {
      if (scrollContainer.value) {
        observer = new IntersectionObserver(onIntersect, {
          root: scrollContainer.value,
          threshold: [0.5],
        });

        scrollContainer.value.querySelectorAll('img').forEach((img, index) => {
          img.setAttribute('data-index', index.toString());
          observer?.observe(img);
        });
      }
    });

    onBeforeUnmount(() => {
      observer?.disconnect();
    });

    return {
      scrollContainer,
      images,
      activeIndex,
    };
  },
};
</script>

<style scoped>
/* 任何额外样式可以放这里 */
</style>
