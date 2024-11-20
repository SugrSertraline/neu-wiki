<template>
    <NWClubIntro
      :name="clubName"
      :logo="clubLogo"
      :description="clubDescription"
      :qqGroup="clubQqGroup"
    />
</template>

<script setup>
import { NWClubIntro } from '@/components';
import { ref } from 'vue';

const clubName = ref('Vue.js爱好者俱乐部');
const clubLogo = ref('path/to/your/logo.png');
const clubDescription = ref('这里是Vue.js爱好者的聚集地，欢迎加入交流。');
const clubQqGroup = ref('123456789');
</script>