<template>
  <div class="main-bg-image"></div>
  <div class="mainContainer">
    <!-- Title -->
    <div class="responsive-content align-center">
      <h1
        class="sixtyfour-convergence-primary text-green-glow text-center mx-3"
      >
        Reaction Time Game
      </h1>
      <div class="content-center">
        <button
          class="start-btn sixtyfour-convergence-secondary btn-hover"
          @click="startGame"
          :disabled="isPlaying"
        >
          Start
        </button>
      </div>

      <!-- Result Comp -->
      <Result :success="showResult" :failed="showFailed" :rtScore="rtScore" />

      <!-- Block Comp -->
      <Block
        v-if="isPlaying"
        :delay="delay"
        @end="endGame"
        @tooSoon="handleTooSoon"
      />
    </div>

    <!-- Footer Comp -->
    <FooterComponent />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: { Block, Result, FooterComponent },
  data() {
    return {
      isPlaying: false,
      delay: null,
      rtScore: 0,
      showResult: false,
      showFailed: false,
    };
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000; //Artinya max random dari 2-7 detik spawn blocknya
      this.isPlaying = true;
      this.showFailed = false;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.rtScore = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
    handleTooSoon() {
      this.showFailed = true;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence:SCAN,XELA,YELA@-23,-37,-13&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Sixtyfour+Convergence:SCAN,XELA,YELA@-23,-37,-13&display=swap");

header {
  line-height: 1.5;
}

.w-100 {
  width: 100%;
}
.m-auto {
  margin: auto !important;
}
.mt-3 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 3rem;
}
.mb-3 {
  margin-bottom: 1rem;
}
.mx-3 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.content-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.text-center {
  text-align: center;
}
.text-white {
  color: white;
}
.text-black {
  color: black;
}
.word-break {
  word-wrap: break-word;
}
.responsive-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 97vw;
  height: 100%;
  align-items: center;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  /* justify-content: space-between; */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 0.25rem;
}

.main-bg-image {
  background-image: url("/images/8bit-gaming-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 101vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.sixtyfour-convergence-primary {
  font-family: "Sixtyfour Convergence", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "BLED" 0, "SCAN" 0, "XELA" 0, "YELA" 0;
}

.sixtyfour-convergence-secondary {
  font-family: "Sixtyfour Convergence", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "BLED" 0, "SCAN" -23, "XELA" -37, "YELA" -13;
}

.press-start-2p-regular {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
}

.retro-font {
  font-family: "Press Start 2P", sans-serif;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 255, 0, 0.6); /* Green glow */
}

.start-btn {
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
}

.btn-hover:hover {
  scale: 1.2;
  transition: 0.2s ease-in-out;
}

.text-red-glow {
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 0, 0, 0.6); /* Red glow */
}
.text-green-glow {
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.6), 0 0 10px rgba(0, 255, 0, 0.3); /* Green glow */
}
.box-red-glow {
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 0, 0, 0.6); /* Red glow */
}
.box-green-glow {
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.6), 0 0 10px rgba(0, 255, 0, 0.3); /* Green glow */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
