<template>
  <div class="mt-3">
    <p class="retro-font text-black mx-3 word-break text-center" v-if="success">
      Current Reaction Time: {{ rtScore }} ms
    </p>
    <p class="retro-font text-black mx-3 word-break text-center" v-if="failed">
      Too Soon !
    </p>
  </div>
</template>

<script>
export default {
  props: ["success", "failed", "rtScore"],
};
</script>
