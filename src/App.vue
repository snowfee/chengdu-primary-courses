<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const links = [
  { label: '首页', to: '/' },
  { label: '语文', to: '/chinese' },
  { label: '数学', to: '/math' },
  { label: '英文', to: '/english' }
];
</script>

<template>
  <div class="shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">成</span>
        <div>
          <strong>成都 2026 小学一年级课程</strong>
          <p>Vue 3 + TypeScript 课程导航</p>
        </div>
      </RouterLink>

      <nav class="nav">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
