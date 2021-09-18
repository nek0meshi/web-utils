<template>
  <div>
    <header class="is-flex mt-5 mb-3 ml-6">
      <h1 class="title my-auto is-inline-block">Web Utils</h1>
      <small class="mt-4 ml-5">Web画面から利用できるUtility集</small>
    </header>
    <div class="tabs mt-4 mb-5 ml-6">
      <ul>
        <li :class="{ 'is-active': tab === TAB_COUNT_TEXT }">
          <a @click="selectTab(TAB_COUNT_TEXT)">文字数カウント</a>
        </li>
        <li :class="{ 'is-active': tab === TAB_RANDOM_TEXT_GENERATE }">
          <a @click="selectTab(TAB_RANDOM_TEXT_GENERATE)">ランダム文字列生成</a>
        </li>
      </ul>
    </div>
    <main>
      <CountText v-if="tab === TAB_COUNT_TEXT" class="mb-6" />
      <RandomTextGenerate v-if="tab === TAB_RANDOM_TEXT_GENERATE" />
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import CountText from "./components/CountText.vue";
import RandomTextGenerate from "./components/RandomTextGenerate.vue";
import { ref } from 'vue'

const tab = ref(1)
const TAB_COUNT_TEXT = 1
const TAB_RANDOM_TEXT_GENERATE = 2

const selectTab = (selectedTab) => {
  tab.value = selectedTab
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Klee+One&display=swap');
@import 'bulma/bulma.sass';

#app {
  color: #444;
  font-family: Klee One, Helvetica, Arial, sans-serif;
  h1 {
    font-size: 2.3rem;
    font-weight: semi-bold;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: semi-bold;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: semi-bold;
  }
  main {
    width: 480px;
    margin: 0 auto;
    @media (max-width: $tablet) {
      margin-left: 3rem;
    }
  }
  footer {
    height: 100px;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
