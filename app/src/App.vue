<script setup>
import CountText from "./components/CountText.vue";
import RandomTextGenerate from "./components/RandomTextGenerate.vue";
</script>

<template>
  <div>
    <CountText class="mb-6" />
    <RandomTextGenerate />
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Klee+One&display=swap');
@import 'bulma/bulma.sass';

#app {
  color: #444;
  font-family: Klee One, Helvetica, Arial, sans-serif;
  width: 480px;
  margin: 0 auto;
  h1 {
    font-size: 2.5rem;
    font-weight: semi-bold;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: semi-bold;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: semi-bold;
  }
  footer {
    height: 100px;
  }
}
</style>
