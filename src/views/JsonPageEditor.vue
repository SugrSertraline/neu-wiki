<template>
  <div class="h-full flex flex-col">
    <n-page-header title="JSON Page Editor" subtitle="可视化编辑 Page / Section / Content JSON">
      <template #extra>
        <n-space>
          <n-button tertiary @click="newPage">
            新建
          </n-button>

          <n-button secondary @click="() => fileInput?.click()">
            导入 JSON
          </n-button>

          <n-button secondary @click="showPaste = true">
            粘贴 JSON
          </n-button>

          <n-button type="primary" @click="exportJson">
            导出 JSON
          </n-button>

          <n-button :disabled="!page.name" @click="saveToLocal">
            保存到本地（localStorage）
          </n-button>

          <n-button @click="loadFromLocal">
            从本地读取
          </n-button>
        </n-space>
      </template>
    </n-page-header>

    <div class="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-4 p-4 overflow-hidden">
      <div class="xl:col-span-3 flex flex-col border rounded-md overflow-hidden">
        <n-card title="页面基本信息" size="small" :segmented="true">
          <n-form label-placement="left" label-width="96">
            <n-form-item label="Title">
              <n-input v-model:value="page.title" placeholder="页面标题" />
            </n-form-item>
            <n-form-item label="Name">
              <n-input v-model:value="page.name" placeholder="唯一英文名，用作文件名" />
            </n-form-item>
            <n-form-item label="Last Update">
              <n-input v-model:value="page.last_update" placeholder="2024年1月1日" />
            </n-form-item>
            <n-form-item label="Description">
              <n-input v-model:value="page.description" type="textarea" :autosize="{minRows:2}" placeholder="可选" />
            </n-form-item>
            <n-form-item label="Contributors">
              <div class="w-full">
                <div class="space-y-2">
                  <div v-for="(c, idx) in page.contributors" :key="'contrib-' + idx" class="p-2 rounded border">
                    <div class="flex items-center gap-2">
                      <n-input placeholder="Name" v-model:value="c.name" />
                      <n-input placeholder="Avatar URL" v-model:value="c.avatar_url" />
                      <n-button quaternary @click="removeContributor(idx)">
                        删除
                      </n-button>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <n-button dashed size="small" @click="addContributor">+ 添加贡献者</n-button>
                </div>
              </div>
            </n-form-item>
            <n-form-item label="快捷">
              <n-space>
                <n-button size="small" @click="setToday">日期设为今天</n-button>
                <n-button size="small" @click="addSection">添加 Section</n-button>
              </n-space>
            </n-form-item>
          </n-form>
        </n-card>

        <n-card title="结构" size="small" class="flex-1 overflow-auto" :segmented="true">
          <div class="mb-2">
            <n-button dashed block @click="addSection">+ 新增 Section</n-button>
          </div>

          <n-tree
            block-line
            :data="treeData"
            :selected-keys="[selectedKey]"
            @update:selected-keys="(keys) => keys.length && selectByKey(String(keys[0]))"
            :render-suffix="renderTreeSuffix"
          />
        </n-card>
      </div>

      <div class="xl:col-span-5 overflow-auto">
        <n-card :title="editorTitle" size="small" :segmented="true">
          <template v-if="selection.kind === 'page'">
            <div class="text-gray-500">请在左侧树或上方“页面基本信息”中继续编辑。</div>
          </template>

          <template v-else-if="selection.kind === 'section'">
            <n-form label-placement="left" label-width="96">
              <n-form-item label="Section 标题">
                <n-input v-model:value="currentSection.title" placeholder="可空" />
              </n-form-item>
              <n-space>
                <n-button @click="addSubsection(selectionAsSection!.si)">添加 Subsection</n-button>
                <n-button @click="moveSection(selectionAsSection!.si, -1)" :disabled="selectionAsSection!.si === 0">上移</n-button>
                <n-button @click="moveSection(selectionAsSection!.si, +1)" :disabled="selectionAsSection!.si === page.sections.length - 1">下移</n-button>
                <n-button type="error" @click="deleteSection(selectionAsSection!.si)">删除</n-button>
              </n-space>
            </n-form>
            <n-divider />
            <div class="text-gray-500">下方为该 Section 的 Subsections：</div>
            <div class="space-y-2 mt-2">
              <div v-for="(ss, sj) in currentSection.subsections" :key="'ss-'+sj" class="rounded border p-2">
                <div class="flex items-center gap-2">
                  <div class="font-medium">Subsection {{ sj + 1 }}</div>
                  <n-input v-model:value="ss.title" placeholder="子标题（可空）" />
                  <n-button size="small" @click="moveSubsection(selectionAsSection!.si, sj, -1)" :disabled="sj===0">上移</n-button>
                  <n-button size="small" @click="moveSubsection(selectionAsSection!.si, sj, +1)" :disabled="sj===currentSection.subsections.length-1">下移</n-button>
                  <n-button size="small" type="error" @click="deleteSubsection(selectionAsSection!.si, sj)">删除</n-button>
                </div>
                <div class="mt-2">
                  <n-button dashed size="small" @click="addContent(selectionAsSection!.si, sj)">+ 添加 Content</n-button>
                </div>
              </div>
            </div>
          </template>

          <template v-else-if="selection.kind === 'subsection'">
            <n-form label-placement="left" label-width="96">
              <n-form-item label="Subsection 标题">
                <n-input v-model:value="currentSubsection.title" placeholder="可空" />
              </n-form-item>
              <n-space>
                <n-button @click="addContent(selectionAsSubsection!.si, selectionAsSubsection!.sj)">添加 Content</n-button>
                <n-button @click="moveSubsection(selectionAsSubsection!.si, selectionAsSubsection!.sj, -1)" :disabled="selectionAsSubsection!.sj===0">上移</n-button>
                <n-button @click="moveSubsection(selectionAsSubsection!.si, selectionAsSubsection!.sj, +1)" :disabled="selectionAsSubsection!.sj===page.sections[selectionAsSubsection!.si].subsections.length-1">下移</n-button>
                <n-button type="error" @click="deleteSubsection(selectionAsSubsection!.si, selectionAsSubsection!.sj)">删除</n-button>
              </n-space>
            </n-form>
            <n-divider />
            <div class="text-gray-500">下方为该 Subsection 的 Contents：</div>
            <div class="space-y-2 mt-2">
              <div
                v-for="(ct, ck) in currentSubsection.contents"
                :key="'ct-'+ck"
                class="rounded border p-2 flex items-center justify-between"
              >
                <div class="truncate">
                  <span class="px-2 py-0.5 bg-gray-100 rounded text-xs">{{ ct.type }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <n-button size="small" @click="selectContent(selectionAsSubsection!.si, selectionAsSubsection!.sj, ck)">编辑</n-button>
                  <n-button size="small" @click="moveContent(selectionAsSubsection!.si, selectionAsSubsection!.sj, ck, -1)" :disabled="ck===0">上移</n-button>
                  <n-button size="small" @click="moveContent(selectionAsSubsection!.si, selectionAsSubsection!.sj, ck, +1)" :disabled="ck===currentSubsection.contents.length-1">下移</n-button>
                  <n-button size="small" @click="duplicateContent(selectionAsSubsection!.si, selectionAsSubsection!.sj, ck)">复制</n-button>
                  <n-button size="small" type="error" @click="deleteContent(selectionAsSubsection!.si, selectionAsSubsection!.sj, ck)">删除</n-button>
                </div>
              </div>
            </div>
          </template>

          <template v-else-if="selection.kind === 'content'">
            <content-editor
              v-model:content="currentContentProxy"
              @replace="(next: Content) => replaceContent(selectionAsContent!.si, selectionAsContent!.sj, selectionAsContent!.ck, next)"
            />
            <n-divider />
            <n-space>
              <n-button @click="moveContent(selectionAsContent!.si, selectionAsContent!.sj, selectionAsContent!.ck, -1)" :disabled="selectionAsContent!.ck===0">上移</n-button>
              <n-button @click="moveContent(selectionAsContent!.si, selectionAsContent!.sj, selectionAsContent!.ck, +1)" :disabled="selectionAsContent!.ck===page.sections[selectionAsContent!.si].subsections[selectionAsContent!.sj].contents.length-1">下移</n-button>
              <n-button @click="duplicateContent(selectionAsContent!.si, selectionAsContent!.sj, selectionAsContent!.ck)">复制</n-button>
              <n-button type="error" @click="deleteContent(selectionAsContent!.si, selectionAsContent!.sj, selectionAsContent!.ck)">删除</n-button>
            </n-space>
          </template>
        </n-card>
      </div>

      <div class="xl:col-span-4 overflow-auto">
        <n-card title="实时预览" size="small" :segmented="true">
          <div class="text-2xl font-bold mb-2">{{ page.title }}</div>
          <div class="text-sm text-gray-500 mb-3">更新截止于 {{ page.last_update }}</div>

          <component
            v-if="page.description"
            :is="dynamicComponent({ type: NWComponent.NWDescription, text: page.description } as Content)"
          />

          <NWSection
            v-for="(section, section_index) in page.sections"
            :key="'pv-sec-'+section_index"
            :level="1"
            :id="'pv-section'+section_index"
            :title="calPageSection(section.title, 1, section_index)"
          >
            <NWSection
              v-for="(subsection, subsection_index) in section.subsections"
              :key="'pv-sub-'+subsection_index"
              :level="2"
              :title="calPageSection(subsection.title, 2, subsection_index - calUntitleSubsection(section, subsection_index))"
            >
              <template v-for="(content, content_index) in subsection.contents" :key="'pv-ct-'+content_index">
                <component :is="dynamicComponent(content)" />
              </template>
            </NWSection>
          </NWSection>
        </n-card>
      </div>
    </div>

    <input ref="fileInput" type="file" accept="application/json" class="hidden" @change="onFileChange" />

    <n-modal v-model:show="showPaste" preset="dialog" title="粘贴 JSON">
      <n-input v-model:value="pasteText" type="textarea" rows="14" placeholder="{ /* Page JSON */ }" />
      <template #action>
        <n-space justify="end">
          <n-button @click="showPaste = false">取消</n-button>
          <n-button type="primary" @click="importFromText">导入</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, h, reactive, ref } from 'vue';
