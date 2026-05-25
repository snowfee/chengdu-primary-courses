<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Lesson } from '../types/lesson';

const props = defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  sourceNote: string;
  lessons: Lesson[];
}>();

const semester = ref<'上册' | '下册'>('上册');
const currentIndex = ref(0);

const semesterOptions: Array<'上册' | '下册'> = ['上册', '下册'];

const semesterLessons = computed(() =>
  props.lessons.filter((lesson) => lesson.semester === semester.value)
);

const currentLesson = computed(() => semesterLessons.value[currentIndex.value]);

const progressText = computed(() => {
  const total = semesterLessons.value.length;
  return total === 0 ? '0 / 0' : `${currentIndex.value + 1} / ${total}`;
});

watch(semesterLessons, (lessons) => {
  if (currentIndex.value > lessons.length - 1) {
    currentIndex.value = 0;
  }
});

function switchSemester(nextSemester: '上册' | '下册') {
  semester.value = nextSemester;
  currentIndex.value = 0;
}

function goToLesson(index: number) {
  currentIndex.value = index;
}

function previousLesson() {
  if (semesterLessons.value.length === 0) {
    return;
  }

  currentIndex.value =
    currentIndex.value === 0
      ? semesterLessons.value.length - 1
      : currentIndex.value - 1;
}

function nextLesson() {
  if (semesterLessons.value.length === 0) {
    return;
  }

  currentIndex.value =
    currentIndex.value === semesterLessons.value.length - 1
      ? 0
      : currentIndex.value + 1;
}
</script>

<template>
  <main class="page-stack">
    <section class="hero-card compact">
      <div class="hero-copy">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </section>

    <section class="toolbar-card">
      <div class="semester-switch">
        <button
          v-for="item in semesterOptions"
          :key="item"
          class="semester-button"
          :class="{ active: semester === item }"
          @click="switchSemester(item)"
        >
          {{ item }}
        </button>
      </div>
      <div class="toolbar-meta">
        <span>当前课次</span>
        <strong>{{ progressText }}</strong>
      </div>
    </section>

    <section class="flipbook-card" v-if="currentLesson">
      <div class="flipbook-header">
        <div>
          <span class="subject-caption">{{ currentLesson.unit }}</span>
          <h2>{{ currentLesson.title }}</h2>
        </div>
        <div class="lesson-chip">{{ currentLesson.focus }}</div>
      </div>

      <transition name="page-flip" mode="out-in">
        <article class="lesson-page" :key="currentLesson.id">
          <div class="lesson-page-top">
            <span class="page-badge">{{ currentLesson.semester }}</span>
            <span class="page-badge muted">{{ currentLesson.id }}</span>
          </div>

          <h3>知识要点</h3>
          <ul class="lesson-points">
            <li v-for="point in currentLesson.points" :key="point">
              {{ point }}
            </li>
          </ul>
        </article>
      </transition>

      <div class="flipbook-actions">
        <button class="turn-button" @click="previousLesson">上一课</button>
        <button class="turn-button accent" @click="nextLesson">下一课</button>
      </div>
    </section>

    <section class="lesson-rail">
      <button
        v-for="(lesson, index) in semesterLessons"
        :key="lesson.id"
        class="rail-item"
        :class="{ active: index === currentIndex }"
        @click="goToLesson(index)"
      >
        <span>{{ index + 1 }}</span>
        <strong>{{ lesson.title }}</strong>
      </button>
    </section>

    <section class="source-note">
      <p>{{ sourceNote }}</p>
    </section>
  </main>
</template>
