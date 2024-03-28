<template>
  <div class="content">
    <InfosComponent />
    <FormComponent />
  </div>
</template>
<script lang="ts">
import FormComponent from "../components/Form.vue";
import InfosComponent from "../components/Infos.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentForm",

  components: {
    FormComponent,
    InfosComponent,
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
