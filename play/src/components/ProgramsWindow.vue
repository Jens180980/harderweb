<template>
  <div class="outer" @drop="Stopmove" @dragover.prevent @dragenter.prevent>
    <section ref="programWrapper" draggable="true" @dragstart="Startmove">
      <div class="header">
        <div class="close"><p>-</p></div>
        <div class="header-txt">
          <h5>Program Manager</h5>
        </div>
        <div class="updown-wrap">
          <div class="down">&#9660;</div>
          <div class="up">&#9650;</div>
        </div>
      </div>
      <div class="main-content">
        <div v-for="program in programs" :key="program.id">
          <img :src="program.iconpath" :alt="program.name" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          id: 1,
          name: "file manager",
          iconpath: "src/assets/media/fm.png",
          isPlayable: false,
        },
        {
          id: 2,
          name: "minesweeper",
          iconpath: "src/assets/media/ms.png",
          isPlayable: true,
        },
      ],
      posX: 0,
      posY: 0,
    };
  },
  methods: {
    Startmove(e) {
      console.log("drag started " + e.clientX);
    },
    Stopmove(e) {
      this.$refs.programWrapper.style.top = e.clientY + "px";
      this.$refs.programWrapper.style.left = e.clientX + "px";
    },
  },
};
</script>

<style scoped>
.outer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
section {
  width: 20vw;
  background-color: gray;
  position: absolute;
  top: 200px;
  left: 500px;
  border: 3px double black;
}
.header {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 6fr 2fr;
  align-content: center;
  background-color: grey;
  border-bottom: 1px solid black;
  height: 2rem;
}
.header > * {
  height: 2rem;
}
.header-txt {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.header-txt h5 {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 1rem;
}
.updown-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  font-size: 1.2rem;
}
.down {
  border: 2px outset black;
  display: block;
}
.up {
}
.close {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-content {
  display: flex;
  gap: 2rem;
  height: 40vh;
  background-color: white;
  padding: 1rem 2rem;
}
</style>
