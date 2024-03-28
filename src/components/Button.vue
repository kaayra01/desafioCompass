<template>
  <button type="button" :class="['button', { selected }]">
    <span>{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",

  props: {
    selected: {
      type: Boolean,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.button {
  background-color: transparent;
  border: 2px solid black;
  border-radius: 0.5rem;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  width: 25%;
}
</style>
