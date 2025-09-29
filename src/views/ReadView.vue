<template>
  <n-drawer :default-width="300" v-model:show="configuration.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <NWSideMenu :value="configuration.current_page" @update:value="handleMenuChange" :data="configuration.menu_data" />
    </n-drawer-content>
  </n-drawer>

  <div
    class="w-64 hidden bg-gray-50 lg:block xl:w-100 shadow-sm fixed left-0 top-16 bottom-0 overflow-y-auto z-10 transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="p-4 pl-20 w-80 h-full overflow-y-auto float-right">
      <NWSideMenu :value="configuration.current_page" @update:value="handleMenuChange" :data="configuration.menu_data" />
    </div>
  </div>

  <div class="flex-1 overflow-hidden px-4 md:px-8 lg:px-12 pt-8 lg:ml-64 xl:ml-100 2xl:mx-100">
    <div class="w-full z-10 bg-white lg:hidden flex fixed top-16 left-0 h-12 border-y">
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

      <div v-else class="px-2 pb-2">
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
                  本页内容贡献者
                </div>
              </div>
            </div>
          </div>
        </NWSection>

        <div class="flex items-center justify-between w-full max-w-4xl  mx-auto px-4 py-6">
          <n-button type="success" class="w-1/2  md:w-1/3 mr-2" @click="changePageByButton('pre')" icon-placement="left"
            secondary strong :disabled="configuration.prevPageInfo === 'start'">
            <template #icon>
              <n-icon>
                <ChevronLeft />
              </n-icon>
            </template>
            {{
              configuration.prevPageInfo === 'start' ? "当前是第一页" :
              (configuration.prevPageInfo as PageMeta)?.title
            }}
          </n-button>

          <div class="hidden lg:block">
            {{ configuration.page_data?.title }}
          </div>
          <n-button type="info" class="w-1/2  md:w-1/3" @click="changePageByButton('next')" icon-placement="right"
            secondary strong :disabled="configuration.nextPageInfo === 'end'">
            <template #icon>
              <n-icon>
                <ChevronRight />
              </n-icon>
            </template>
            {{
              configuration.nextPageInfo === 'end' ? "当前是最后页" :
              (configuration.nextPageInfo as PageMeta)?.title
            }}
          </n-button>
        </div>


        <div class="w-full flex flex-col justify-center items-center">
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
import { ref, inject, type Ref, onMounted, h, watch, nextTick } from 'vue';
import { MenuOutline, ChevronUpOutline } from '@vicons/ionicons5';
import { ChevronLeft, ChevronRight } from '@vicons/fa';

// 导入页面服务
import {
  buildMenuConfig,
  getPageByName,
  findAdjacentPage,
  getPageInfo,
  preloadAdjacentPages,
  getAllPageURLs
} from '@/services/PageService';
import type { Content, Page, Section, PageMeta } from '@/types/interface';

import {
  NWSideMenu, NWDescription, NWSection, NWImage, NWList, NWTips,
  NWCommit, NWPersonalIntro, NWDialogue, NWMotto, NWProblemsRank,
  NWSiteContributors, NWCompetition, NWLinkList, NWClubIntro,
  NWPhotoAlbum, NWEquation, NWTable
} from '@/components';
import { getCookie, numberToChinese, setCookie } from '@/utils/utils';
import { useMessage, type MenuOption } from 'naive-ui';
import { NWComponent } from '@/types/enum';
import router from '@/router';
import { useRoute } from 'vue-router';
import { readApi } from '@/api/readApi';
import type { Commit } from '@/components/NWCommit/NWCommitComponent.vue';

const message = useMessage();
const route = useRoute();
const contentRef: any = inject('contentRef');

// 配置状态接口
interface Configuration {
  if_drawer: boolean;
  current_page: string | undefined;
  page_data: Page;
  menu_data: any[];
  prevPageInfo: PageMeta | null | 'start';
  nextPageInfo: PageMeta | null | 'end';
  linkListData: Array<{ text: string; link: string }>;
  linkListLoading: boolean;
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
  prevPageInfo: null,
  nextPageInfo: null,
  linkListData: [],
  linkListLoading: false
});

const commit_content = ref('');
const commits = ref<any[]>([]);

// ==================== 菜单相关 ====================

const handleMenuChange = (key: string, item: MenuOption) => {
  configuration.value.if_drawer = false;
  setCookie('page', key, 7);
  configuration.value.current_page = key;
};

const loadMenuConfig = async () => {
  configuration.value.menu_data = await buildMenuConfig();
};

// ==================== 链接列表相关 ====================

/**
 * 加载所有页面链接（用于链接汇总页面）
 */
const loadLinkListData = async () => {
  try {
    configuration.value.linkListLoading = true;
    configuration.value.linkListData = await getAllPageURLs();
  } catch (error) {
    console.error('Failed to load link list:', error);
    message.error('链接列表加载失败');
  } finally {
    configuration.value.linkListLoading = false;
  }
};

// ==================== 评论相关 ====================

const loadCommits = async () => {
  if (!configuration.value.current_page) return;

  try {
    const temp_commits: Commit[] = await readApi.getCommit(configuration.value.current_page);
    commits.value.splice(0, commits.value.length);
    temp_commits.forEach(temp_commit => commits.value.push({
      id: temp_commit.id,
      content: temp_commit.content,
      time: temp_commit.time
    }));
  } catch (error) {
    console.error('Failed to load commits:', error);
  }
};

const handleAddCommit = () => {
  if (!configuration.value.current_page) return;

  readApi.addCommit(configuration.value.current_page, commit_content.value);
  commit_content.value = '';
  message.success('评论将在审核结束后展示！');
  loadCommits();
};

