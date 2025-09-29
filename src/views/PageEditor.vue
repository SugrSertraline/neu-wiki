<template>
  <div class="flex h-[calc(100vh-64px)] bg-gray-50">
    <!-- 主体区域 -->
    <div class="flex-1 flex overflow-hidden relative max-w-[1800px] mx-auto w-full">
      <!-- 左侧编辑区 -->
      <div :class="[
        'border-r bg-white overflow-y-auto transition-all duration-300 flex flex-col',
        isEditorCollapsed ? 'w-16' : 'w-[40%]'
      ]">
        <!-- 收起状态下的竖向信息栏 -->
        <div v-if="isEditorCollapsed" class="h-full flex flex-col items-center py-6 space-y-6">
          <div class="writing-mode-vertical text-xl font-bold text-gray-700 mb-4">
            {{ pageData.title }}
          </div>
          <n-divider class="!my-2 w-8" />
          <div class="flex flex-col items-center space-y-4 text-sm text-gray-600">
            <div class="flex flex-col items-center">
              <span class="text-2xl font-bold text-blue-500">{{ pageData.sections.length }}</span>
              <span class="text-xs mt-1">章节</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-2xl font-bold text-green-500">{{ getTotalComponents() }}</span>
              <span class="text-xs mt-1">组件</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-2xl font-bold text-purple-500">{{ pageData.contributors.length }}</span>
              <span class="text-xs mt-1">贡献者</span>
            </div>
          </div>
        </div>

        <!-- 工具栏 -->
        <div v-if="!isEditorCollapsed" class=" border-b px-6 py-3 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-800">内容编辑</h2>
          <n-space>
            <n-upload :show-file-list="false" accept=".json" @change="handleImport">
              <n-button type="primary" secondary size="small">
                <template #icon>
                  <n-icon>
                    <CloudUploadOutline />
                  </n-icon>
                </template>
                导入
              </n-button>
            </n-upload>
            <n-button type="success" secondary @click="handleExport" size="small">
              <template #icon>
                <n-icon>
                  <DownloadOutline />
                </n-icon>
              </template>
              导出
            </n-button>
          </n-space>
        </div>

        <div v-if="!isEditorCollapsed" class="p-8 space-y-6 flex-1">
          <!-- 基本信息 -->
          <n-card size="small" title="页面基本信息">
            <n-space vertical size="large">
              <!-- 第一行：标题、英文名、日期 -->
              <div class="grid grid-cols-3 gap-4">
                <n-form-item label="页面标题" size="small">
                  <n-input v-model:value="pageData.title" placeholder="输入页面标题" size="small" />
                </n-form-item>
                <n-form-item label="页面名称（英文）" size="small">
                  <n-input v-model:value="pageData.name" placeholder="输入页面名称" size="small" />
                </n-form-item>
                <n-form-item label="更新日期" size="small">
                  <n-date-picker v-model:formatted-value="pageData.last_update" type="date" value-format="yyyy-MM-dd"
                    size="small" class="w-full" />
                </n-form-item>
              </div>

              <!-- 第二行:描述 -->
              <n-form-item label="页面描述（可选）" size="small">
                <n-input v-model:value="pageData.description" type="textarea" :rows="2" placeholder="输入页面描述"
                  size="small" />
              </n-form-item>
            </n-space>
          </n-card>

          <!-- 内容结构 -->
          <n-card size="small">
            <template #header>
              <div class="flex justify-between items-center">
                <span class="font-semibold">内容结构</span>
                <n-button size="small" type="primary" @click="addSection">
                  <template #icon><n-icon>
                      <AddOutline />
                    </n-icon></template>
                  添加章节
                </n-button>
              </div>
            </template>

            <div class="space-y-4">
              <div v-for="(section, sIdx) in pageData.sections" :key="sIdx">
                <!-- 章节标题行 -->
                <div class="flex gap-2 items-center mb-3 p-3 bg-blue-50 rounded-lg">
                  <n-tag type="info" size="small">第{{ sIdx + 1 }}章</n-tag>
                  <n-input v-model:value="section.title" placeholder="章节标题" size="small" class="flex-1" />
                  <n-button size="small" type="info" @click="addSubsection(sIdx)">
                    <template #icon><n-icon>
                        <AddOutline />
                      </n-icon></template>
                    添加小节
                  </n-button>
                  <n-button size="small" type="error" @click="confirmDeleteSection(sIdx)">
                    <template #icon><n-icon>
                        <TrashOutline />
                      </n-icon></template>
                  </n-button>
                </div>

                <!-- 小节列表 -->
                <div class="ml-6 space-y-3">
                  <div v-for="(subsection, ssIdx) in section.subsections" :key="ssIdx">
                    <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <!-- 小节标题行 -->
                      <div class="flex gap-2 items-center mb-2">
                        <span class="text-sm font-medium text-gray-600">{{ sIdx + 1 }}.{{ ssIdx + 1 }}</span>
                        <n-input v-model:value="subsection.title" placeholder="小节标题（可选）" size="small" class="flex-1" />
                        <n-button size="small" type="success" @click="showComponentPanel(sIdx, ssIdx)">
                          <template #icon><n-icon>
                              <AddOutline />
                            </n-icon></template>添加组件
                        </n-button>
                        <n-button size="small" type="error" @click="confirmDeleteSubsection(sIdx, ssIdx)">
                          <template #icon><n-icon>
                              <TrashOutline />
                            </n-icon></template>
                        </n-button>
                      </div>

                      <!-- 组件列表 -->
                      <div v-if="subsection.contents.length === 0" class="text-center py-3 text-gray-400 text-sm">
                        暂无组件
                      </div>
                      <div v-else class="space-y-2 mt-2">
                        <div v-for="(content, cIdx) in subsection.contents" :key="cIdx"
                          class="border border-gray-300 rounded p-2 bg-white">
                          <div class="flex justify-between items-center mb-2">
                            <n-tag type="success" size="small">{{ content.type }}</n-tag>
                            <n-space size="small">
                              <n-button size="tiny" type="info" @click="moveContent(sIdx, ssIdx, cIdx, 'up')"
                                :disabled="cIdx === 0">
                                <template #icon><n-icon>
                                    <ArrowUpOutline />
                                  </n-icon></template>
                              </n-button>
                              <n-button size="tiny" type="info" @click="moveContent(sIdx, ssIdx, cIdx, 'down')"
                                :disabled="cIdx === subsection.contents.length - 1">
                                <template #icon><n-icon>
                                    <ArrowDownOutline />
                                  </n-icon></template>
                              </n-button>
                              <n-button size="tiny" type="error" @click="confirmDeleteContent(sIdx, ssIdx, cIdx)">
                                <template #icon><n-icon>
                                    <TrashOutline />
                                  </n-icon></template>
                              </n-button>
                            </n-space>
                          </div>

                          <!-- 组件编辑器 -->
                          <component :is="getContentEditor(content)" :content="content" :section-index="sIdx"
                            :subsection-index="ssIdx" :content-index="cIdx" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 章节分割线 -->
                <n-divider v-if="sIdx < pageData.sections.length - 1" />
              </div>
            </div>
          </n-card>

          <!-- 贡献者 -->
          <n-card size="small">
            <template #header>
              <div class="flex justify-between items-center">
                <span class="font-semibold">贡献者</span>
                <n-button size="small" type="success" @click="addContributor">
                  <template #icon><n-icon>
                      <AddOutline />
                    </n-icon></template>
                  添加
                </n-button>
              </div>
            </template>
            <n-space vertical>
              <div v-if="pageData.contributors.length === 0" class="text-center py-2 text-gray-400">
                暂无贡献者
              </div>
              <div v-for="(contributor, i) in pageData.contributors" :key="i" class="flex gap-2">
                <n-input v-model:value="contributor.name" placeholder="姓名" size="small" />
                <n-input v-model:value="contributor.avatar_url" placeholder="头像URL" size="small" />
                <n-button size="small" type="error" @click="confirmDeleteContributor(i)">
                  <template #icon><n-icon>
                      <TrashOutline />
                    </n-icon></template>
                </n-button>
              </div>
            </n-space>
          </n-card>
        </div>
      </div>

      <!-- 展开/收起按钮 - 修复定位 -->
      <button @click="isEditorCollapsed = !isEditorCollapsed"
        class="absolute top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
        :style="{ left: isEditorCollapsed ? 'calc(4rem - 16px)' : 'calc(40% - 16px)' }">
        <n-icon size="20">
          <ChevronForwardOutline v-if="isEditorCollapsed" />
          <ChevronBackOutline v-else />
        </n-icon>
      </button>
    
      <!-- 右侧预览区 -->
      <div :class="[isEditorCollapsed ? 'w-full' : 'w-[60%]', 'bg-white overflow-y-auto transition-all duration-300']">
        <div class="p-8">
          <div class="max-w-5xl mx-auto px-6">
            <!-- 页面标题 -->
            <h1 class="text-4xl font-bold text-gray-800 mb-2">{{ pageData.title }}</h1>
            <p class="text-gray-500 text-sm mb-6">更新截止于 {{ pageData.last_update }}</p>
            <n-divider />

            <!-- 页面描述 -->
            <div v-if="pageData.description" class="mb-8 text-gray-700 leading-relaxed">
              {{ pageData.description }}
            </div>

            <!-- 内容预览 -->
            <div v-for="(section, sIdx) in pageData.sections" :key="sIdx" class="mb-12">
              <h2 v-if="section.title" class="text-3xl font-bold text-gray-800 mb-6">
                {{ numberToChinese(sIdx + 1) }}、{{ section.title }}
              </h2>

              <div v-for="(subsection, ssIdx) in section.subsections" :key="ssIdx" class="mb-8">
                <h3 v-if="subsection.title" class="text-2xl font-semibold text-gray-700 mb-4">
                  {{ ssIdx + 1 }}. {{ subsection.title }}
                </h3>

                <div class="space-y-6">
                  <component v-for="(content, cIdx) in subsection.contents" :key="cIdx"
                    :is="getPreviewComponent(content.type)" v-bind="getComponentProps(content)" />
                </div>
              </div>
            </div>

            <!-- 贡献者 -->
            <div v-if="pageData.contributors.length > 0" class="mt-16 pt-8 border-t">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">关键内容贡献者</h2>
              <div class="grid grid-cols-2 gap-6">
                <div v-for="(contributor, i) in pageData.contributors" :key="i"
                  class="bg-gray-50 rounded-lg p-6 flex flex-col items-center hover:bg-gray-100 transition-colors">
                  <n-avatar :src="contributor.avatar_url" :size="80" round class="mb-3" />
                  <p class="font-bold text-lg">{{ contributor.name }}</p>
                  <p class="text-sm text-gray-600">本页内容贡献者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 组件选择面板 Modal -->
    <n-modal v-model:show="showComponentSelector" preset="card" title="选择要添加的组件"
      style="width: 1000px; max-height: 80vh">
      
      <div class="flex gap-4 overflow-y-auto" style="max-height: 60vh">
        <!-- 左列 -->
        <div class="flex-1 space-y-4">
          <div v-for="(comp, key, index) in COMPONENT_TEMPLATES" :key="key"
            v-show="index % 2 === 0"
            class="border rounded-lg p-3 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
            @click="addComponentFromPanel(key as ComponentType)">
            <div class="mb-2 flex items-center justify-between">
              <n-tag type="success" size="small">{{ key }}</n-tag>
              <span class="text-xs text-gray-500">点击添加</span>
            </div>
            <div class="text-xs text-gray-600 mb-2">
              {{ getComponentDescription(key as ComponentType) }}
            </div>
            <!-- 组件预览 - 自适应高度 -->
            <div class="bg-gray-50 rounded p-2 overflow-hidden h-fit">
                <component :is="getPreviewComponent(key as ComponentType)" v-bind="getComponentProps(comp)" />
            </div>
          </div>
        </div>
        
      <!-- 右列 -->
