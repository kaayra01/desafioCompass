<template>
  <div class="content">
    <Infos />
    <FormComponent />
  </div>
</template>
<script lang="ts">
import FormComponent from "../components/Form.vue";
import Infos from "../components/Infos.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentComponent",

  components: {
    FormComponent,
    Infos,
  },
});
</script>

<style scoped>
.content {
  display: flex;
  margin: 5.9rem 6.7rem;
  align-items: center;
  justify-content: center;
}
</style>
