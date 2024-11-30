<template>
   <div class=" flex justify-center p-4">
    <n-config-provider :katex="katex">
        <n-equation  :value="equation" />
    </n-config-provider>
   </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.css'

defineProps<{
    equation:String
}>()



    
</script>