<div class="flex-1 space-y-4">
  <div v-for="(comp, key, index) in COMPONENT_TEMPLATES" :key="key"
    v-show="index % 2 === 1"
    class="border rounded-lg p-3 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
    @click="addComponentFromPanel(key as ComponentType)">
    <div class="mb-2 flex items-center justify-between">
      <n-tag type="success" size="small">{{ key }}</n-tag>
      <span class="text-xs text-gray-500">点击添加</span>
    </div>
    <div class="text-xs text-gray-600 mb-2">
      {{ getComponentDescription(key as ComponentType) }}
    </div>
    <!-- 移除缩放，保持一致 -->
    <div class="bg-gray-50 rounded p-2 overflow-hidden h-fit">
      <component :is="getPreviewComponent(key as ComponentType)" v-bind="getComponentProps(comp)" />
    </div>
  </div>
</div>
      </div>
    </n-modal>

    <!-- 删除确认对话框 -->
    <n-modal v-model:show="showDeleteConfirm" preset="dialog" title="确认删除" :content="deleteMessage" positive-text="确认"
      negative-text="取消" @positive-click="handleConfirmDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, h, defineComponent ,nextTick } from 'vue';
import {
  NButton, NInput, NInputNumber, NSelect, NCheckbox, NSpace, NCard,
  NDivider, NUpload, NTag, NIcon, NAvatar, NFormItem, NDatePicker, NModal,
  useMessage, type UploadFileInfo
} from 'naive-ui';
import {
  AddOutline, TrashOutline, CloudUploadOutline, DownloadOutline,
  ChevronBackOutline, ChevronForwardOutline, ArrowUpOutline, ArrowDownOutline
} from '@vicons/ionicons5';

