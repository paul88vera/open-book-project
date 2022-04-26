<template>
  <q-page class="flex flex-center">
    <q-card-section class="login-page">
      <q-form class="form" @submit.prevent="submitForm">
        <q-input type="text" label="Username" v-model="login.username" />
        <q-input type="password" label="Password" v-model="login.password" />
        <q-btn class="btnSubmit full-width" label="Login" type="submit"></q-btn>
      </q-form>
    </q-card-section>
  </q-page>
</template>

<script>
// import { defineComponent } from 'vue'
import { useQuasar } from "quasar";
import { mapActions } from "vuex";

let $q;

export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        username: "jobs@inleague.com",
        password: "openBook99",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["doLogin"]),
    async submitForm() {
      if (!this.login.username || !this.login.password) {
        await this.doLogin(this.login);
      } else if (this.login.password.length < 6) {
        $q.notify({
          type: "negative",
          message: "The password must be at least 6 characters",
        })
      } else {
            await this.doLogin(this.login);
        }
      }
    },
  mounted() {
    $q = useQuasar();
  },
};
</script>
