<template>
  <div>
    <h2>文字数カウント</h2>
    <textarea v-model="text" class="text-count-area"></textarea>
    <table>
      <tr>
        <th>文字数</th>
        <td>{{ textCount }} 文字</td>
      </tr>
      <tr>
        <th>文字数（スペースを除く）</th>
        <td>{{ textWithoutSpaceCount }} 文字</td>
      </tr>
      <tr>
        <th>行数</th>
        <td>{{ gyosuCount }} 行</td>
      </tr>
    </table>
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
.text-count-area {
  height: 320px;
  width: 100%;
  resize: none;
}
th {
  padding-right: 30px;
}
</style>
