

<template>
  <h3>You're logged in!</h3>
  <span id="datData"></span>
</template>

<script>

async function getData() {
  const response = localStorage.getItem('userData', userData);
  let data = response;
  document.getElementById("datData").textContent = data;

}

getData();

import { mapGetters } from "vuex";
export default {
  name: "indexPage",
  computed: {
    ...mapGetters("auth", ["getMe"]),
  },
};
</script>
