<template>
  <div class="notification">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotificationComponent",

  props: {
    message: String,
  },
});
</script>

<style scoped>
.notification {
  background-color: #fff;
  border-radius: 2rem;
  color: #000;
  height: 2.5rem;
  justify-content: center;
  margin: auto 20rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  text-align: center;
  width: 20%;
  z-index: 105;
}

@media only screen and (max-width: 768px) {
  .notification {
    margin: auto 5rem;
  }
}
</style>
