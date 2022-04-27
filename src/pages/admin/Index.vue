<template>
  <h3>You're logged in!</h3>
  <span id="datData"></span>
</template>

<script>
const api_url = "https://demo.inleague.io/api/public/authenticate";

async function getData() {
  const response = await fetch(api_url);
  const userData = await response.json();

  console.log(userData);
  document.getElementById("datData").textContent = userData;

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
