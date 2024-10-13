<template>
  <NWPersonalIntro :user="userProfile"></NWPersonalIntro>
  <NWDialogue
      v-for="(dialogue, index) in dialogues"
      :key="index"
      :question="dialogue.question"
      :answer="dialogue.answer"
    />
    <test :message="farewellMessage"
      :author="intervieweeName"
    />

    
</template>
<script setup lang="ts">
import { NWPersonalIntro } from '@/components/NWPersonalIntro';
import { NWDialogue } from '@/components/NWDialogue';
import test from '@/components/test.vue'
const userProfile = {
  name: '张三',
  avatarUrl: 'https://example.com/avatar.jpg',
  college: '计算机科学学院',
  grade: '2023级',
  major: '软件工程',
  graduation: '某科技公司',
  introduction: '热爱编程,专注于Web开发和人工智能。喜欢参与开源项目,并在课余时间研究新技术。',
  achievements: ['校级奖学金', '编程大赛一等奖', '优秀学生干部', '发表SCI论文'],
  qq: '123456789',
  wechat: 'zhangsan123',
  github: 'https://github.com/zhangsan',
  email: 'zhangsan@example.com'
}
const dialogues = [
  {
    question: "你好,请问今天天气如何?",
    answer: "今天天气晴朗,气温适宜,非常适合外出活动。"
  },
  {
    question: "有什么好的户外活动推荐吗?",
    answer: "考虑到今天的好天气,我推荐您可以去附近的公园野餐,或者去郊外远足。这两种活动都能让您充分享受阳光和新鲜空气。"
  }
]
const farewellMessage = "追求卓越,勇攀高峰。在人生的旅途中,永远保持好奇心和学习的热情。记住,每一次失败都是成功的铺垫,每一次挑战都是成长的机会。相信自己,勇往直前!"
const intervieweeName = "张教授"
</script>