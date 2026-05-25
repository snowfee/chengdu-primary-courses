<script setup lang="ts">
import LessonFlipbook from '../components/LessonFlipbook.vue';
import { mathLessons } from '../data/mathLessons';
</script>

<template>
  <LessonFlipbook
    eyebrow="MATHEMATICS · PAGE FLIP"
    title="一年级数学逐课知识卡片"
    description="内容按一年级数学上下册的核心知识结构整理，覆盖数数、比较、10 以内与 20 以内运算、100 以内数、人民币、图形和规律等主题，支持逐课翻页查看。"
    source-note="数学页内容依据小学一年级常见教材单元结构归纳，重点突出数感、口算方法、图形认识和生活应用，便于预习、复习与家长辅导。"
    :lessons="mathLessons"
  />
</template>