// 导入真实组件
import {
  NWDescription, NWImage, NWList, NWTips, NWDialogue,
  NWPersonalIntro, NWMotto, NWCompetition, NWClubIntro,
  NWPhotoAlbum, NWEquation, NWTable
} from '@/components';

// 类型定义
type ComponentType = 'NWDescription' | 'NWImage' | 'NWList' | 'NWTips' | 'NWDialogue' |
  'NWPersonalIntro' | 'NWMotto' | 'NWCompetition' | 'NWClubIntro' |
  'NWPhotoAlbum' | 'NWEquation' | 'NWTable';

interface Content {
  type: ComponentType;
  [key: string]: any;
}

interface SubSection {
  title?: string;
  contents: Content[];
}

interface Section {
  title?: string;
  subsections: SubSection[];
}

interface PageData {
  title: string;
  last_update: string;
  name: string;
  description?: string;
  sections: Section[];
  contributors: Array<{ name: string; avatar_url: string }>;
}

const message = useMessage();
const isEditorCollapsed = ref(false);
const showComponentSelector = ref(false);
const currentSectionIdx = ref<number>(0);
const currentSubsectionIdx = ref<number>(0);
const showDeleteConfirm = ref(false);
const deleteMessage = ref('');
const deleteAction = ref<() => void>(() => { });

