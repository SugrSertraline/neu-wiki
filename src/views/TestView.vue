<template>
  <NWLinkList
    title="常用链接"
    :items="[
      { text: '百度', link: 'https://www.baidu.com' },
      { text: '谷歌', link: 'https://www.google.com' },
      { text: 'GitHub', link: 'https://github.com' },
    ]"
  />
</template>

<script setup lang="ts">
import { NWLinkList } from '@/components';
</script>