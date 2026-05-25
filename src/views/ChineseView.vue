<script setup lang="ts">
import LessonFlipbook from '../components/LessonFlipbook.vue';
import { chineseLessons } from '../data/chineseLessons';
</script>

<template>
  <LessonFlipbook
    eyebrow="CHINESE · PAGE FLIP"
    title="一年级语文逐课知识卡片"
    description="内容按统编人教版一年级语文上下册课次整理，总结每节课的核心知识、识字重点、阅读理解方向和表达训练点，支持像翻页一样逐课查看。"
    source-note="目录依据人民教育出版社公开的一年级语文教材目录整理，知识点为基于课文主题、识字任务、朗读训练和表达目标做的教学归纳。"
    :lessons="chineseLessons"
  />
</template>
