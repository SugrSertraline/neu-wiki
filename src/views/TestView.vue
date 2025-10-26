<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">测试专用页面 - NWDownload 组件展示</h1>
    
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">NWDownload 组件示例</h2>
      
      <!-- 示例1: 带图标的下载 -->
      <NWDownload :downloadProps="{
        type: NWComponent.NWDownload,
        iconUrl: '/neulogo.png',
        title: 'NEU Logo 下载',
        description: '东北大学官方标志图片，适用于各种文档和演示',
        downloadUrl: '/neulogo.png',
        fileName: 'neulogo.png'
      }" />
      
      <!-- 示例2: 不带图标的下载 -->
      <NWDownload :downloadProps="{
        type: NWComponent.NWDownload,
        iconUrl: '',
        title: '项目文档 PDF',
        description: '完整的项目文档，包含详细说明和使用指南',
        downloadUrl: '/da4defb8-d84c-bf01-830f-d07629397c52.pdf',
        fileName: '项目文档.pdf'
      }" />
      
      <!-- 示例3: 无描述的下载 -->
      <NWDownload :downloadProps="{
        type: NWComponent.NWDownload,
        iconUrl: '/NEUP-LOGO.png',
        title: 'NEUP Logo',
        description: '',
        downloadUrl: '/NEUP-LOGO.png'
      }" />
      
      <!-- 示例4: 外部链接下载 -->
      <NWDownload :downloadProps="{
        type: NWComponent.NWDownload,
        iconUrl: '',
        title: '示例软件下载',
        description: '这是一个示例软件的下载链接，点击按钮即可开始下载',
        downloadUrl: 'https://example.com/software.exe',
        fileName: 'software.exe'
      }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NWDownload } from '@/components/NWDownload';
import { NWComponent } from '@/types/enum';
</script>