import {
  NButton, NCard, NDivider, NForm, NFormItem, NIcon, NInput, NModal, NPageHeader, NSpace, NTree, useMessage
} from 'naive-ui';
import type { TreeOption } from 'naive-ui';
import { AddOutline, ArrowDownOutline, ArrowUpOutline, CopyOutline, TrashOutline } from '@vicons/ionicons5';

import { NWComponent } from '@/types/enum';
import type {
  Content, Page, Section, SubSection, Problem, SiteContributor, Competition, LinkListItem, ClubProps
} from '@/types/interface';
import { numberToChinese } from '@/utils/utils';

// 你已有的展示组件（用于右侧预览）
import {
  NWSection, NWDescription, NWImage, NWList, NWTips, NWPersonalIntro, NWDialogue,
  NWMotto, NWProblemsRank, NWSiteContributors, NWCompetition, NWLinkList,
  NWClubIntro, NWPhotoAlbum, NWEquation, NWTable,ContentEditor
} from '@/components';

const message = useMessage();

/** -----------------------
 * 一、编辑数据：Page 根对象
 * ----------------------*/
const page = reactive<Page>({
  title: 'default',
  last_update: '2024年1月1日',
  name: 'default',
  description: '',
  sections: [],
  contributors: []
});

/** 工具：今日日期中文 */
function setToday() {
  const d = new Date();
  page.last_update = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

/** 贡献者 */
function addContributor() {
  page.contributors.push({ name: '', avatar_url: '' });
}
function removeContributor(idx: number) {
  page.contributors.splice(idx, 1);
}

/** 快捷创建默认节点 */
function createDefaultSection(): Section {
  return { title: '', subsections: [createDefaultSubsection()] };
}
function createDefaultSubsection(): SubSection {
  return { title: '', contents: [] };
}
function createDefaultContent(type: NWComponent): Content {
  switch (type) {
    case NWComponent.NWDescription: return { type, text: '' };
    case NWComponent.NWImage: return { type, width: 100, src: '' };
    case NWComponent.NWList: return { type, order: false, data: [] };
    case NWComponent.NWTips: return { type, title: '', case: 'default', data: '' };
    case NWComponent.NWPersonalIntro:
      return {
        type, name: '', avatarUrl: '', college: '', grade: '', major: '',
        graduation: '', introduction: '', achievements: [], qq: '', wechat: '', github: '', email: ''
      };
    case NWComponent.NWDialogue: return { type, q: '', a: '' };
    case NWComponent.NWMotto: return { type, message: '', author: '' };
    case NWComponent.NWProblemsRank: return { type, problems: [] };
    case NWComponent.NWSiteContributors: return { type, site_sitecontributors: [] };
    case NWComponent.NWCompetition:
      return {
        type,
        competition: { name: '', period: '上旬', description: '', suitableColleges: [], tags: [] }
      };
    case NWComponent.NWLinkList: return { type };
    case NWComponent.NWClubIntro:
      return { type, club: { name: '', logo: '', description: '', qqGroup: '', imageUrl: '' } };
    case NWComponent.NWPhotoAlbum: return { type, photos: [] };
    case NWComponent.NWEquation: return { type, equation: '' };
    case NWComponent.NWTable: return { type, title: '', data: [['']] };
  }
}

/** -----------------------
 * 二、结构操作（新增 / 删除 / 重排）
 * ----------------------*/
function addSection() {
  page.sections.push(createDefaultSection());
  // 选中新加的 section
  select({ kind: 'section', si: page.sections.length - 1 });
}

function deleteSection(si: number) {
  page.sections.splice(si, 1);
  select({ kind: 'page' });
}

function moveSection(si: number, delta: number) {
  const ni = si + delta;
  if (ni < 0 || ni >= page.sections.length) return;
  const [s] = page.sections.splice(si, 1);
  page.sections.splice(ni, 0, s);
  select({ kind: 'section', si: ni });
}

function addSubsection(si: number) {
  page.sections[si].subsections.push(createDefaultSubsection());
  select({ kind: 'subsection', si, sj: page.sections[si].subsections.length - 1 });
}

function deleteSubsection(si: number, sj: number) {
  page.sections[si].subsections.splice(sj, 1);
  select({ kind: 'section', si });
}

function moveSubsection(si: number, sj: number, delta: number) {
  const nj = sj + delta;
  const list = page.sections[si].subsections;
  if (nj < 0 || nj >= list.length) return;
  const [ss] = list.splice(sj, 1);
  list.splice(nj, 0, ss);
  select({ kind: 'subsection', si, sj: nj });
}

function addContent(si: number, sj: number) {
  page.sections[si].subsections[sj].contents.push(createDefaultContent(NWComponent.NWDescription));
  select({ kind: 'content', si, sj, ck: page.sections[si].subsections[sj].contents.length - 1 });
}

function deleteContent(si: number, sj: number, ck: number) {
  page.sections[si].subsections[sj].contents.splice(ck, 1);
  select({ kind: 'subsection', si, sj });
}

function moveContent(si: number, sj: number, ck: number, delta: number) {
  const nk = ck + delta;
  const list = page.sections[si].subsections[sj].contents;
  if (nk < 0 || nk >= list.length) return;
  const [ct] = list.splice(ck, 1);
  list.splice(nk, 0, ct);
  select({ kind: 'content', si, sj, ck: nk });
}

function duplicateContent(si: number, sj: number, ck: number) {
  const list = page.sections[si].subsections[sj].contents;
  const clone = JSON.parse(JSON.stringify(list[ck])) as Content;
  list.splice(ck + 1, 0, clone);
  select({ kind: 'content', si, sj, ck: ck + 1 });
}

function replaceContent(si: number, sj: number, ck: number, next: Content) {
  page.sections[si].subsections[sj].contents[ck] = next;
}

/** -----------------------
 * 三、选择与树形结构
 * ----------------------*/
type Selection =
  | { kind: 'page' }
  | { kind: 'section'; si: number }
  | { kind: 'subsection'; si: number; sj: number }
  | { kind: 'content'; si: number; sj: number; ck: number };

const selection = ref<Selection>({ kind: 'page' });

function select(s: Selection) {
  selection.value = s;
}

const selectedKey = computed(() => {
  const s = selection.value;
  if (s.kind === 'page') return 'page-root';
  if (s.kind === 'section') return `section-${s.si}`;
  if (s.kind === 'subsection') return `subsection-${s.si}-${s.sj}`;
  return `content-${s.si}-${s.sj}-${s.ck}`;
});

function selectByKey(key: string) {
  if (key === 'page-root') return select({ kind: 'page' });
  if (key.startsWith('section-')) {
    const [_, si] = key.split('-');
    return select({ kind: 'section', si: Number(si) });
  }
  if (key.startsWith('subsection-')) {
    const [_, si, sj] = key.split('-');
    return select({ kind: 'subsection', si: Number(si), sj: Number(sj) });
  }
  if (key.startsWith('content-')) {
    const [_, si, sj, ck] = key.split('-');
    return select({ kind: 'content', si: Number(si), sj: Number(sj), ck: Number(ck) });
  }
}

const treeData = computed<TreeOption[]>(() => {
  const nodes: TreeOption[] = [{
    key: 'page-root',
    label: `Page: ${page.title || '(未命名)'}`,
    children: page.sections.map((sec, si) => ({
      key: `section-${si}`,
      label: `${numberToChinese(si + 1)}、${sec.title || '（无标题）'}`,
      children: sec.subsections.map((ss, sj) => ({
        key: `subsection-${si}-${sj}`,
        label: `${sj + 1}. ${ss.title || '（无标题）'}`,
        children: ss.contents.map((ct, ck) => ({
          key: `content-${si}-${sj}-${ck}`,
          label: `${ck + 1}. ${ct.type}`
        }))
      }))
    }))
  }];
  return nodes;
});

/** 为树节点渲染操作按钮（suffix） */
function renderTreeSuffix({ option }: { option: TreeOption }) {
  const key = String(option.key);
  const btn = (icon: any, onClick: () => void, title = '') =>
    h(NButton, {
      quaternary: true,
      size: 'tiny',
      title,
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        onClick();
      }
    }, { icon: () => h(NIcon, null, { default: () => h(icon) }) });

  if (key.startsWith('section-')) {
    const si = Number(key.split('-')[1]);
    return h('div', { class: 'flex items-center gap-1' }, [
      btn(AddOutline, () => addSubsection(si), '添加 Subsection'),
      btn(ArrowUpOutline, () => moveSection(si, -1), '上移'),
      btn(ArrowDownOutline, () => moveSection(si, +1), '下移'),
      btn(TrashOutline, () => deleteSection(si), '删除')
    ]);
  }

  if (key.startsWith('subsection-')) {
    const [_, si, sj] = key.split('-');
    return h('div', { class: 'flex items-center gap-1' }, [
      btn(AddOutline, () => addContent(Number(si), Number(sj)), '添加 Content'),
      btn(ArrowUpOutline, () => moveSubsection(Number(si), Number(sj), -1), '上移'),
      btn(ArrowDownOutline, () => moveSubsection(Number(si), Number(sj), +1), '下移'),
      btn(TrashOutline, () => deleteSubsection(Number(si), Number(sj)), '删除')
    ]);
  }

  if (key.startsWith('content-')) {
    const [_, si, sj, ck] = key.split('-');
    return h('div', { class: 'flex items-center gap-1' }, [
      btn(ArrowUpOutline, () => moveContent(Number(si), Number(sj), Number(ck), -1), '上移'),
      btn(ArrowDownOutline, () => moveContent(Number(si), Number(sj), Number(ck), +1), '下移'),
      btn(CopyOutline, () => duplicateContent(Number(si), Number(sj), Number(ck)), '复制'),
      btn(TrashOutline, () => deleteContent(Number(si), Number(sj), Number(ck)), '删除')
    ]);
  }

  return null;
}

