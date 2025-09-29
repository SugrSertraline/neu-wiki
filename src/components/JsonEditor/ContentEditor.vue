<template>
  <div class="space-y-4">
    <n-form label-placement="left" label-width="120">
      <n-form-item label="Component Type">
        <n-select
          :value="content.type"
          :options="typeOptions"
          @update:value="onTypeChange"
        />
      </n-form-item>

      <!-- NWDescription -->
      <template v-if="content.type === NWComponent.NWDescription">
        <n-form-item label="Text">
          <n-input v-model:value="(content as any).text" type="textarea" :autosize="{minRows: 4}" />
        </n-form-item>
      </template>

      <!-- NWImage -->
      <template v-else-if="content.type === NWComponent.NWImage">
        <n-form-item label="Width">
          <n-input-number v-model:value="(content as any).width" :min="0" />
        </n-form-item>
        <n-form-item label="Src">
          <n-input v-model:value="(content as any).src" placeholder="https://..." />
        </n-form-item>
      </template>

      <!-- NWList -->
      <template v-else-if="content.type === NWComponent.NWList">
        <n-form-item label="Ordered">
          <n-switch v-model:value="(content as any).order" />
        </n-form-item>
        <n-form-item label="Items">
          <n-dynamic-input
            v-model:value="(content as any).data"
            :on-create="() => ''"
            placeholder="列表项"
          />
        </n-form-item>
      </template>

      <!-- NWTips -->
      <template v-else-if="content.type === NWComponent.NWTips">
        <n-form-item label="Title">
          <n-input v-model:value="(content as any).title" />
        </n-form-item>
        <n-form-item label="Case">
          <n-select
            v-model:value="(content as any).case"
            :options="[
              { label: 'default', value: 'default' },
              { label: 'info', value: 'info' },
              { label: 'success', value: 'success' },
              { label: 'warning', value: 'warning' },
              { label: 'error', value: 'error' }
            ]"
          />
        </n-form-item>
        <n-form-item label="Data">
          <n-input v-model:value="(content as any).data" type="textarea" :autosize="{minRows: 4}" />
        </n-form-item>
      </template>

      <!-- NWPersonalIntro -->
      <template v-else-if="content.type === NWComponent.NWPersonalIntro">
        <n-grid :cols="2" :x-gap="16">
          <n-gi>
            <n-form-item label="Name"><n-input v-model:value="(content as any).name" /></n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="Avatar URL"><n-input v-model:value="(content as any).avatarUrl" /></n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="College"><n-input v-model:value="(content as any).college" /></n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="Grade"><n-input v-model:value="(content as any).grade" /></n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="Major"><n-input v-model:value="(content as any).major" /></n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="Graduation"><n-input v-model:value="(content as any).graduation" /></n-form-item>
          </n-gi>
        </n-grid>
        <n-form-item label="Introduction">
          <n-input v-model:value="(content as any).introduction" type="textarea" :autosize="{minRows: 3}" />
        </n-form-item>
        <n-form-item label="Achievements">
          <n-dynamic-input v-model:value="(content as any).achievements" :on-create="() => ''" />
        </n-form-item>
        <n-grid :cols="2" :x-gap="16">
          <n-gi><n-form-item label="QQ"><n-input v-model:value="(content as any).qq" /></n-form-item></n-gi>
          <n-gi><n-form-item label="Wechat"><n-input v-model:value="(content as any).wechat" /></n-form-item></n-gi>
          <n-gi><n-form-item label="Github"><n-input v-model:value="(content as any).github" /></n-form-item></n-gi>
          <n-gi><n-form-item label="Email"><n-input v-model:value="(content as any).email" /></n-form-item></n-gi>
        </n-grid>
      </template>

      <!-- NWDialogue -->
      <template v-else-if="content.type === NWComponent.NWDialogue">
        <n-form-item label="Q">
          <n-input v-model:value="(content as any).q" type="textarea" />
        </n-form-item>
        <n-form-item label="A">
          <n-input v-model:value="(content as any).a" type="textarea" />
        </n-form-item>
      </template>

      <!-- NWMotto -->
      <template v-else-if="content.type === NWComponent.NWMotto">
        <n-form-item label="Message"><n-input v-model:value="(content as any).message" /></n-form-item>
        <n-form-item label="Author"><n-input v-model:value="(content as any).author" /></n-form-item>
      </template>

      <!-- NWProblemsRank -->
      <template v-else-if="content.type === NWComponent.NWProblemsRank">
        <n-form-item label="Problems">
          <div class="space-y-2 w-full">
            <div
              v-for="(pb, idx) in (content as any).problems"
              :key="'pb-' + idx"
              class="border rounded p-2"
            >
              <n-grid :cols="24" :x-gap="12" class="items-center">
                <n-gi :span="18">
                  <n-input v-model:value="pb.description" placeholder="description" />
                </n-gi>
                <n-gi :span="4">
                  <n-input-number v-model:value="pb.urgency" :min="0" :max="10" placeholder="urgency" />
                </n-gi>
                <n-gi :span="2" class="flex justify-end">
                  <n-button size="small" type="error" @click="(content as any).problems.splice(idx,1)">删除</n-button>
                </n-gi>
              </n-grid>
            </div>
            <n-button dashed size="small" @click="(content as any).problems.push({description:'', urgency: 0})">+ 添加</n-button>
          </div>
        </n-form-item>
      </template>

      <!-- NWSiteContributors -->
      <template v-else-if="content.type === NWComponent.NWSiteContributors">
        <n-form-item label="Contributors">
          <div class="space-y-2 w-full">
            <div
              v-for="(p, idx) in (content as any).site_sitecontributors"
              :key="'sc-' + idx"
              class="border rounded p-2"
            >
              <n-grid :cols="2" :x-gap="12">
                <n-gi><n-input v-model:value="p.username" placeholder="username" /></n-gi>
                <n-gi><n-input v-model:value="p.avatar" placeholder="avatar url" /></n-gi>
                <n-gi><n-input v-model:value="p.contributionType" placeholder="contributionType" /></n-gi>
                <n-gi><n-input v-model:value="p.contribution" placeholder="contribution" /></n-gi>
                <n-gi :span="2"><n-input v-model:value="p.bio" placeholder="bio" type="textarea" /></n-gi>
                <n-gi><n-input v-model:value="p.qq" placeholder="qq" /></n-gi>
                <n-gi><n-input v-model:value="p.wechat" placeholder="wechat" /></n-gi>
                <n-gi :span="2"><n-input v-model:value="p.email" placeholder="email" /></n-gi>
              </n-grid>
              <div class="text-right mt-2">
                <n-button size="small" type="error" @click="(content as any).site_sitecontributors.splice(idx,1)">删除</n-button>
              </div>
            </div>
            <n-button dashed size="small" @click="(content as any).site_sitecontributors.push({
              username:'', avatar:'', contributionType:'', contribution:'', bio:'', qq:'', wechat:'', email:'' })"
            >+ 添加</n-button>
          </div>
        </n-form-item>
      </template>

      <!-- NWCompetition -->
      <template v-else-if="content.type === NWComponent.NWCompetition">
        <n-form-item label="Name">
          <n-input v-model:value="(content as any).competition.name" />
        </n-form-item>
        <n-form-item label="Period">
          <n-select
            v-model:value="(content as any).competition.period"
            :options="[{label:'上旬',value:'上旬'},{label:'中旬',value:'中旬'},{label:'下旬',value:'下旬'}]"
          />
        </n-form-item>
        <n-form-item label="Description">
          <n-input v-model:value="(content as any).competition.description" type="textarea" :autosize="{minRows:3}" />
        </n-form-item>
        <n-form-item label="Suitable Colleges">
          <n-dynamic-input v-model:value="(content as any).competition.suitableColleges" :on-create="() => ''" />
        </n-form-item>
        <n-form-item label="Tags">
          <n-dynamic-input v-model:value="(content as any).competition.tags" :on-create="() => ''" />
        </n-form-item>
      </template>

      <!-- NWLinkList -->
      <template v-else-if="content.type === NWComponent.NWLinkList">
        <n-alert type="info">该组件数据由页面服务运行时注入，此处无需配置。</n-alert>
      </template>

      <!-- NWClubIntro -->
      <template v-else-if="content.type === NWComponent.NWClubIntro">
        <n-form-item label="Name"><n-input v-model:value="(content as any).club.name" /></n-form-item>
        <n-form-item label="Logo"><n-input v-model:value="(content as any).club.logo" /></n-form-item>
        <n-form-item label="Description"><n-input v-model:value="(content as any).club.description" type="textarea" /></n-form-item>
        <n-form-item label="QQ Group"><n-input v-model:value="(content as any).club.qqGroup" /></n-form-item>
        <n-form-item label="Image URL"><n-input v-model:value="(content as any).club.imageUrl" /></n-form-item>
      </template>

      <!-- NWPhotoAlbum -->
      <template v-else-if="content.type === NWComponent.NWPhotoAlbum">
        <n-form-item label="Photos">
          <div class="space-y-2 w-full">
            <div v-for="(ph, idx) in (content as any).photos" :key="'ph-'+idx" class="border rounded p-2">
              <n-grid :cols="2" :x-gap="12">
                <n-gi><n-input v-model:value="ph.url" placeholder="url" /></n-gi>
                <n-gi><n-input v-model:value="ph.alt" placeholder="alt" /></n-gi>
              </n-grid>
              <div class="text-right mt-2">
                <n-button size="small" type="error" @click="(content as any).photos.splice(idx,1)">删除</n-button>
              </div>
            </div>
            <n-button dashed size="small" @click="(content as any).photos.push({url:'', alt:''})">+ 添加</n-button>
          </div>
        </n-form-item>
      </template>

      <!-- NWEquation -->
      <template v-else-if="content.type === NWComponent.NWEquation">
        <n-form-item label="Equation">
          <n-input v-model:value="(content as any).equation" placeholder="TeX / KaTeX" />
        </n-form-item>
      </template>

      <!-- NWTable -->
      <template v-else-if="content.type === NWComponent.NWTable">
        <n-form-item label="Title">
          <n-input v-model:value="(content as any).title" />
        </n-form-item>
        <n-form-item label="Data">
          <div class="space-y-2 w-full">
            <div class="overflow-auto">
              <table class="min-w-full border-collapse">
                <tbody>
                  <tr v-for="(row, r) in (content as any).data" :key="'row-'+r">
                    <td v-for="(cell, c) in row" :key="'cell-'+r+'-'+c" class="border p-1">
                      <n-input v-model:value="(content as any).data[r][c]" placeholder="cell" />
                    </td>
                    <td class="p-1">
                      <n-button size="tiny" @click="addCol(r)">+列</n-button>
                      <n-button size="tiny" type="error" @click="removeRow(r)" :disabled="(content as any).data.length<=1">删行</n-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex gap-2">
              <n-button size="small" @click="addRow">+ 行</n-button>
              <n-button size="small" @click="addCol(-1)">+ 列（对所有行）</n-button>
              <n-button size="small" type="warning" @click="shrinkCols" :disabled="colCount<=1">删最后一列</n-button>
            </div>
          </div>
        </n-form-item>
      </template>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  NAlert, NButton, NDynamicInput, NForm, NFormItem, NGrid, NGi, NInput, NInputNumber,
  NSelect, NSwitch
} from 'naive-ui';
import { NWComponent } from '@/types/enum';
import type { Content } from '@/types/interface';

