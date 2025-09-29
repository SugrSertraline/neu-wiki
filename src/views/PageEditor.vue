<template>
  <div class="h-screen flex flex-col bg-gray-50">
    <!-- 顶部工具栏 -->
    <div class="bg-white border-b px-6 py-3 flex items-center justify-between shadow-sm">
      <h1 class="text-lg font-bold text-gray-800">页面JSON编辑器</h1>
      <n-space>
        <n-button @click="isEditorCollapsed = !isEditorCollapsed">
          <template #icon>
            <n-icon>
              <ChevronBackOutline v-if="!isEditorCollapsed" />
              <ChevronForwardOutline v-else />
            </n-icon>
          </template>
          {{ isEditorCollapsed ? '展开编辑' : '收起编辑' }}
        </n-button>
        <n-upload
          :show-file-list="false"
          accept=".json"
          @change="handleImport"
        >
          <n-button type="primary" secondary>
            <template #icon>
              <n-icon><CloudUploadOutline /></n-icon>
            </template>
            导入JSON
          </n-button>
        </n-upload>
        <n-button type="success" secondary @click="handleExport">
          <template #icon>
            <n-icon><DownloadOutline /></n-icon>
          </template>
          导出JSON
        </n-button>
      </n-space>
    </div>

    <!-- 主体区域 -->
    <div class="flex-1 flex overflow-hidden">
      <!-- 左侧编辑区 -->
      <div v-if="!isEditorCollapsed" class="w-1/2 border-r bg-white overflow-y-auto">
        <div class="p-8 space-y-6 max-w-4xl mx-auto">
          <!-- 基本信息 - 可折叠 -->
          <n-collapse default-expanded-names="basic">
            <n-collapse-item title="页面基本信息" name="basic">
              <n-space vertical>
                <n-form-item label="页面标题" size="small">
                  <n-input v-model:value="pageData.title" placeholder="输入页面标题" size="small" />
                </n-form-item>
                <n-form-item label="页面名称（英文）" size="small">
                  <n-input v-model:value="pageData.name" placeholder="输入页面名称" size="small" />
                </n-form-item>
                <n-form-item label="更新日期" size="small">
                  <n-input v-model:value="pageData.last_update" placeholder="输入更新日期" size="small" />
                </n-form-item>
                <n-form-item label="页面描述（可选）" size="small">
                  <n-input
                    v-model:value="pageData.description"
                    type="textarea"
                    :rows="2"
                    placeholder="输入页面描述"
                    size="small"
                  />
                </n-form-item>
              </n-space>
            </n-collapse-item>
          </n-collapse>

          <!-- 内容结构 -->
          <n-card size="small">
            <template #header>
              <div class="flex justify-between items-center">
                <span class="font-semibold">内容结构</span>
                <n-button size="small" type="primary" @click="addSection">
                  <template #icon><n-icon><AddOutline /></n-icon></template>
                  添加章节
                </n-button>
              </div>
            </template>

            <div v-for="(section, sIdx) in pageData.sections" :key="sIdx" class="mb-4">
              <n-card size="small">
                <template #header>
                  <div class="flex gap-2 items-center">
                    <n-tag type="info" size="small">第{{sIdx + 1}}章</n-tag>
                    <n-input
                      v-model:value="section.title"
                      placeholder="章节标题"
                      size="small"
                      class="flex-1"
                    />
                    <n-button size="small" type="info" @click="addSubsection(sIdx)">
                      <template #icon><n-icon><AddOutline /></n-icon></template>
                    </n-button>
                    <n-button size="small" type="error" @click="deleteSection(sIdx)">
                      <template #icon><n-icon><TrashOutline /></n-icon></template>
                    </n-button>
                  </div>
                </template>

                <!-- Subsections -->
                <div v-for="(subsection, ssIdx) in section.subsections" :key="ssIdx" class="mb-3">
                  <n-card size="small" class="bg-gray-50">
                    <template #header>
                      <div class="flex gap-2 items-center">
                        <span class="text-sm">{{sIdx + 1}}.{{ssIdx + 1}}</span>
                        <n-input
                          v-model:value="subsection.title"
                          placeholder="小节标题（可选）"
                          size="small"
                          class="flex-1"
                        />
                        <n-select
                          :options="componentOptions"
                          placeholder="添加组件"
                          @update:value="(val) => addContent(sIdx, ssIdx, val)"
                          size="small"
                          style="width: 140px"
                          clearable
                        />
                        <n-button size="small" type="error" @click="deleteSubsection(sIdx, ssIdx)">
                          <template #icon><n-icon><TrashOutline /></n-icon></template>
                        </n-button>
                      </div>
                    </template>

                    <!-- Contents -->
                    <div v-for="(content, cIdx) in subsection.contents" :key="cIdx" class="mb-3">
                      <n-card size="small">
                        <template #header>
                          <div class="flex justify-between items-center">
                            <n-tag type="success" size="small">{{ content.type }}</n-tag>
                            <n-button size="tiny" type="error" @click="deleteContent(sIdx, ssIdx, cIdx)">
                              <template #icon><n-icon><TrashOutline /></n-icon></template>
                            </n-button>
                          </div>
                        </template>

                        <!-- 组件编辑器 -->
                        <component
                          :is="getContentEditor(content)"
                          :content="content"
                          :section-index="sIdx"
                          :subsection-index="ssIdx"
                          :content-index="cIdx"
                        />
                      </n-card>
                    </div>
                  </n-card>
                </div>
              </n-card>
            </div>
          </n-card>

          <!-- 贡献者 - 可折叠 -->
          <n-collapse>
            <n-collapse-item name="contributors">
              <template #header>
                <div class="flex justify-between items-center w-full pr-4">
                  <span class="font-semibold">贡献者</span>
                  <n-button size="small" type="success" @click.stop="addContributor">
                    <template #icon><n-icon><AddOutline /></n-icon></template>
                    添加
                  </n-button>
                </div>
              </template>
              <n-space vertical>
                <div v-for="(contributor, i) in pageData.contributors" :key="i" class="flex gap-2">
                  <n-input v-model:value="contributor.name" placeholder="姓名" size="small" />
                  <n-input v-model:value="contributor.avatar_url" placeholder="头像URL" size="small" />
                  <n-button size="small" type="error" @click="deleteContributor(i)">
                    <template #icon><n-icon><TrashOutline /></n-icon></template>
                  </n-button>
                </div>
              </n-space>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>

      <!-- 右侧预览区 -->
      <div :class="[isEditorCollapsed ? 'w-full' : 'w-1/2', 'bg-white overflow-y-auto transition-all duration-300']">
        <div class="p-8">
          <n-alert type="info" class="mb-6">
            <template #icon><n-icon><EyeOutline /></n-icon></template>
            实时预览
          </n-alert>

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
                  <component
                    v-for="(content, cIdx) in subsection.contents"
                    :key="cIdx"
                    :is="getPreviewComponent(content.type)"
                    v-bind="getComponentProps(content)"
                  />
                </div>
              </div>
            </div>

            <!-- 贡献者 -->
            <div v-if="pageData.contributors.length > 0" class="mt-16 pt-8 border-t">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">关键内容贡献者</h2>
              <div class="grid grid-cols-2 gap-6">
                <div
                  v-for="(contributor, i) in pageData.contributors"
                  :key="i"
                  class="bg-gray-50 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow"
                >
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
  </div>
