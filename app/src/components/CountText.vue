<template>
  <div>
    <h2>文字数カウント</h2>
    <textarea v-model="text"></textarea>
    <dl>
      <dt>文字数</dt>
      <dd>{{ textCount }}文字</dd>
      <dt>文字数<br>（スペースを除く）</dt>
      <dd>{{ textWithoutSpaceCount }}文字</dd>
      <dt>行数</dt>
      <dd>{{ gyosuCount }}行</dd>
    </dl>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const text = ref('')
const kaigyoCount = computed(() => text.value.split('').filter((text) => text === '\n').length)
const spaceCount = computed(
  () => text.value.split('').filter((text) => [' ', '　'].includes(text)).length
);
const textCount = computed(() => text.value.length - kaigyoCount.value);
const textWithoutSpaceCount = computed(() => textCount.value - spaceCount.value)
const gyosuCount = computed(() =>
  kaigyoCount.value + (text.value.split('\n').slice(-1)[0].trim().length ? 1 : 0)
);
</script>

<style scoped>
</style>