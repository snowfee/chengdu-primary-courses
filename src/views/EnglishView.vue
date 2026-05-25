<script setup lang="ts">
import LessonFlipbook from '../components/LessonFlipbook.vue';
import { englishLessons } from '../data/englishLessons';
</script>

<template>
  <LessonFlipbook
    eyebrow="ENGLISH · PAGE FLIP"
    title="一年级英文逐课知识卡片"
    description="围绕一年级英语启蒙常见主题整理课程内容，包括问候、自我介绍、字母、数字、颜色、家庭、动物、食物和课堂指令等主题，支持逐课翻页浏览。"
    source-note="英文页内容按小学一年级英语启蒙的常见学习路径整理，更强调听说兴趣、基础词汇积累和情境表达，适合作为课堂展示和家庭陪学材料。"
    :lessons="englishLessons"
  />
</template>
