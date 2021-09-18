<script setup>
import CountText from "./components/CountText.vue";
import RandomTextGenerate from "./components/RandomTextGenerate.vue";
</script>

<template>
  <div>
    <CountText />
    <RandomTextGenerate />
  </div>
</template>

<style>
@charset "utf-8";
@import url('https://fonts.googleapis.com/css2?family=Klee+One&display=swap');

#app {
  color: #444;
  font-family: Klee One, Helvetica, Arial, sans-serif;
  width: 480px;
  margin: 0 auto;
}
</style>
