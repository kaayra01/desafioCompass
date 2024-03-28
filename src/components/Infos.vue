<template>
  <section class="infos">
    <img
      class="logo"
      src="../assets/compass.uol_Negativo.svg"
      alt="Logo da Compass"
    />
    <p class="infos-title font-bold">
      Let's discuss on something
      <span class="highlight-text">cool</span> together
    </p>
    <div class="contact font-medium">
      <div class="email">
        <img src="../assets/icons/EnvelopeFill.png" alt="ícone de envelope" />
        <p>{{ info.email }}</p>
      </div>
      <div class="phone">
        <img src="../assets/icons/TelephoneFill.png" alt="ícone de telefone" />
        <p>{{ info.phone }}</p>
      </div>
      <div class="address">
        <img src="../assets/icons/AddressFill.png" alt="ícone de endereço" />
        <p>{{ info.address }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfosComponent",

  data() {
    return {
      info: {
        email: "challenge@compass.com.br",
        phone: "+12 3456 3789",
        address: "123 Street 456 House",
      },
    };
  },
});
</script>

<style scoped>
.infos {
  margin-right: 3.4rem;
  color: #fff;
  text-align: left;
  width: 50%;
  width: 30rem;
}

.logo {
  width: 27rem;
}

.infos-title {
  font-size: 3.5rem;
  margin: 6rem 0;
  width: 27rem;
}

.highlight-text {
  color: var(--yellow);
  text-transform: uppercase;
}

.contact {
  font-size: 1.25rem;
  margin: 0.5rem auto;
  justify-content: center;
}

.contact div {
  display: flex;
  margin: auto 1.5rem;
  align-items: center;
}

.contact img {
  height: 1.5rem;
  margin-right: 1rem;
}
</style>
