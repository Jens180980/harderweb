<script>
export default {};
</script>

<template>
  <section>
    <div class="header">
      <div class="close"><p>-</p></div>
      <div class="header-txt"><h5>Program Manager</h5></div>
      <div class="updown-wrap">
        <div class="down">&#60;</div>
        <div class="up">&#60;</div>
      </div>
    </div>
    <div class="main-content">main content</div>
  </section>
</template>

<style scoped>
section {
  width: 20vw;
  background-color: white;
  position: absolute;
  top: 40%;
  left: 40%;
}
.header {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 6fr 2fr;
  align-content: center;
  background-color: grey;
  border-style: double;
  border: 3px double black;
  height: 2rem;
}
.header > * {
  height: 2rem;
}
.header-txt {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 3px double black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.updown-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  font-size: 1.2rem;
}
.down {
  rotate: 270deg;
  border: 1px outset black;
}
.up {
  rotate: 90deg;
}
.close {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-content {
  height: 40vh;
  border: 3px double grey;
}
</style>