const COMPONENT_TEMPLATES: Record<ComponentType, Content> = {
  NWDescription: { type: 'NWDescription', text: '这是一段描述文字,在这里可以使用Markdown语法,例如**加粗**等。' },
  NWImage: { type: 'NWImage', width: 400, src: 'https://img0.baidu.com/it/u=3670848733,4273758988&fm=253&fmt=auto&app=138&f=JPEG?w=1710&h=800' },
  NWList: { type: 'NWList', order: false, data: ['列表项1', '列表项2'] },
  NWTips: { type: 'NWTips', title: '提示', case: 'info', data: '这是提示内容' },
  NWDialogue: { type: 'NWDialogue', q: '先有鸡还是先有蛋？', a: '先有鸡蛋。' },
  NWPersonalIntro: {
    type: 'NWPersonalIntro',
    name: '姓名',
    avatarUrl: 'https://q8.itc.cn/q_70/images03/20240113/49890c994f1b4e1b90ed902f1cb838f3.jpeg',
    college: '学院',
    grade: '年级',
    graduation: '毕业去向',
    introduction: '个人简介'
  },
  NWMotto: { type: 'NWMotto', message: '座右铭内容', author: '作者' },
  NWCompetition: {
    type: 'NWCompetition',
    competition: {
      name: '竞赛名称',
      period: '上旬',
      description: '竞赛描述',
      suitableColleges: ['学院1'],
      tags: ['标签1']
    }
  },
  NWClubIntro: {
    type: 'NWClubIntro',
    club: {
      name: '社团名称',
      logo: '',
      description: '社团描述',
      qqGroup: 'QQ群号',
      imageUrl: ''
    }
  },
  NWPhotoAlbum: {
    type: 'NWPhotoAlbum',
    photos: [
      { url: '/chatu1.png', alt: '照片描述1' },
      { url: '/chatu1.png', alt: '照片描述2' },
      { url: '/chatu1.png', alt: '照片描述3' },

    ]
  },
  NWEquation: { type: 'NWEquation', equation: 'E = mc^2' },
  NWTable: { type: 'NWTable', title: '表格标题', data: [['表头1', '表头2'], ['数据1', '数据2']] }
};

const pageData = ref<PageData>({
  title: '新页面',
  last_update: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'),
  name: 'NewPage',
  description: '',
  sections: [],
  contributors: []
});

