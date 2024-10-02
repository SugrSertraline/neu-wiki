<template>
  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="configuration.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <SideMenu :value="configuration.current_page" @update:value="handleMenuChange" :data="configuration.menu_data" />
    </n-drawer-content>
  </n-drawer>


  <!-- sm,md,lg,xl,2xl -->
  <div
    class="w-64 hidden bg-gray-50 lg:block xl:w-100  shadow-sm fixed left-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4 pl-20 w-80 h-full overflow-y-auto float-right">
      <SideMenu :value="configuration.current_page" @update:value="handleMenuChange" :data="configuration.menu_data" />
    </div>
  </div>

  <div class="flex-1 overflow-hidden px-4 md:px-8 lg:px-12 pt-8 lg:ml-64 xl:ml-100 2xl:mx-100">
    <!-- 当页面变为lg以下时的头部菜单按钮 -->
    <div class="w-full z-30 bg-white lg:hidden flex fixed top-16 left-0 h-12 border-y">
      <div class="h-full flex items-center ml-8 cursor-pointer" @click="configuration.if_drawer = true">
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
          {{ configuration.page_data?.title }}
        </div>
        <div class="flex-1">

        </div>
        <div class="text-xl">
          更新截止于{{ configuration.page_data?.last_update }}
        </div>
      </div>
      <n-divider />
      <div class="xl:px-8 2xl:px-20 pb-2">
        <component v-if="configuration.page_data?.description" :is="dynamicComponent({
          type: NWComponent.NWDescription,
          data: configuration.page_data.description
        })"></component>
        <NWSection level="1" v-for="(section, section_index) in configuration.page_data?.sections" :key="section_index"
          :id="'section' + section_index" :title="calPageSection(section.title, 1, section_index)">
          <NWSection v-for="(subsection, subsection_index) in section.subsections" :key="subsection_index" level="2"
            :title="calPageSection(subsection.title, 2, (subsection_index - calUntitleSubsection(section, subsection_index)))">
            <template v-for="(content, content_index) in subsection.contents" :key="content_index">
              <component :is="dynamicComponent(content)"></component>
            </template>
          </NWSection>
        </NWSection>
      </div>
    </div>
  </div>

  <div
    class="w-100 hidden 2xl:block bg-white fixed right-5 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4">
      <div class="font-bold m-2">
        当前页面内容
      </div>
      <n-anchor :show-rail="true" :show-background="true">
        <template v-for="(item, index) in configuration.page_data?.sections" :key="index">
          <n-anchor-link v-if="item.title" :title="(index + 1) + '.' + item.title" :href="'#section' + index" />
        </template>
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
import { ref, inject, type Ref, onMounted, h, watch, computed } from 'vue';
import { SideMenu } from '@/components/SideMenu';
import { MenuOutline, ChevronUpOutline } from '@vicons/ionicons5';
import { getPageByName, PAGE_CONFIG } from '@/config/PageConfig';
import type { Content, Page, Section, SubSection } from '@/types/interface';
import { NWDescription, NWSection, NWImage, NWList, NWTips } from '@/components';
import { getCookie, numberToChinese, setCookie } from '@/utils/utils';
import type { MenuOption } from 'naive-ui';
import { NWComponent } from '@/types/enum';
import router from '@/router';
import { NWContributors } from '@/components/NWContributor';
const contentRef: any = inject('contentRef');



interface Configuration {
  if_drawer: boolean,
  current_page: string,

  page_data?: Page,
  menu_data: any[],
}
const configuration: Ref<Configuration> = ref({
  if_drawer: false,
  current_page: 'default',
  menu_data: [],
});

const handleMenuChange = (key: string, item: MenuOption) => {
  configuration.value.if_drawer=false;
  setCookie('page', key, 7);
  configuration.value.current_page = key;
}

const loadMenuConfig = () => {
  configuration.value.menu_data.splice(0, configuration.value.menu_data.length);
  PAGE_CONFIG.forEach((group) => {
    let pages: any = [];
    group.pages.forEach((page) => {
      pages.push({
        label: page.title,
        key: page.name
      })
    })
    configuration.value.menu_data.push({
      type: 'group',
      label: group.title,
      key: group.name,
      children: pages
    })
  })
}

const loadPageConfig = (name?: string) => {
  if (name) {
    configuration.value.current_page = name;
  }
  configuration.value.page_data = getPageByName(name);
}

const calUntitleSubsection = (section: Section, index: number): number => {
  let sum: number = 0;
  for (let i = 0; i < index; i++) {
    if (section.subsections[i].title == undefined) {
      sum++;
    }
  }
  return sum;
}

const calPageSection = (title: string | undefined, level: number, index: number): string | undefined => {
  if (level == 1) {
    return title == undefined ? undefined : numberToChinese(index + 1) + '、' + title;
  }
  else {
    return title == undefined ? undefined : index + 1 + '. ' + title;
  }
}

const dynamicComponent = (content: Content) => {
  switch (content.type) {
    case 'NWDescription':
      return h(NWDescription, {
        data: content.data
      });
    case 'NWImage':
      return h(NWImage, {
        width: content.width,
        src: content.src
      })
    case 'NWList':
      return h(NWList, {
        order: content.order,
        data: content.data
      })
    case 'NWTips':
      return h(NWTips, {
        title: content.title,
        case: content.case,
        data: content.data
      })
    case 'NWContributors':
      return h(NWContributors,{
        data:content.contributors
      })
  }
}



watch(configuration, (newValue, oldValue) => {
  // 获取当前路由的完整路径
  const fullPath = router.currentRoute.value.fullPath;

  // 使用正则表达式移除URL中的hash部分
  const newPath = fullPath.replace(/#.*$/, '');

  // 使用replace方法更新路由，不添加历史记录
  router.replace({ path: newPath });
  loadPageConfig(newValue.current_page == 'default' ? undefined : newValue.current_page);
}, { deep: true });




onMounted(() => {
  loadMenuConfig();
  loadPageConfig(getCookie('page'));


}
)
</script>