/** 编辑面板动态标题与数据引用 */
const editorTitle = computed(() => {
  const s = selection.value;
  switch (s.kind) {
    case 'page': return '编辑：Page';
    case 'section': return `编辑：Section #${s.si + 1}`;
    case 'subsection': return `编辑：Section #${s.si + 1} / Subsection #${s.sj + 1}`;
    case 'content': return `编辑：Section #${s.si + 1} / Subsection #${s.sj + 1} / Content #${s.ck + 1}`;
  }
});

// FIX: 修正了 currentSection 和 currentSubsection 的类型判断逻辑，使其更安全
const currentSection = computed(() => {
  const s = selection.value;
  if (s.kind === 'section') {
    return page.sections[s.si];
  }
  return { title: '', subsections: [] } as Section; // 返回一个虚拟对象以避免模板报错
});

const currentSubsection = computed(() => {
  const s = selection.value;
  if (s.kind === 'subsection') {
    return page.sections[s.si].subsections[s.sj];
  }
  return { title: '', contents: [] } as SubSection; // 返回一个虚拟对象以避免模板报错
});

const currentContentProxy = computed<Content>({
  get() {
    const s = selection.value;
    if (s.kind !== 'content') {
      // 返回一个临时对象避免报错
      return { type: NWComponent.NWDescription, text: '' };
    }
    return page.sections[s.si].subsections[s.sj].contents[s.ck];
  },
  set(v) {
    const s = selection.value;
    if (s.kind !== 'content') return;
    page.sections[s.si].subsections[s.sj].contents[s.ck] = v;
  }
});

