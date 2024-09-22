import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const usePageInfoStore = defineStore('pageInfo', () => {
  const page_info = ref({
    title: '开发者寄语',
    last_update: '2024年9月22日',
  });

  const setPageInfo = (title: string, last_update?: Date) => {
    page_info.value.title = title;
    // 检查 last_update 是否存在
    if (last_update) {
      // 如果存在，格式化日期
      const year = last_update.getFullYear();
      const month = last_update.getMonth() + 1; // getMonth() 返回的月份是从 0 开始的
      const day = last_update.getDate();
      page_info.value.last_update = `${year}年${month}月${day}日`;
    } else {
      // 如果不存在，使用默认日期
      page_info.value.last_update = '2024年9月22日';
    }
  }

  return { page_info,setPageInfo }
})