</template>

<script setup lang="ts">
import { ref, h, defineComponent } from 'vue';
import {
  NButton, NInput, NInputNumber, NSelect, NCheckbox, NSpace, NCard,
  NDivider, NAlert, NUpload, NTag, NIcon, NAvatar, NFormItem, NCollapse, NCollapseItem,
  useMessage, type UploadFileInfo
} from 'naive-ui';
import {
  AddOutline, TrashOutline, CloudUploadOutline, DownloadOutline, 
  EyeOutline, ChevronBackOutline, ChevronForwardOutline
} from '@vicons/ionicons5';

// 导入真实组件
import {
  NWDescription, NWImage, NWList, NWTips, NWDialogue,
  NWPersonalIntro, NWMotto, NWProblemsRank, NWSiteContributors,
  NWCompetition, NWLinkList, NWClubIntro, NWPhotoAlbum,
  NWEquation, NWTable
} from '@/components';

// 类型定义
type ComponentType = 'NWDescription' | 'NWImage' | 'NWList' | 'NWTips' | 'NWDialogue' |
  'NWPersonalIntro' | 'NWMotto' | 'NWProblemsRank' | 'NWSiteContributors' | 'NWCompetition' |
  'NWLinkList' | 'NWClubIntro' | 'NWPhotoAlbum' | 'NWEquation' | 'NWTable';

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

const READONLY_COMPONENTS = ['NWLinkList', 'NWSiteContributors'];