function selectContent(si: number, sj: number, ck: number) {
  select({ kind: 'content', si, sj, ck });
}

// FIX: 新增辅助计算属性，用于在 template 中获得类型收窄的 selection 对象
const selectionAsSection = computed(() => (selection.value.kind === 'section' ? selection.value : null));
const selectionAsSubsection = computed(() => (selection.value.kind === 'subsection' ? selection.value : null));
const selectionAsContent = computed(() => (selection.value.kind === 'content' ? selection.value : null));


/** -----------------------
 * 四、导入 / 导出 / 本地缓存
 * ----------------------*/
const fileInput = ref<HTMLInputElement | null>(null);
function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(String(reader.result));
      loadPage(obj);
      message.success('导入成功');
    } catch (err) {
      message.error('JSON 解析失败');
    } finally {
      (e.target as HTMLInputElement).value = '';
    }
  };
  reader.readAsText(file);
}

const showPaste = ref(false);
const pasteText = ref('');
function importFromText() {
  try {
    const obj = JSON.parse(pasteText.value);
    loadPage(obj);
    showPaste.value = false;
    pasteText.value = '';
    message.success('导入成功');
  } catch (e) {
    message.error('JSON 解析失败');
  }
}

function loadPage(obj: Page) {
  // 简单的浅验证
  if (!obj || !Array.isArray(obj.sections)) {
    message.error('结构不合法：缺少 sections');
    return;
  }
  // 重置并替换
  page.title = obj.title ?? '';
  page.last_update = obj.last_update ?? '';
  page.name = obj.name ?? '';
  page.description = obj.description ?? '';
  page.contributors.splice(0, page.contributors.length, ...(obj.contributors ?? []));
  page.sections.splice(0, page.sections.length, ...(obj.sections ?? []));
  select({ kind: 'page' });
}

