<template>
  <!-- 侧边导航栏，当页面小于lg时，用来展示的drawer -->
  <n-drawer :default-width="300" v-model:show="config.if_drawer" placement="left">
    <n-drawer-content title="目录">
      <MenuComponent />
    </n-drawer-content>
  </n-drawer>

  <!-- 中间整体的布局，一个layout，带有一个sider，作用是目录 -->
  <n-layout has-sider position="absolute" style="top: 64px">
    <n-layout-sider class="hidden lg:block" bordered content-style="padding: 24px;">
      <MenuComponent />
    </n-layout-sider>
    <n-float-button-group class="z-10" shape="square" position="absolute" :right="30" :bottom="30">
      <n-float-button @click="config.if_drawer = true">
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-float-button>
    </n-float-button-group>


    <n-layout has-sider content-style="padding: 24px;">
      <n-layout-content :native-scrollbar="false">

        <div class="mx-8 lg:mx-16">
          <div>
            <n-h2>声明式渲染：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。

              响应性：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。

              你可能已经有了些疑问——先别急，在后续的文档中我们会详细介绍每一个细节。现在，请继续看下去，以确保你对 Vue 作为一个框架到底提供了什么有一个宏观的了解。</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2 id="test">平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
          </div>
          <div class="w-full px-8 flex justify-center items-center">
            您认为此篇文章的内容如何？
            <n-button type="tertiary" class="mx-2">
              Tertiary
            </n-button>
            <n-button type="tertiary">
              Tertiary
            </n-button>
          </div>
          <n-divider />

          <div class="flex flex-col">
            <div class="text-xl font-bold">
              建议反馈
            </div>
            <div class="my-2 flex justify-center ">
              <div class="w-5/6 lg:w-2/3">
                <n-input type="textarea" placeholder="基本的 Textarea" />
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
        </div>
      </n-layout-content>
      <n-layout-sider class="hidden lg:block">
        <n-anchor affix listen-to=".document-scroll-container" :trigger-top="24" :top="88" style="z-index: 1"
          :bound="24" :show-rail="false">
          <n-anchor-link title="演示" href="#演示">
            <n-anchor-link title="基础用法" href="#test" />
            <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
            <n-anchor-link title="固定" href="#affix.vue" />
            <n-anchor-link title="滚动到" href="#scrollto.vue" />
          </n-anchor-link>
          <n-anchor-link title="API" href="#API" />
        </n-anchor>
        <n-divider />
        <div class="flex flex-col">
          <div class="text-lg flex px-2">
            本部分内容贡献者
          </div>
          <div class="flex flex-col p-2">
            <div v-for="i in 10" :key="i" class="m-2 flex    items-center">
              <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
              <div class="ml-2">
                <div class="font-bold">
                  阿宁宁宁
                </div>
                <div>
                  本业内容贡献者
                </div>
              </div>
            </div>
          </div>
        </div>
      </n-layout-sider>
    </n-layout>
  </n-layout>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { CashOutline as CashIcon } from '@vicons/ionicons5';
import MenuComponent from '../components/MenuComponent.vue';

const config = ref({
  if_drawer: false
})
</script>
