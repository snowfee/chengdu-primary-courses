<script setup lang="ts">
import { RouterLink } from 'vue-router';

const subjects = [
  {
    title: '语文',
    caption: 'Chinese',
    to: '/chinese',
    description: '按一年级统编课本整理知识点，支持逐课翻页学习。'
  },
  {
    title: '数学',
    caption: 'Mathematics',
    to: '/math',
    description: '按一年级数学知识结构整理课程要点，支持逐课翻页。'
  },
  {
    title: '英文',
    caption: 'English',
    to: '/english',
    description: '按一年级英语启蒙主题整理课程要点，支持逐课翻页。'
  }
];
</script>

<template>
  <main class="page-stack">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="eyebrow">GRADE 1 · CHENGDU · 2026</span>
        <h1>从首页进入不同学科，按课学习知识要点</h1>
        <p>
          这个项目已改为基于 Vue 3 和 TypeScript 的多页面路由结构。当前优先开发语文，
          采用翻页式查看每一课的学习重点，方便课堂预习、家长辅导和知识回顾。
        </p>
      </div>
    </section>

    <section class="subject-grid">
      <RouterLink
        v-for="subject in subjects"
        :key="subject.to"
        :to="subject.to"
        class="subject-card"
      >
        <span class="subject-caption">{{ subject.caption }}</span>
        <h2>{{ subject.title }}</h2>
        <p>{{ subject.description }}</p>
        <span class="subject-action">进入课程</span>
      </RouterLink>
    </section>
  </main>
</template>
