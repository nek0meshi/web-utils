<template>
  <div>
    <h2>ランダム文字列生成</h2>
    <div class="container">
      <div>
        <span class="m-2">文字数</span>
        <input v-model="textLength" type="text">
      </div>
      <div>
        <label>
          <input v-model="useNumber" type="checkbox"> 数字
        </label>
        <label>
          <input v-model="useUppercaseAlphabet" type="checkbox"> 英大文字
        </label>
        <label>
          <input v-model="useLowercaseAlphabet" type="checkbox"> 英小文字
        </label>
      </div>
      <div>
        <button @click="generate">生成</button>
        <button @click="copy">コピー</button>
      </div>
      <textarea id="randomTextGenerateTextArea" :value="randomText" readonly></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const textLength = ref(10)
const useNumber = ref(true)
const useUppercaseAlphabet = ref(true)
const useLowercaseAlphabet = ref(true)
const randomText = ref('')
const randomTextOrigin = computed(
  () => [
    useNumber.value ? '0123456789' : '',
    useUppercaseAlphabet.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
    useLowercaseAlphabet.value ? 'abcdefghijklmnopqrstuvwxyz' : '',
  ].join('')
)

const generate = () => {
  randomText.value = Array
    .from(Array(+textLength.value || 10))
    .map(() => randomTextOrigin.value[Math.floor(Math.random() * randomTextOrigin.value.length)])
    .join('')
}
const copy = () => {
  document.querySelector('#randomTextGenerateTextArea').select()
  document.execCommand("copy")
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

#randomTextGenerateTextArea {
  resize: none;
  min-height: 200px;
}
</style>