// 组件描述
const getComponentDescription = (type: ComponentType): string => {
  const descriptions: Record<ComponentType, string> = {
    NWDescription: '文字描述段落',
    NWImage: '图片展示',
    NWList: '列表（有序/无序）',
    NWTips: '提示信息框',
    NWDialogue: '问答对话',
    NWPersonalIntro: '个人介绍卡片',
    NWMotto: '座右铭展示',
    NWCompetition: '竞赛信息',
    NWClubIntro: '社团介绍',
    NWPhotoAlbum: '相册展示',
    NWEquation: '数学公式',
    NWTable: '表格'
  };
  return descriptions[type] || '';
};
const handleImport = (options: { file: UploadFileInfo }) => {
  const file = options.file.file;
  if (file) {
    const reader = new FileReader();
    reader.onload = async(e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        
        // 日期格式转换函数
        const parseChineseDate = (dateStr: string): string => {
          if (!dateStr) {
            // 没有日期则使用当前日期
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          }

          // 匹配中文日期格式：2024年9月22日
          const chineseMatch = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
          if (chineseMatch) {
            const year = chineseMatch[1];
            const month = chineseMatch[2].padStart(2, '0');
            const day = chineseMatch[3].padStart(2, '0');
            return `${year}-${month}-${day}`;
          }

          // 如果已经是 yyyy-MM-dd 格式，直接返回
          if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            return dateStr;
          }

          // 尝试其他常见格式（用斜杠分隔）
          if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(dateStr)) {
            const parts = dateStr.split('/');
            const year = parts[0];
            const month = parts[1].padStart(2, '0');
            const day = parts[2].padStart(2, '0');
            return `${year}-${month}-${day}`;
          }

          // 尝试用Date对象解析
          const date = new Date(dateStr);
          if (!isNaN(date.getTime())) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          }

          // 如果所有方法都失败，使用当前日期
          console.warn('无法解析日期格式，使用当前日期:', dateStr);
          const now = new Date();
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        };
        
        pageData.value = {
          title: imported.title || '新页面',
          last_update: parseChineseDate(imported.last_update),
          name: imported.name || 'NewPage',
          description: imported.description || '',
          sections: imported.sections || [],
          contributors: imported.contributors || []
        };
        
        await nextTick();
        message.success('导入成功！');
      } catch (error) {
        message.error('JSON格式错误！');
        console.error('导入错误:', error);
      }
    };
    reader.readAsText(file);
  }
};