const props = defineProps<{
  content: Content
}>();
const emit = defineEmits<{
  (e: 'update:content', v: Content): void
  (e: 'replace', v: Content): void
}>();

const typeOptions = Object.values(NWComponent).map(v => ({ label: v, value: v }));

/** 切换组件类型：以模板替换 */
function onTypeChange(nextType: NWComponent) {
  const next = createDefaultContent(nextType);
  emit('replace', next);
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
      return { type, competition: { name: '', period: '上旬', description: '', suitableColleges: [], tags: [] } };
    case NWComponent.NWLinkList: return { type };
    case NWComponent.NWClubIntro:
      return { type, club: { name: '', logo: '', description: '', qqGroup: '', imageUrl: '' } };
    case NWComponent.NWPhotoAlbum: return { type, photos: [] };
    case NWComponent.NWEquation: return { type, equation: '' };
    case NWComponent.NWTable: return { type, title: '', data: [['']] };
  }
}

/** 让父组件 v-model 生效 */
const content = computed({
  get: () => props.content,
  set: (v: Content) => emit('update:content', v)
});

/** ---- NWTable 专用操作 ---- */
const colCount = computed(() => (content.value as any).data[0]?.length ?? 0);

function addRow() {
  const cols = colCount.value || 1;
  (content.value as any).data.push(Array.from({ length: cols }, () => ''));
}
function addCol(rowIndex: number) {
  const rows = (content.value as any).data;
  if (rowIndex >= 0) {
    rows[rowIndex].push('');
  } else {
    rows.forEach((r: string[]) => r.push(''));
  }
}
function removeRow(r: number) {
  const rows = (content.value as any).data;
  if (rows.length <= 1) return;
  rows.splice(r, 1);
}
function shrinkCols() {
  const rows = (content.value as any).data;
  const cols = rows[0]?.length ?? 0;
  if (cols <= 1) return;
  rows.forEach((r: string[]) => r.pop());
}
</script>
