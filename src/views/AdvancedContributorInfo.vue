<template>
  <n-card class="contributor-card" :bordered="false" :class="{ 'bg-gradient-to-br': isHighlighted }">
    <div class="flex flex-col h-full">
      <div class="flex items-center mb-4">
        <n-avatar
          :src="contributor.avatar"
          :alt="contributor.username"
          :size="80"
          class="border-4 border-white shadow-lg"
        />
        <div class="ml-4">
          <h3 class="text-xl font-bold">{{ contributor.username }}</h3>
          <n-tag :type="contributionTypeColor" class="mt-1">
            {{ contributor.contributionType }}
          </n-tag>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 class="text-sm font-semibold mb-1">贡献内容</h4>
          <p class="text-sm">{{ contributor.contribution }}</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-1">个人简介</h4>
          <p class="text-sm">{{ contributor.bio }}</p>
        </div>
      </div>

      <div class="mt-auto">
        <h4 class="text-sm font-semibold mb-2">联系方式</h4>
        <div class="flex flex-wrap gap-2">
          <n-button v-if="contributor.qq" size="tiny" @click="copyContact('qq')">
            <template #icon>
              <i-mdi-qqchat class="mr-1" />
            </template>
            QQ
          </n-button>
          <n-button v-if="contributor.wechat" size="tiny" @click="copyContact('wechat')">
            <template #icon>
              <i-mdi-wechat class="mr-1" />
            </template>
            微信
          </n-button>
          <n-button v-if="contributor.email" size="tiny" @click="copyContact('email')">
            <template #icon>
              <i-mdi-email class="mr-1" />
            </template>
            邮箱
          </n-button>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { NCard, NAvatar, NTag, NButton } from 'naive-ui'
import { useMessage } from 'naive-ui'

interface Contributor {
  username: string
  avatar: string
  contributionType: '代码开发' | '内容创作'
  contribution: string
  bio: string
  qq?: string
  wechat?: string
  email?: string
  isHighlighted?: boolean
}

const props = defineProps<{
  contributor: Contributor
}>()

const message = useMessage()

const contributionTypeColor = computed(() => {
  return props.contributor.contributionType === '代码开发' ? 'info' : 'success'
})

const isHighlighted = computed(() => props.contributor.isHighlighted || false)

const copyContact = (type: 'qq' | 'wechat' | 'email') => {
  const contact = props.contributor[type]
  if (contact) {
    navigator.clipboard.writeText(contact).then(() => {
      message.success(`已复制${type === 'qq' ? 'QQ' : type === 'wechat' ? '微信' : '邮箱'}`)
    })
  }
}
</script>

<style scoped>
.contributor-card {
  @apply bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out h-full;
}

.contributor-card:hover {
  @apply shadow-xl transform -translate-y-1;
}

.bg-gradient-to-br {
  @apply from-blue-100 to-purple-100;
}

.contributor-card h3 {
  @apply text-gray-800;
}

.contributor-card h4 {
  @apply text-gray-700;
}

.contributor-card p {
  @apply text-gray-600;
}
</style>