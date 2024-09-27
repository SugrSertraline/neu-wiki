<template>
  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="readPageConfig.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <MenuComponent :data="readPageConfig.menu_data" />
    </n-drawer-content>
  </n-drawer>

  <div
    class="w-100 hidden bg-gray-50 lg:block shadow-sm fixed left-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0  ">
    <div class="p-4 pl-20 w-80 h-full overflow-y-auto float-right">
      <MenuComponent :data="readPageConfig.menu_data" />
    </div>
  </div>

  <div class="flex-1 overflow-hidden px-16 pt-8 lg:ml-100 xl:mx-100">


      <!-- 当页面变为lg以下时的头部菜单按钮 -->
    <div class="w-full z-30 bg-white lg:hidden flex fixed top-16 left-0 h-12 border-y">
      <div class="h-full flex items-center ml-8 cursor-pointer" @click="readPageConfig.if_drawer = true">
        <n-button type="quaternary"><template #icon>
            <n-icon>
              <MenuOutline />
            </n-icon>
          </template></n-button>
        <div class="mx-2">
          菜单
        </div>
      </div>
      <div class="flex-1"></div>
      <div class="h-full flex items-center mr-8  cursor-pointer"
        @click="contentRef?.scrollTo({ top: 0, behavior: 'smooth' })">
        <div class="mx-2">
          回到顶部
        </div>
        <n-button type="quaternary"><template #icon>
            <n-icon>
              <ChevronUpOutline />
            </n-icon>
          </template>
        </n-button>

      </div>
    </div>


    <!-- 页面的标题和内容 -->
    <div class="mt-8 lg:mt-0">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="text-4xl font-bold text-gray-800 mx-4 ">
          {{ pageInfoStore.page_info.title }}
        </div>
        <div class="flex-1">

        </div>
        <div class="text-xl">
          更新截止于{{ pageInfoStore.page_info.last_update }}
        </div>
      </div>
      <n-divider />
      <div class="xl:px-8 2xl:px-20 pb-10">
        <router-view />
      </div>
    </div>
  </div>

  <div
    class="w-100 hidden xl:block bg-white fixed right-5 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4">
      <div class="font-bold m-2">
        当前页面内容
      </div>
      <n-anchor :ignore-gap="true" :show-rail="true" :show-background="true">
        <n-anchor-link v-for="item in readPageConfig.anchor_data" :key="item.href" :title="item.title"
          :href="item.href" />
      </n-anchor>
    </div>
  </div>



  <!-- <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full px-8 flex justify-center items-center">
      您认为此篇文章的内容如何？
      <n-button type="tertiary" class="mx-2">
        推荐
      </n-button>
      <n-button type="tertiary">
        不推荐
      </n-button>
    </div>

    <div class="w-5/6 flex flex-col items-center">

      <div class="w-5/6 lg:w-2/3 text-xl font-bold">
        建议反馈
      </div>
      <div class="my-2 w-full flex justify-center ">
        <div class="w-5/6 lg:w-2/3">
          <n-input type="textarea" placeholder="请输入您的建议和意见，如需投稿请选择“投稿专区”。" />
          <div class="flex mt-2 justify-between items-center">
            <div class="flex-1 flex flex-col justify-center items-center border mr-2 rounded">
              <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
                <n-button size="small" class="mt-2 ml-2">上传文件</n-button>
                未选择任何文件
              </n-upload>
            </div>
            <div>
              <n-button size="large">确认</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

</template>

<script lang="ts" setup>
import { onMounted, ref, h, inject, type Ref, watch } from 'vue';
import MenuComponent from '../components/MenuComponent.vue';
import { NIcon, type LayoutInst } from 'naive-ui';
import { onBeforeRouteLeave, useRoute, RouterLink } from 'vue-router';
import { MenuOutline, ChevronUpOutline } from '@vicons/ionicons5';
import { PAGE_CONFIG } from '@/config/PageConfig';
import { usePageInfoStore } from '@/stores/PageInfoStore';
const pageInfoStore = usePageInfoStore();
const route = useRoute();
const contentRef: any = inject('content_ref');
const renderLinkItem = (label: string, key: string, path: string) => {
  return {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: path
          }
        },
        { default: () => label }
      ),
    key: key,
  }
}

interface ReadPageConfig {
  if_drawer: boolean;
  menu_data: any[];
  anchor_data: any[];
}

const readPageConfig: Ref<ReadPageConfig> = ref({
  if_drawer: false,
  menu_data: [],
  anchor_data: [{
    title: '默认标题',
    href: '#default'
  }]

})

const updateAnchorData = (to: string) => {
  console.log(to);
  readPageConfig.value.anchor_data.splice(0, readPageConfig.value.anchor_data.length);
  PAGE_CONFIG.forEach((group_item) => {
    group_item.children.forEach((item) => {
      if (item.url == to) {
        item.sections?.forEach((section) => {
          readPageConfig.value.anchor_data.push(section);
        })
      }
    })
  })
};

const updateMenuData = () => {
  readPageConfig.value.menu_data.splice(0, readPageConfig.value.menu_data.length);
  PAGE_CONFIG.forEach((group_item) => {
    let pages: any[] = [];
    group_item.children.forEach((item) => {
      pages.push(renderLinkItem(item.title, item.name, item.url));
    })
    readPageConfig.value.menu_data.push({
      label: group_item.title,
      type: 'group',
      children: pages
    })

  })
};


onMounted(() => {
  updateAnchorData(route.path);
  updateMenuData();
})

watch(() => route.path, (newPath, oldPath) => {
  // 确保路径发生变化
  if (newPath !== oldPath) {
    updateMenuData();
    updateAnchorData(newPath);
  }
});   
</script>
