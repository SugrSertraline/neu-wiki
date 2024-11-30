<script setup lang="ts">
import { NWTable } from '@/components';
const data1 = [
  ['1','2','3'],['1','2','3']
]
</script>

<template>
 <NWTable :title="'测试'" :data="data1"/>
</template>