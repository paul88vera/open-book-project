<template>
  <q-page class="flex flex-center">
    <q-card-section class="login-page">
    <q-form action="" class="form">
        <q-input type="text" label="Username" v-model="login.username" />
        <q-input type="password" label="Password" v-model="login.password" />
      <q-btn class="btnSubmit full-width" label="Login"></q-btn>
    </q-form>
    </q-card-section>
  </q-page>
</template>


<script>
// import { defineComponent } from 'vue'

export default {
  name: 'loginPage',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm(){
      if (!this.login.username || !this.login.password) {
        console.log('error')
      } else {
        console.log('login')
      }
    }
  }
}
</script>
