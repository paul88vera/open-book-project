<script>

const getData = () => {
  const userData = localStorage.getItem('userData');
  const p1 = document.getElementById("viewData");
  console.log(userData);
  p1.insertAdjacentHTML('afterend', `<p class="contain">${userData}</p>`);
}
 
export default {
  name: "indexPage"
};
</script>

<template>
  <h3 id="datData">You're logged in!</h3>
  <q-btn id="viewData" class=" text-dark bg-blue-grey-11" onclick="getData" label="View userData"></q-btn>
</template>