// 导出JSON
const handleExport = () => {
  const dataStr = JSON.stringify(pageData.value, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${pageData.value.name}.json`;
  link.click();
  URL.revokeObjectURL(url);
  message.success('导出成功！');
};

// Section操作
const addSection = () => {
  pageData.value.sections.push({ title: '新章节', subsections: [] });
};

const confirmDeleteSection = (index: number) => {
  deleteMessage.value = '确定要删除此章节吗？此操作不可恢复。';
  deleteAction.value = () => {
    pageData.value.sections.splice(index, 1);
    message.success('章节已删除');
  };
  showDeleteConfirm.value = true;
};

// Subsection操作
const addSubsection = (sectionIndex: number) => {
  pageData.value.sections[sectionIndex].subsections.push({ title: '新小节', contents: [] });
};

const confirmDeleteSubsection = (sectionIndex: number, subsectionIndex: number) => {
  deleteMessage.value = '确定要删除此小节吗？此操作不可恢复。';
  deleteAction.value = () => {
    pageData.value.sections[sectionIndex].subsections.splice(subsectionIndex, 1);
    message.success('小节已删除');
  };
  showDeleteConfirm.value = true;
};

// 显示组件选择面板
const showComponentPanel = (sectionIndex: number, subsectionIndex: number) => {
  currentSectionIdx.value = sectionIndex;
  currentSubsectionIdx.value = subsectionIndex;
  showComponentSelector.value = true;
};

// 从面板添加组件
const addComponentFromPanel = (type: ComponentType) => {
  pageData.value.sections[currentSectionIdx.value].subsections[currentSubsectionIdx.value].contents.push(
    JSON.parse(JSON.stringify(COMPONENT_TEMPLATES[type]))
  );
  showComponentSelector.value = false;
  message.success('组件已添加');
};

// Content操作
const confirmDeleteContent = (sectionIndex: number, subsectionIndex: number, contentIndex: number) => {
  deleteMessage.value = '确定要删除此组件吗？';
  deleteAction.value = () => {
    pageData.value.sections[sectionIndex].subsections[subsectionIndex].contents.splice(contentIndex, 1);
    message.success('组件已删除');
  };
  showDeleteConfirm.value = true;
};

// 移动组件
const moveContent = (sectionIndex: number, subsectionIndex: number, contentIndex: number, direction: 'up' | 'down') => {
  const contents = pageData.value.sections[sectionIndex].subsections[subsectionIndex].contents;
  const newIndex = direction === 'up' ? contentIndex - 1 : contentIndex + 1;

  if (newIndex < 0 || newIndex >= contents.length) return;

  const temp = contents[contentIndex];
  contents[contentIndex] = contents[newIndex];
  contents[newIndex] = temp;

  message.success(`组件已${direction === 'up' ? '上移' : '下移'}`);
};

// 贡献者操作
const addContributor = () => {
  pageData.value.contributors.push({
    name: '新贡献者',
    avatar_url: 'https://www.dhs.tsinghua.edu.cn/wp-content/uploads/2025/03/2025031301575583.jpeg'
  });
};

const confirmDeleteContributor = (index: number) => {
  deleteMessage.value = '确定要删除此贡献者吗？';
  deleteAction.value = () => {
    pageData.value.contributors.splice(index, 1);
    message.success('贡献者已删除');
  };
  showDeleteConfirm.value = true;
};

// 处理删除确认
const handleConfirmDelete = () => {
  deleteAction.value();
  showDeleteConfirm.value = false;
};

// 数字转中文
const numberToChinese = (num: number): string => {
  const chinese = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  return chinese[num - 1] || String(num);
};

// 计算总组件数
const getTotalComponents = (): number => {
  return pageData.value.sections.reduce((total, section) => {
    return total + section.subsections.reduce((subTotal, subsection) => {
      return subTotal + subsection.contents.length;
    }, 0);
  }, 0);
};

// 组件编辑器工厂
const getContentEditor = (content: Content) => {
  switch (content.type) {
    case 'NWDescription':
      return defineComponent({
        setup() {
          return () => h(NInput, {
            value: content.text,
            'onUpdate:value': (v: string) => content.text = v,
            type: 'textarea',
            rows: 3,
            placeholder: '描述文字'
          });
        }
      });

    case 'NWImage':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.src,
                'onUpdate:value': (v: string) => content.src = v,
                placeholder: '图片URL'
              }),
              h(NInputNumber, {
                value: content.width,
                'onUpdate:value': (v: number | null) => {
                  if (v !== null) content.width = v;
                },
                placeholder: '宽度',
                style: { width: '100%' }
              })
            ]
          });
        }
      });

    case 'NWList':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NCheckbox, {
                checked: content.order,
                'onUpdate:checked': (v: boolean) => content.order = v
              }, { default: () => '有序列表' }),
              ...content.data.map((item: string, i: number) =>
                h(NSpace, {}, {
                  default: () => [
                    h(NInput, {
                      value: item,
                      'onUpdate:value': (v: string) => content.data[i] = v,
                      style: { flex: 1 }
                    }),
                    h(NButton, {
                      type: 'error',
                      size: 'small',
                      onClick: () => content.data.splice(i, 1)
                    }, { default: () => '删除' })
                  ]
                })
              ),
              h(NButton, {
                type: 'success',
                size: 'small',
                onClick: () => content.data.push('新列表项')
              }, { default: () => '+ 添加项' })
            ]
          });
        }
      });

    case 'NWTips':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.title,
                'onUpdate:value': (v: string) => content.title = v,
                placeholder: '提示标题'
              }),
              h(NSelect, {
                value: content.case,
                'onUpdate:value': (v: string) => content.case = v,
                options: [
                  { label: 'Info', value: 'info' },
                  { label: 'Success', value: 'success' },
                  { label: 'Warning', value: 'warning' },
                  { label: 'Error', value: 'error' }
                ]
              }),
              h(NInput, {
                value: content.data,
                'onUpdate:value': (v: string) => content.data = v,
                type: 'textarea',
                rows: 2,
                placeholder: '提示内容'
              })
            ]
          });
        }
      });

    case 'NWDialogue':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.q,
                'onUpdate:value': (v: string) => content.q = v,
                placeholder: '问题'
              }),
              h(NInput, {
                value: content.a,
                'onUpdate:value': (v: string) => content.a = v,
                type: 'textarea',
                rows: 2,
                placeholder: '回答'
              })
            ]
          });
        }
      });

    case 'NWPersonalIntro':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.name,
                'onUpdate:value': (v: string) => content.name = v,
                placeholder: '姓名'
              }),
              h(NInput, {
                value: content.avatarUrl,
                'onUpdate:value': (v: string) => content.avatarUrl = v,
                placeholder: '头像URL'
              }),
              h(NInput, {
                value: content.college,
                'onUpdate:value': (v: string) => content.college = v,
                placeholder: '学院'
              }),
              h(NInput, {
                value: content.grade,
                'onUpdate:value': (v: string) => content.grade = v,
                placeholder: '年级'
              }),
              h(NInput, {
                value: content.graduation,
                'onUpdate:value': (v: string) => content.graduation = v,
                placeholder: '毕业去向'
              }),
              h(NInput, {
                value: content.introduction,
                'onUpdate:value': (v: string) => content.introduction = v,
                type: 'textarea',
                rows: 2,
                placeholder: '个人简介'
              })
            ]
          });
        }
      });

    case 'NWMotto':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.message,
                'onUpdate:value': (v: string) => content.message = v,
                type: 'textarea',
                rows: 2,
                placeholder: '座右铭内容'
              }),
              h(NInput, {
                value: content.author,
                'onUpdate:value': (v: string) => content.author = v,
                placeholder: '作者'
              })
            ]
          });
        }
      });

    case 'NWEquation':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h('label', { class: 'block text-sm font-medium' }, '数学公式 (LaTeX格式)'),
              h(NInput, {
                value: content.equation,
                'onUpdate:value': (v: string) => content.equation = v,
                type: 'textarea',
                rows: 3,
                placeholder: '例如: E = mc^2'
              }),
              h('p', { class: 'text-xs text-gray-500' }, `预览: ${content.equation}`)
            ]
          });
        }
      });

    case 'NWTable':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.title,
                'onUpdate:value': (v: string) => content.title = v,
                placeholder: '表格标题'
              }),
              h('div', { class: 'border rounded p-2' }, [
                h('p', { class: 'text-sm font-medium mb-2' }, '表格数据 (第一行为表头)'),
                ...content.data.map((row: string[], rIdx: number) =>
                  h(NSpace, { class: 'mb-2' }, {
                    default: () => [
                      ...row.map((cell: string, cIdx: number) =>
                        h(NInput, {
                          value: cell,
                          'onUpdate:value': (v: string) => content.data[rIdx][cIdx] = v,
                          size: 'small',
                          placeholder: rIdx === 0 ? '表头' : '数据'
                        })
                      ),
                      h(NButton, {
                        type: 'info',
                        size: 'small',
                        onClick: () => content.data.forEach((r: string[]) => r.push(''))
                      }, { default: () => '+列' }),
                      h(NButton, {
                        type: 'error',
                        size: 'small',
                        onClick: () => content.data.splice(rIdx, 1)
                      }, { default: () => '删行' })
                    ]
                  })
                ),
                h(NButton, {
                  type: 'success',
                  size: 'small',
                  onClick: () => {
                    const colCount = content.data[0]?.length || 2;
                    content.data.push(new Array(colCount).fill(''));
                  }
                }, { default: () => '+ 添加行' })
              ])
            ]
          });
        }
      });

    case 'NWCompetition':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.competition.name,
                'onUpdate:value': (v: string) => content.competition.name = v,
                placeholder: '竞赛名称'
              }),
              h(NSelect, {
                value: content.competition.period,
                'onUpdate:value': (v: string) => content.competition.period = v,
                options: [
                  { label: '上旬', value: '上旬' },
                  { label: '中旬', value: '中旬' },
                  { label: '下旬', value: '下旬' }
                ]
              }),
              h(NInput, {
                value: content.competition.description,
                'onUpdate:value': (v: string) => content.competition.description = v,
                type: 'textarea',
                rows: 2,
                placeholder: '竞赛描述'
              }),
              h('div', {}, [
                h('label', { class: 'block text-sm font-medium mb-1' }, '适合学院'),
                ...content.competition.suitableColleges.map((college: string, idx: number) =>
                  h(NSpace, { class: 'mb-1' }, {
                    default: () => [
                      h(NInput, {
                        value: college,
                        'onUpdate:value': (v: string) => content.competition.suitableColleges[idx] = v,
                        size: 'small'
                      }),
                      h(NButton, {
                        type: 'error',
                        size: 'small',
                        onClick: () => content.competition.suitableColleges.splice(idx, 1)
                      }, { default: () => '删除' })
                    ]
                  })
                ),
                h(NButton, {
                  type: 'success',
                  size: 'small',
                  onClick: () => content.competition.suitableColleges.push('新学院')
                }, { default: () => '+ 添加学院' })
              ]),
              h('div', {}, [
                h('label', { class: 'block text-sm font-medium mb-1' }, '标签'),
                ...content.competition.tags.map((tag: string, idx: number) =>
                  h(NSpace, { class: 'mb-1' }, {
                    default: () => [
                      h(NInput, {
                        value: tag,
                        'onUpdate:value': (v: string) => content.competition.tags[idx] = v,
                        size: 'small'
                      }),
                      h(NButton, {
                        type: 'error',
                        size: 'small',
                        onClick: () => content.competition.tags.splice(idx, 1)
                      }, { default: () => '删除' })
                    ]
                  })
                ),
                h(NButton, {
                  type: 'success',
                  size: 'small',
                  onClick: () => content.competition.tags.push('新标签')
                }, { default: () => '+ 添加标签' })
              ])
            ]
          });
        }
      });

    case 'NWClubIntro':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h(NInput, {
                value: content.club.name,
                'onUpdate:value': (v: string) => content.club.name = v,
                placeholder: '社团名称'
              }),
              h(NInput, {
                value: content.club.logo,
                'onUpdate:value': (v: string) => content.club.logo = v,
                placeholder: 'Logo URL（可选）'
              }),
              h(NInput, {
                value: content.club.description,
                'onUpdate:value': (v: string) => content.club.description = v,
                type: 'textarea',
                rows: 2,
                placeholder: '社团描述'
              }),
              h(NInput, {
                value: content.club.qqGroup,
                'onUpdate:value': (v: string) => content.club.qqGroup = v,
                placeholder: 'QQ群号'
              }),
              h(NInput, {
                value: content.club.imageUrl || '',
                'onUpdate:value': (v: string) => content.club.imageUrl = v,
                placeholder: '展示图片URL（可选）'
              })
            ]
          });
        }
      });

    case 'NWPhotoAlbum':
      return defineComponent({
        setup() {
          return () => h(NSpace, { vertical: true }, {
            default: () => [
              h('label', { class: 'block text-sm font-medium mb-2' }, '相册照片'),
              ...content.photos.map((photo: any, idx: number) =>
                h(NSpace, { class: 'mb-2' }, {
                  default: () => [
                    h(NInput, {
                      value: photo.url,
                      'onUpdate:value': (v: string) => content.photos[idx].url = v,
                      placeholder: '照片URL',
                      style: { flex: 1 }
                    }),
                    h(NInput, {
                      value: photo.alt,
                      'onUpdate:value': (v: string) => content.photos[idx].alt = v,
                      placeholder: '照片描述',
                      style: { flex: 1 }
                    }),
                    h(NButton, {
                      type: 'error',
                      size: 'small',
                      onClick: () => content.photos.splice(idx, 1)
                    }, { default: () => '删除' })
                  ]
                })
              ),
              h(NButton, {
                type: 'success',
                size: 'small',
                onClick: () => content.photos.push({ url: 'https://via.placeholder.com/300', alt: '新照片' })
              }, { default: () => '+ 添加照片' })
            ]
          });
        }
      });

    default:
      return defineComponent({
        setup() {
          return () => h(NInput, {
            value: JSON.stringify(content, null, 2),
            type: 'textarea',
            rows: 5,
            placeholder: 'JSON编辑'
          });
        }
      });
  }
};

// 获取预览组件 - 使用真实组件
const getPreviewComponent = (type: ComponentType) => {
  const componentMap: Record<ComponentType, any> = {
    NWDescription,
    NWImage,
    NWList,
    NWTips,
    NWDialogue,
    NWPersonalIntro,
    NWMotto,
    NWCompetition,
    NWClubIntro,
    NWPhotoAlbum,
    NWEquation,
    NWTable
  };

  return componentMap[type] || 'div';
};

const getComponentProps = (content: Content) => {
  if (content.type === 'NWPersonalIntro') {
    const { type, ...rest } = content;
    return { user: rest };
  }
  if (content.type === 'NWClubIntro') {
    return { ClubProps: content.club };
  }
  // 使用解构而不是 delete
  const { type, ...props } = content;
  return props;
};

</script>

<style scoped>
/* 竖向文字样式 */
.writing-mode-vertical {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.1em;
}
</style>