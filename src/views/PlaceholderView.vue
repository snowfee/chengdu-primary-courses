<script setup lang="ts">
defineProps<{
  subject: string;
  caption: string;
  description: string;
}>();
</script>

<template>
  <main class="page-stack">
    <section class="placeholder-card">
      <span class="eyebrow">{{ caption }}</span>
      <h1>{{ subject }}课程页开发中</h1>
      <p>{{ description }}</p>
      <p>首页导航已经接好，后续可以直接在这个路由下补充课程内容和交互。</p>
    </section>
  </main>
</template>