// ==================== 页面导航相关 ====================

/**
 * 更新相邻页面信息
 */
const updateAdjacentPageInfo = async (pageName: string | undefined) => {
  if (!pageName) {
    configuration.value.prevPageInfo = 'start';
    configuration.value.nextPageInfo = 'end';
    return;
  }

  const prevPageName = await findAdjacentPage(pageName, 'pre');
  if (prevPageName === 'start') {
    configuration.value.prevPageInfo = 'start';
  } else {
    configuration.value.prevPageInfo = await getPageInfo(prevPageName);
  }

  const nextPageName = await findAdjacentPage(pageName, 'next');
  if (nextPageName === 'end') {
    configuration.value.nextPageInfo = 'end';
  } else {
    configuration.value.nextPageInfo = await getPageInfo(nextPageName);
  }
};

/**
 * 检查页面是否包含链接列表组件
 */
const pageHasLinkList = (page: Page): boolean => {
  for (const section of page.sections) {
    for (const subsection of section.subsections) {
      for (const content of subsection.contents) {
        if (content.type === 'NWLinkList') {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * 加载页面配置
 */
const loadPageConfig = async (name?: string) => {
  if (!name) {
    configuration.value.current_page = undefined;
    return;
  }

  const page = await getPageByName(name);
  if (page) {
    configuration.value.current_page = name;
    configuration.value.page_data = page;

    // 异步加载评论和相邻页面信息
    await loadCommits();
    await updateAdjacentPageInfo(name);

    // 如果页面包含链接列表组件，加载链接数据
    if (pageHasLinkList(page)) {
      await loadLinkListData();
    }

    // 预加载相邻页面（不阻塞主流程）
    preloadAdjacentPages(name);

    // 更新 URL
    const fullPath = route.fullPath;
    if (fullPath.startsWith('/read/')) {
      const readPathRegex = /\/read\/([^\/]+)$/;
      const match = fullPath.match(readPathRegex);
      if (!(match && match[1] === name)) {
        window.history.replaceState(null, '', `/read/${name}`);
      }
    } else {
      window.history.replaceState(null, '', `/read/${name}`);
    }
  } else {
    configuration.value.current_page = undefined;
  }
};

const changePageByButton = (direction: 'pre' | 'next'): void => {
  if (direction === 'pre' && configuration.value.prevPageInfo && configuration.value.prevPageInfo !== 'start') {
    configuration.value.current_page = configuration.value.prevPageInfo.name;
  } else if (direction === 'next' && configuration.value.nextPageInfo && configuration.value.nextPageInfo !== 'end') {
    configuration.value.current_page = configuration.value.nextPageInfo.name;
  }
};

// ==================== 页面渲染辅助 ====================

const calUntitleSubsection = (section: Section, index: number): number => {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    if (section.subsections[i].title === undefined) {
      sum++;
    }
  }
  return sum;
};

const calPageSection = (title: string | undefined, level: number, index: number): string | undefined => {
  if (!title) return undefined;

  if (level === 1) {
    return `${numberToChinese(index + 1)}、${title}`;
  } else {
    return `${index + 1}. ${title}`;
  }
};

/**
 * 动态组件渲染
 */
const dynamicComponent = (content: Content) => {
  switch (content.type) {
    case 'NWDescription':
      return h(NWDescription, { text: content.text });
    case 'NWImage':
      return h(NWImage, { width: content.width, src: content.src });
    case 'NWList':
      return h(NWList, { order: content.order, data: content.data });
    case 'NWTips':
      return h(NWTips, { title: content.title, case: content.case, data: content.data });
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
      });
    case 'NWDialogue':
      return h(NWDialogue, { q: content.q, a: content.a });
    case 'NWMotto':
      return h(NWMotto, { message: content.message, author: content.author });
    case 'NWProblemsRank':
      return h(NWProblemsRank, { problems: content.problems });
    case 'NWSiteContributors':
      return h(NWSiteContributors, { site_contributors: content.site_sitecontributors });
    case 'NWCompetition':
      return h(NWCompetition, { competition: content.competition });
    case 'NWLinkList':
      return h(NWLinkList, {
        items: configuration.value.linkListData,
        loading: configuration.value.linkListLoading
      });
    case 'NWClubIntro':
      return h(NWClubIntro, { ClubProps: content.club });
    case 'NWPhotoAlbum':
      return h(NWPhotoAlbum, { photos: content.photos });
    case 'NWEquation':
      return h(NWEquation, { equation: content.equation });
    case 'NWTable':
      return h(NWTable, { title: content.title, data: content.data });
  }
};

const scrollTo = (distance: number) => {
  nextTick(() => {
    if (contentRef.value) {
      contentRef.value.scrollTo({ top: distance, behavior: 'smooth' });
    }
  });
};

// ==================== 生命周期 ====================

watch(() => configuration.value.current_page, async (newValue, oldValue) => {
  if (newValue === oldValue) return;

  const fullPath = router.currentRoute.value.fullPath;
  const newPath = fullPath.replace(/#.*$/, '');
  router.replace({ path: newPath });

  scrollTo(0);
  await loadPageConfig(newValue);
}, { deep: true });

onMounted(async () => {
  await loadMenuConfig();

  let initialPage = 'DeveloperGreeting';

  if (route.params.page) {
    const pageParam = Array.isArray(route.params.page) ? route.params.page[0] : route.params.page;
    initialPage = pageParam;
  } else if (getCookie('page')) {
    initialPage = getCookie('page')!;
  }

  configuration.value.current_page = initialPage;
  await loadPageConfig(initialPage);
});
</script>