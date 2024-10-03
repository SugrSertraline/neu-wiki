<template>
    <n-config-provider :theme="darkTheme">
      <n-layout>
        <n-layout-header class="header">
          <h1>投稿页面</h1>
        </n-layout-header>
        <n-layout-content class="content">
          <n-form
            ref="formRef"
            :model="formValue"
            :rules="rules"
            label-placement="top"
          >
            <n-form-item label="标题" path="title">
              <n-input v-model:value="formValue.title" placeholder="请输入标题" />
            </n-form-item>
            
            <n-form-item label="内容" path="content">
              <n-input
                v-model:value="formValue.content"
                type="textarea"
                placeholder="请输入内容"
                :autosize="{ minRows: 3, maxRows: 5 }"
              />
            </n-form-item>
            
            <n-form-item label="上传文件" path="file">
              <n-upload
                accept="image/*,.pdf"
                :max="1"
                :on-change="handleFileUpload"
              >
                <n-button>选择文件</n-button>
              </n-upload>
            </n-form-item>
            
            <n-form-item>
              <n-button type="primary" @click="handleSubmit" block>
                提交
              </n-button>
            </n-form-item>
          </n-form>
        </n-layout-content>
      </n-layout>
    </n-config-provider>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useMessage } from 'naive-ui'
  import {
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NForm,
    NFormItem,
    NInput,
    NUpload,
    NButton,
    darkTheme
  } from 'naive-ui'
  
  const formRef = ref(null)
  const message = useMessage()
  
  const formValue = ref({
    title: '',
    content: '',
    file: null
  })
  
  const rules = {
    title: {
      required: true,
      message: '请输入标题',
      trigger: 'blur'
    },
    content: {
      required: true,
      message: '请输入内容',
      trigger: 'blur'
    }
  }
  
  const handleFileUpload = (options) => {
    formValue.value.file = options.file
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    formRef.value?.validate((errors) => {
      if (!errors) {
        message.success('提交成功')
        console.log('Form submitted:', formValue.value)
        // 这里可以添加实际的提交逻辑
      } else {
        console.log(errors)
        message.error('请填写所有必填字段')
      }
    })
  }
  </script>
  
  <style scoped>
  .header {
    padding: 16px;
    background-color: #18181c;
    text-align: center;
    color: #ffffff;
  }
  
  .content {
    padding: 16px;
  }
  
  :deep(.n-form-item) {
    margin-bottom: 24px;
  }
  
  :deep(.n-input) {
    max-width: 100%;
  }
  
  :deep(.n-upload) {
    justify-content: center;
  }
  </style>