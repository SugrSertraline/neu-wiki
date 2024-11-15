<template>

  <!-- sm,md,lg,xl,2xl 为断点的不同大小-->

  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="configuration.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <NWSideMenu :value="configuration.current_page" @update:value="handleMenuChange"
        :data="configuration.menu_data" />
    </n-drawer-content>
  </n-drawer>

  <div
    class="w-64 hidden bg-gray-50 lg:block xl:w-100 shadow-sm fixed left-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4 pl-20 w-80 h-full overflow-y-auto float-right">
      <NWSideMenu :value="configuration.current_page" @update:value="handleMenuChange"
        :data="configuration.menu_data" />
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
      <div class="h-full flex items-center mr-8  cursor-pointer" @click="scrollTo(0)">
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
      <n-result v-if="configuration.current_page == undefined" status="404" title="404 网站地址错误" description="不要瞎走凹">

      </n-result>

      <div v-else class="xl:px-8 2xl:px-20 pb-2">
        <component v-if="configuration.page_data?.description" :is="dynamicComponent({
          type: NWComponent.NWDescription,
          text: configuration.page_data.description
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
        <NWSection v-if="configuration.page_data.contributors.length != 0" level="1"
          :id="'section' + configuration.page_data.sections.length"
          :title="calPageSection('关键内容贡献者', 1, configuration.page_data.sections.length)">

          <!-- 内容贡献者组件 -->
          <div class="w-full flex flex-col md:flex-row justify-start flex-wrap my-4 ">
            <div v-for="(contributor, index) in configuration.page_data.contributors" :key="index"
              class="h-48 w-full md:w-1/2 p-2 box-border">

              <div class="w-full h-full rounded-lg bg-gray-100 flex flex-col justify-center items-center">
                <div class="m-2">
                  <n-avatar round :size="60" :src="contributor.avatar_url" />
                </div>
                <div class="font-bold text-base">
                  {{ contributor.name }}
                </div>
                <div class="text-gray-600">
                  本业内容贡献者
                </div>
              </div>
            </div>
          </div>
        </NWSection>

        <div class="flex items-center justify-between w-full max-w-4xl  mx-auto px-4 py-6">
          <n-button type="success" class="w-1/2  md:w-1/3 mr-2" @click="changePageByButton('pre')" icon-placement="left"
            secondary strong :disabled="findAdjacentPageInGroups(configuration.current_page) == 'start'">
            <template #icon>
              <n-icon>
                <ChevronLeft />
              </n-icon>
            </template>
            {{
              findAdjacentPageInGroups(configuration.current_page) == 'start' ? "当前是第一页" :
                getPageByName(findAdjacentPageInGroups(configuration.current_page))?.title
            }}
          </n-button>

          <div class="hidden lg:block">
            {{ getPageByName(configuration.current_page)?.title }}
          </div>
          <n-button type="info" class="w-1/2  md:w-1/3" @click="changePageByButton('next')" icon-placement="right"
            secondary strong :disabled="findAdjacentPageInGroups(configuration.current_page, 'next') == 'end'">
            <template #icon>
              <n-icon>
                <ChevronRight />
              </n-icon>
            </template>
            {{
              findAdjacentPageInGroups(configuration.current_page, 'next') == 'end' ? "当前是最后页" :
                getPageByName(findAdjacentPageInGroups(configuration.current_page, 'next'))?.title
            }}
          </n-button>
        </div>

        <div class="w-full flex flex-col justify-center items-center">
          <!-- <div class="w-full px-8 text-base flex justify-center items-center">
            您认为此篇文章的内容如何？
            <n-button secondary type="success" class="mx-2 w-32">
              <template #icon>
                <n-icon>
                  <ThumbsUpRegular />
                </n-icon>
              </template>
              推荐
            </n-button>
            <n-button secondary type="warning" class="mx-2 w-32">
              <template #icon>
                <n-icon>
                  <ThumbsDownRegular />
                </n-icon>
              </template>
              不推荐
            </n-button>
          </div> -->
          <NWCommit :commits="commits" v-model="commit_content" @buttonClick="handleAddCommit" />
        </div>
        <div class="flex justify-center">
          <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2024023870号-2</a>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-100 hidden 2xl:block bg-white fixed right-5 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4">
      <div class="font-bold m-2">
        当前页面内容
      </div>

      <n-anchor :bound=100 :ignore-gap="true" :offset-target="() => contentRef">
        <template v-for="(item, index) in configuration.page_data?.sections" :key="index">
          <n-anchor-link v-if="item.title" :title="(index + 1) + '.' + item.title" :href="'#section' + index" />
        </template>
      </n-anchor>
    </div>
  </div>





</template>

<script lang="ts" setup>
import { ref, inject, type Ref, onMounted, h, watch, computed, nextTick } from 'vue';
import { MenuOutline, ChevronUpOutline } from '@vicons/ionicons5';
import { ThumbsUpRegular, ThumbsDownRegular, ChevronLeft, ChevronRight } from '@vicons/fa';


import { getPageByName, PAGE_CONFIG, formatPageURLs, findAdjacentPageInGroups } from '@/config/PageConfig';
import type { Content, Page, Section, SubSection } from '@/types/interface';


