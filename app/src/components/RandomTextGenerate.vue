<template>
  <div>
    <h2>ランダム文字列生成</h2>
    <div class="container">
      <div>
        <span class="mr-2">文字数</span>
        <input v-model="textLength" type="text" class="input">
      </div>
      <div>
        <label>
          <input
            v-model="useNumber"
            type="checkbox"
            class="checkbox"
          > 数字
        </label>
        <label>
          <input
            v-model="useUppercaseAlphabet"
            type="checkbox"
            class="checkbox"
          > 英大文字
        </label>
        <label>
          <input
            v-model="useLowercaseAlphabet"
            type="checkbox"
            class="checkbox"
          > 英小文字
        </label>
      </div>
      <div>
        <button class="button is-primary mr-2" @click="generate">生成</button>
        <button class="button is-primary is-light" @click="copy">コピー</button>
      </div>
      <textarea
        id="randomTextGenerateTextArea"
        class="textarea"
        :value="randomText"
        readonly
      />
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
  gap: 10px;
}

#randomTextGenerateTextArea {
  resize: none;
  min-height: 200px;
}
</style>