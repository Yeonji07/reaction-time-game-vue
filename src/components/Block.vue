<!-- Di component block kita buat block, show block ketika delay terpenuhi, dan trigger klik + dapat reaction time -->
<template>
  <!-- <div class="block mt-4" v-if="showBlock" @click="stopTimer"> -->
  <div class="block mt-5" :class="blockColor" @click="handleClick">
    <h3 class="press-start-2p-regular m-auto" v-if="allowReact == true">
      Click !!
    </h3>
    <h3
      class="press-start-2p-regular text-center m-auto"
      v-else-if="allowReact == false"
    >
      Wait For Green...
    </h3>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  // Tujuan mounted ini untuk show ketika delay dari timer random spawn
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      //   this.showBlock = true;
      this.blockColor = "lightgreen";
      this.allowReact = true;
      this.startTimer();
    }, this.delay);
  },
  data() {
    return {
      //   showBlock: false,
      timer: null,
      blockColor: "lightcoral",
      allowReact: false,
      reactionTime: 0,
    };
  },
  methods: {
    // Ketika component mounted, maka startTimer berjalan dan reaction time akan bertambah
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 3;
      }, 3);
    },

    // Ketika di click, clear interval dari timer
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime); //Disini baru tau kalo ternyata emit bisa bawa parameter data & ngga cuman 1 saja, bisa banyak
    },

    handleClick() {
      if (!this.allowReact) {
        // Kalo ngga boleh react tapi tetep di click = send ke main page utk handle too soon
        this.$emit("tooSoon");
      } else {
        // Stop timer kalau react sebelum hijau
        this.stopTimer();
      }
    },
  },
};
</script>

<style>
.block {
  display: flex;
  background-color: lightcoral;
  width: 80%;
  height: 75vh;
  max-height: 350px;
  border-radius: 10px;
  justify-content: center;
  /* margin: auto; */
  cursor: pointer;
  flex: 1;
}

@media (max-width: 768px) {
  .block {
    width: 90%;
    height: 65vh;
  }
}

@media (max-width: 480px) {
  .block {
    width: 90%;
    height: 60vh;
  }
}

.lightgreen {
  background-color: lightgreen;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
}
.lightcoral {
  background-color: lightcoral;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); /* Red glow */
}
</style>
