<template>
  <q-page class="flex flex-center">
    <section class="login-page">
    <form action="" class="form">
      <h4 class="register">Login</h4>
      <label for="username" class="label">Username:
        <input type="text">
      </label>
      <label for="password" class="label">Password:
        <input type="text">
      </label>
      <button class="btnSubmit">Submit</button>
    </form>
    </section>
  </q-page>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
