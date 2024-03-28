<template>
  <div class="form">
    <NotificationComponent
      class="notification"
      :message="notification"
      v-show="notification"
    />
    <form id="form" @submit.prevent="createContact">
      <div class="interests">
        <p class="font-bold">I'm interested in...</p>
        <div class="area-interests font-medium">
          <ButtonComponent
            @click="setInterest($event.target.value)"
            buttonText="Front-end"
            :class="{ active: activeButton === 'Front-end' }"
            value="Front-end"
          />
          <ButtonComponent
            @click="setInterest($event.target.value)"
            buttonText="Back-end"
            :class="{ active: activeButton === 'Back-end' }"
            value="Back-end"
          />
          <ButtonComponent
            @click="setInterest($event.target.value)"
            buttonText="Mobile"
            :class="{ active: activeButton === 'Mobile' }"
            value="Mobile"
          />
          <ButtonComponent
            @click="setInterest($event.target.value)"
            buttonText="AI"
            :class="{ active: activeButton === 'AI' }"
            value="AI"
          />
          <ButtonComponent
            @click="setInterest($event.target.value)"
            buttonText="Other"
            :class="{ active: activeButton === 'Other' }"
            value="Other"
          />
        </div>
      </div>

      <div class="form-infos">
        <input
          class="form-data"
          type="text"
          placeholder="Your name"
          id="name"
          name="name"
          v-model="name"
          required
        />
        <input
          class="form-data"
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          v-model="email"
          required
        />
        <textarea
          class="form-data"
          type="text"
          placeholder="Your message"
          id="message"
          name="message"
          v-model="message"
          required
        />
      </div>

      <button class="send-message font-medium">
        <img
          src="../assets/icons/SendMessage.png"
          alt="ícone de envio de mensagem"
        />
        Send message
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import http from "@/http";
import { defineComponent } from "vue";
import NotificationComponent from "./Notification.vue";
import ButtonComponent from "./Button.vue";

export default defineComponent({
  name: "FormComponent",

  components: {
    NotificationComponent,
    ButtonComponent,
  },

  data() {
    return {
      name: "",
      email: "",
      message: "",
      interest: "",
      notification: "",
      activeButton: null as any,
    };
  },

  methods: {
    setInterest(buttonValue: string) {
      this.activeButton = buttonValue;
      this.interest = buttonValue;
    },

    async createContact() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        interest: "teste",
      };

      const req = http
        .post("contact/", data)
        .then(() => {
          this.notification =
            "Contato cadastrado! Obrigado por compartilhar seus interesses.";
          this.name = "";
          this.email = "";
          this.message = "";
          this.interest = "";
        })
        .catch(() => {
          this.notification =
            "Ocorreu um erro. Verifique as informações e tente novamente!";
        });

      setTimeout(() => (this.notification = ""), 3000);
    },
  },
});
</script>

<style scoped>
.form {
  background-color: var(--yellow);
  border-radius: 2rem 0;
  padding: 1.5rem 3rem 4.5rem;
  text-align: left;
  width: 42rem;
}

#form {
  padding-top: 3rem;
}

.interests {
  margin: 0;
}

.interests p {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.area-interests {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
}

.active {
  background-color: #000;
  color: var(--text-selected);
}

.form-data {
  background-color: transparent;
  border: none;
  border-bottom: 3px solid black;
  display: block;
  font-size: 1.5rem;
  height: 2.75rem;
  margin: 4rem 0;
  width: 95%;
}

::placeholder {
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
}

textarea {
  resize: none;
}

.send-message {
  align-items: center;
  background-color: #000;
  border: none;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  height: 4.9rem;
  justify-content: center;
  margin: auto;
  padding: 1.5rem;
  transition: 0.2s;
  width: 90%;
}

.send-message img {
  margin-right: 1rem;
  width: 1.5rem;
}
</style>
