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
const currentCharacterIndex = ref(0);

const semesterOptions: Array<'上册' | '下册'> = ['上册', '下册'];

const semesterLessons = computed(() =>
  props.lessons.filter((lesson) => lesson.semester === semester.value)
);

const currentLesson = computed(() => semesterLessons.value[currentIndex.value]);
const currentCharacters = computed(() => currentLesson.value?.characters ?? []);
const currentCharacter = computed(
  () => currentCharacters.value[currentCharacterIndex.value]
);

const progressText = computed(() => {
  const total = semesterLessons.value.length;
  return total === 0 ? '0 / 0' : `${currentIndex.value + 1} / ${total}`;
});

watch(semesterLessons, (lessons) => {
  if (currentIndex.value > lessons.length - 1) {
    currentIndex.value = 0;
  }
});

watch(currentLesson, () => {
  currentCharacterIndex.value = 0;
});

function switchSemester(nextSemester: '上册' | '下册') {
  semester.value = nextSemester;
  currentIndex.value = 0;
}

function goToLesson(index: number) {
  currentIndex.value = index;
  currentCharacterIndex.value = 0;
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

function previousCharacter() {
  if (currentCharacters.value.length === 0) {
    return;
  }

  currentCharacterIndex.value =
    currentCharacterIndex.value === 0
      ? currentCharacters.value.length - 1
      : currentCharacterIndex.value - 1;
}

function nextCharacter() {
  if (currentCharacters.value.length === 0) {
    return;
  }

  currentCharacterIndex.value =
    currentCharacterIndex.value === currentCharacters.value.length - 1
      ? 0
      : currentCharacterIndex.value + 1;
}

function goToCharacter(index: number) {
  currentCharacterIndex.value = index;
}

function formatStrokeOrder(strokes: readonly string[]) {
  return strokes.map((stroke, index) => `${index + 1}${stroke}`).join('  ');
}

function playPronunciation(text: string) {
  if (!('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.75;
  window.speechSynthesis.speak(utterance);
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

          <div v-if="currentCharacter" class="character-carousel">
            <button
              class="character-nav"
              type="button"
              aria-label="上一个字"
              @click="previousCharacter"
            >
              ‹
            </button>

            <transition name="character-slide" mode="out-in">
              <section :key="currentCharacter.character" class="character-card featured">
              <div class="character-main">
                <span class="hanzi">{{ currentCharacter.character }}</span>
                <div class="character-pronunciation">
                  <strong>{{ currentCharacter.pinyin }}</strong>
                  <span v-if="currentCharacter.strokes">{{ currentCharacter.strokes }} 画</span>
                </div>
                <button
                  class="sound-button"
                  type="button"
                  :aria-label="`播放${currentCharacter.character}的发音`"
                  @click="playPronunciation(currentCharacter.voiceText)"
                >
                  播放
                </button>
              </div>

              <p v-if="currentCharacter.meaning" class="character-meaning">
                {{ currentCharacter.meaning }}
              </p>
              <p v-if="currentCharacter.words?.length" class="character-words">
                {{ currentCharacter.words.join(' / ') }}
              </p>
              <p v-if="currentCharacter.sentence" class="character-sentence">
                {{ currentCharacter.sentence }}
              </p>

              <div class="writing-gif" aria-label="笔画顺序动图">
                <svg
                  v-if="currentCharacter.pinyinSvg?.length"
                  class="pinyin-svg"
                  viewBox="0 0 459 405"
                  role="img"
                  :aria-label="`${currentCharacter.character}拼音书写动画`"
                >
                  <line class="pinyin-line" x1="30" y1="30" x2="450" y2="30" />
                  <line class="pinyin-line" x1="30" y1="151" x2="450" y2="151" />
                  <line class="pinyin-line" x1="30" y1="271" x2="450" y2="271" />
                  <line class="pinyin-line" x1="30" y1="392" x2="450" y2="392" />
                  <path
                    v-for="(stroke, strokeIndex) in currentCharacter.pinyinSvg"
                    :key="`${currentCharacter.character}-guide-${strokeIndex}`"
                    class="pinyin-guide-stroke"
                    :d="stroke.path"
                    :style="{
                      '--stroke-linecap': stroke.linecap ?? 'round',
                      '--stroke-linejoin': stroke.linejoin ?? 'round'
                    }"
                  />
                  <path
                    v-for="(stroke, strokeIndex) in currentCharacter.pinyinSvg"
                    :key="`${currentCharacter.character}-svg-${strokeIndex}`"
                    class="pinyin-stroke"
                    :class="`pinyin-stroke-${strokeIndex + 1}`"
                    :d="stroke.path"
                    pathLength="1"
                    :style="{
                      '--stroke-delay': `${stroke.delay ?? strokeIndex * 1.5}s`,
                      '--stroke-duration': `${stroke.duration ?? 4.2}s`,
                      '--stroke-color': stroke.color ?? '#e60012',
                      '--stroke-linecap': stroke.linecap ?? 'round',
                      '--stroke-linejoin': stroke.linejoin ?? 'round'
                    }"
                  />
                </svg>
                <img
                  v-else-if="currentCharacter.strokeGifUrl"
                  class="stroke-gif-image"
                  :src="currentCharacter.strokeGifUrl"
                  :alt="`${currentCharacter.character}一笔一划书写动图`"
                  loading="lazy"
                />
                <p v-if="currentCharacter.strokeOrder?.length" class="stroke-caption">
                  {{ formatStrokeOrder(currentCharacter.strokeOrder) }}
                </p>
              </div>
              </section>
            </transition>

            <button
              class="character-nav"
              type="button"
              aria-label="下一个字"
              @click="nextCharacter"
            >
              ›
            </button>
          </div>

          <div v-if="currentCharacters.length" class="character-dots" aria-label="选择汉字">
            <button
              v-for="(item, index) in currentCharacters"
              :key="item.character"
              class="character-dot"
              :class="{ active: index === currentCharacterIndex }"
              type="button"
              @click="goToCharacter(index)"
            >
              {{ item.character }}
            </button>
          </div>
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
