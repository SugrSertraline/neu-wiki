<template>
    <div class="my-2">
      <n-alert :title="title" :type="case">
      {{ data }}
    </n-alert>
    </div>
</template>
<script setup lang="ts">


const props = defineProps(['title','case','data']);

</script>