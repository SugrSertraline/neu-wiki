<template>
   <div class="p-4 flex flex-col items-center justify-center">
    <div class="text-l font-bold my-2">{{ title }}</div>
    <n-table class="mx-4 w-fit min-w-80" striped :single-line="false">
        <thead>
            <tr>
                <th v-for="(head,index) in data[0]"><div class="font-bold flex justify-center">{{ head }}</div></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in data.slice(1)">
                <td v-for="(item,index) in row"><div class="flex justify-center">{{ item }}</div></td>
                
            </tr>

        </tbody>
    </n-table>
   </div>
</template>
<script lang="ts" setup>
defineProps<{
    title:String
    data: String[][]
}>()
</script>