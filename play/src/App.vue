<script>
import ProgramWindows from "./components/ProgramsWindow.vue";

export default {
  components: { ProgramWindows },
};
</script>

<template>
  <main>
    <ProgramWindows />
    <p>This page was written en Vue.js</p>
  </main>
</template>

<style scoped>
main {
  background-color: #57a8a8;
  height: 100vh;
  width: 100vw;
  position: relative;
}
p {
  position: absolute;
  bottom: 5%;
  left: 5%;
}
</style>