const COMPONENT_TEMPLATES: Record<ComponentType, Content> = {
  NWDescription: { type: 'NWDescription', text: '这是一段描述文字' },
  NWImage: { type: 'NWImage', width: 300, src: 'https://via.placeholder.com/300' },
  NWList: { type: 'NWList', order: false, data: ['列表项1', '列表项2'] },
  NWTips: { type: 'NWTips', title: '提示', case: 'info', data: '这是提示内容' },
  NWDialogue: { type: 'NWDialogue', q: '问题？', a: '回答。' },
  NWPersonalIntro: {
    type: 'NWPersonalIntro',
    name: '姓名', avatarUrl: 'https://via.placeholder.com/60',
    college: '学院', grade: '年级', graduation: '毕业去向', introduction: '个人简介'
  },
  NWMotto: { type: 'NWMotto', message: '座右铭内容', author: '作者' },
  NWProblemsRank: { type: 'NWProblemsRank', problems: [{ description: '问题描述', urgency: 5 }] },
  NWSiteContributors: { type: 'NWSiteContributors', site_sitecontributors: [] },
  NWCompetition: {
    type: 'NWCompetition',
    competition: {
      name: '竞赛名称', period: '上旬', description: '竞赛描述',
      suitableColleges: ['学院1'], tags: ['标签1']
    }
  },
  NWLinkList: { type: 'NWLinkList' },
  NWClubIntro: {
    type: 'NWClubIntro',
    club: {
      name: '社团名称', logo: 'https://via.placeholder.com/100',
      description: '社团描述', qqGroup: 'QQ群号', imageUrl: undefined
    }
  },
  NWPhotoAlbum: { type: 'NWPhotoAlbum', photos: [{ url: 'https://via.placeholder.com/300', alt: '照片描述' }] },
  NWEquation: { type: 'NWEquation', equation: 'E = mc^2' },
  NWTable: { type: 'NWTable', title: '表格标题', data: [['表头1', '表头2'], ['数据1', '数据2']] }
};

const pageData = ref<PageData>({
  title: '新页面',
  last_update: new Date().toLocaleDateString('zh-CN'),
  name: 'NewPage',
  description: '',
  sections: [],
  contributors: []
});

const componentOptions = Object.keys(COMPONENT_TEMPLATES).map(key => ({
  label: key,
  value: key
}));

// 导入JSON
const handleImport = (options: { file: UploadFileInfo }) => {
  const file = options.file.file;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        pageData.value = JSON.parse(e.target?.result as string);
        message.success('导入成功！');
      } catch (error) {
        message.error('JSON格式错误！');
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

const deleteSection = (index: number) => {
  if (confirm('确定删除此章节吗？')) {
    pageData.value.sections.splice(index, 1);
  }
};

// Subsection操作
const addSubsection = (sectionIndex: number) => {
  pageData.value.sections[sectionIndex].subsections.push({ title: '新小节', contents: [] });
};

const deleteSubsection = (sectionIndex: number, subsectionIndex: number) => {
  if (confirm('确定删除此小节吗？')) {
    pageData.value.sections[sectionIndex].subsections.splice(subsectionIndex, 1);
  }
};

// Content操作
const addContent = (sectionIndex: number, subsectionIndex: number, type: ComponentType) => {
  if (!type) return;
  pageData.value.sections[sectionIndex].subsections[subsectionIndex].contents.push(
    JSON.parse(JSON.stringify(COMPONENT_TEMPLATES[type]))
  );
};

const deleteContent = (sectionIndex: number, subsectionIndex: number, contentIndex: number) => {
  if (confirm('确定删除此组件吗？')) {
    pageData.value.sections[sectionIndex].subsections[subsectionIndex].contents.splice(contentIndex, 1);
  }
};

// 贡献者操作
const addContributor = () => {
  pageData.value.contributors.push({ name: '新贡献者', avatar_url: 'https://via.placeholder.com/60' });
};

const deleteContributor = (index: number) => {
  pageData.value.contributors.splice(index, 1);
};

// 数字转中文
const numberToChinese = (num: number): string => {
  const chinese = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  return chinese[num - 1] || String(num);
};

// 组件编辑器工厂
const getContentEditor = (content: Content) => {
  if (READONLY_COMPONENTS.includes(content.type)) {
    return defineComponent({
      setup() {
        return () => h(NAlert, { type: 'warning' }, { default: () => `此组件类型不可编辑：${content.type}` });
      }
    });
  }

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
                'onUpdate:value': (v: number) => content.width = v,
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
    NWProblemsRank,
    NWSiteContributors,
    NWCompetition,
    NWLinkList,
    NWClubIntro,
    NWPhotoAlbum,
    NWEquation,
    NWTable
  };
  
  return componentMap[type] || 'div';
};

// 获取组件 props
const getComponentProps = (content: Content) => {
  const props = { ...content };
  delete props.type;
  return props;
};
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>