function exportJson() {
  const blob = new Blob([JSON.stringify(page, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${page.name || 'page'}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

const LOCAL_KEY = 'json_page_editor_snapshot';
function saveToLocal() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(page));
  message.success('已保存到 localStorage');
}
function loadFromLocal() {
  const raw = localStorage.getItem(LOCAL_KEY);
  if (!raw) return message.warning('本地没有缓存');
  try {
    const obj = JSON.parse(raw) as Page;
    loadPage(obj);
    message.success('已从本地加载');
  } catch {
    message.error('本地缓存解析失败');
  }
}

function newPage() {
  loadPage({
    title: 'New Page',
    last_update: '2024年1月1日',
    name: 'new-page',
    description: '',
    sections: [createDefaultSection()],
    contributors: []
  });
}

/** -----------------------
 * 五、预览用 dynamicComponent（与你现有保持一致）
 * ----------------------*/
function dynamicComponent(content: Content) {
  switch (content.type) {
    case NWComponent.NWDescription:
      return h(NWDescription, { text: (content as any).text });
    case NWComponent.NWImage:
      return h(NWImage, { width: (content as any).width, src: (content as any).src });
    case NWComponent.NWList:
      return h(NWList, { order: (content as any).order, data: (content as any).data });
    case NWComponent.NWTips:
      return h(NWTips, { title: (content as any).title, case: (content as any).case, data: (content as any).data });
    case NWComponent.NWPersonalIntro:
      return h(NWPersonalIntro, { user: {
        name: (content as any).name, avatarUrl: (content as any).avatarUrl,
        college: (content as any).college, grade: (content as any).grade, major: (content as any).major,
        graduation: (content as any).graduation, introduction: (content as any).introduction,
        achievements: (content as any).achievements, qq: (content as any).qq,
        wechat: (content as any).wechat, github: (content as any).github, email: (content as any).email
      }});
    case NWComponent.NWDialogue:
      return h(NWDialogue, { q: (content as any).q, a: (content as any).a });
    case NWComponent.NWMotto:
      return h(NWMotto, { message: (content as any).message, author: (content as any).author });
    case NWComponent.NWProblemsRank:
      return h(NWProblemsRank, { problems: (content as any).problems });
    case NWComponent.NWSiteContributors:
      return h(NWSiteContributors, { site_contributors: (content as any).site_sitecontributors });
    case NWComponent.NWCompetition:
      return h(NWCompetition, { competition: (content as any).competition });
    case NWComponent.NWLinkList:
      return h(NWLinkList, {}); // 数据由页面服务注入，这里预览为空
    case NWComponent.NWClubIntro:
      return h(NWClubIntro, { ClubProps: (content as any).club });
    case NWComponent.NWPhotoAlbum:
      return h(NWPhotoAlbum, { photos: (content as any).photos });
    case NWComponent.NWEquation:
      return h(NWEquation, { equation: (content as any).equation });
    case NWComponent.NWTable:
      return h(NWTable, { title: (content as any).title, data: (content as any).data });
  }
}

/** 与你现有工具函数一致（用于预览区标题编号） */
function calUntitleSubsection(section: Section, index: number): number {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    if (section.subsections[i].title === undefined || section.subsections[i].title === '') sum++;
  }
  return sum;
}
function calPageSection(title: string | undefined, level: number, index: number): string | undefined {
  if (!title) return undefined;
  if (level === 1) return `${numberToChinese(index + 1)}、${title}`;
  return `${index + 1}. ${title}`;
}
</script>

<style scoped>
/* 让树的行尾按钮更紧凑 */
:deep(.n-tree-node-content__suffix) {
  display: flex;
  gap: 4px;
}
</style>