import { NWSideMenu, NWDescription, NWSection, NWImage, NWList, NWTips, NWCommit, NWPersonalIntro, NWDialogue, NWMotto } from '@/components';
import { getCookie, numberToChinese, setCookie } from '@/utils/utils';
import { useMessage, type MenuOption } from 'naive-ui';
import { NWComponent } from '@/types/enum';
import router from '@/router';
import { useRoute } from 'vue-router';
import { readApi } from '@/api/readApi';
import type { Commit } from '@/components/NWCommit/NWCommitComponent.vue';

const message = useMessage();
const route = useRoute();

// 获取滚动轴所在的容器
const contentRef: any = inject('contentRef');


interface Configuration {
  if_drawer: boolean,
  current_page: string | undefined,
  page_data: Page,
  menu_data: any[],
}

const configuration: Ref<Configuration> = ref({
  if_drawer: false,
  current_page: 'default',
  page_data: {
    title: 'default',
    last_update: '2024年1月1日',
    name: 'default',
    description: undefined,
    sections: [],
    contributors: []
  },
  menu_data: [],
});

const handleMenuChange = (key: string, item: MenuOption) => {
  configuration.value.if_drawer = false;
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
const commit_content = ref('');  // 评论的内容

const commits = ref<any[]>([]);

const loadCommits = async () => {
  if (!configuration.value.current_page)
    return;
  const temp_commits: Commit[] = await readApi.getCommit(configuration.value.current_page);
  commits.value.splice(0, commits.value.length);
  temp_commits.forEach(temp_commit => commits.value.push({
    id: temp_commit.id,
    content: temp_commit.content,
    time: temp_commit.time
  }))
}
const loadPageConfig = async (name?: string) => {

  const page = getPageByName(name);
  if (!name) {
    return
  }
  if (page) {
    configuration.value.current_page = page ? name : undefined;
    configuration.value.page_data = page;
    await loadCommits();

    // 获取当前路由的 fullPath
    const fullPath = route.fullPath;

    // 检查 fullPath 是否以 /read/ 开头
    if (fullPath.startsWith('/read/')) {
      // 如果已经以 /read/ 开头，检查是否符合 /read/name 的格式
      const readPathRegex = /\/read\/([^\/]+)$/;
      const match = fullPath.match(readPathRegex);

      if (match && match[1] === name) {
        // 如果 URL 已经符合 /read/name 的格式，不执行 window.history.replaceState
        console.log('URL already matches the /read/name pattern, skipping history.replaceState');
      } else {
        // 如果 URL 不符合 /read/name 的格式，更新为符合格式的 URL
        if (name) {
          window.history.replaceState(null, '', `/${name.startsWith('read/') ? name : 'read/' + name}`);
        }
        console.log('URL did not match the /read/name pattern, updated URL');
      }
    } else {
      // 如果不以 /read/ 开头，直接更新为符合格式的 URL
      window.history.replaceState(null, '', `/read/${name}`);
      console.log('URL did not start with /read/, updated URL');
    }
  }
};


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
        text: content.text
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
    case 'NWPersonalIntro':
      return h(NWPersonalIntro, {
        user: {
          name: content.name,
          avatarUrl: content.avatarUrl,
          college: content.college,
          grade: content.grade,
          major: content.major,
          graduation: content.graduation,
          introduction: content.introduction,
          achievements: content.achievements,
          qq: content.qq,
          wechat: content.wechat,
          github: content.github,
          email: content.email
        }
      })
    case 'NWDialogue':
      return h(NWDialogue, {
        q: content.q,
        a: content.a
      })
    case 'NWMotto':
      return h(NWMotto, {
        message: content.message,
        author: content.author
      })
  }

}



watch(() => configuration.value.current_page, (newValue, oldValue) => {
  // 获取当前路由的完整路径
  const fullPath = router.currentRoute.value.fullPath;
  // 使用正则表达式移除URL中的hash部分
  const newPath = fullPath.replace(/#.*$/, '');
  // 使用replace方法更新路由，不添加历史记录
  router.replace({ path: newPath });
  scrollTo(0);
  // 加载页面配置
  loadPageConfig(newValue);
}, { deep: true });


const scrollTo = (distance: number) => {
  nextTick(() => {
    if (contentRef.value) {
      contentRef.value.scrollTo({ top: distance, behavior: 'smooth' });
    }
  });
};

const handleAddCommit = () => {
  if (!configuration.value.current_page)
    return;
  const mes = readApi.addCommit(configuration.value.current_page, commit_content.value);
  console.log(mes);
  loadCommits();
}

const changePageByButton = (direction: string): void => {
  if (configuration.value.current_page == undefined)
    return;
  if (direction == 'pre') {
    if (findAdjacentPageInGroups(configuration.value.current_page) == 'start') {
      message.success('当前是第一页！');
    }
    configuration.value.current_page = findAdjacentPageInGroups(configuration.value.current_page);
  } else {
    if (findAdjacentPageInGroups(configuration.value.current_page) == 'end') {
      message.success('当前是最后一页！');
    }
    configuration.value.current_page = findAdjacentPageInGroups(configuration.value.current_page, "next");
  }
}

onMounted(() => {
  loadMenuConfig();
  if (route.params.page) {
    let page = Array.isArray(route.params.page) ? route.params.id[0] : route.params.page;
    loadPageConfig(page);
  } else {
    if (getCookie('page')) {
      configuration.value.current_page = getCookie('page');
    } else {
      configuration.value.current_page = 'DeveloperGreeting';
    }
  }
}
)


</script>
