<template>
<h3>{{ getUser.username }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'indexPage',
  computed: {
    ...mapGetters('auth', ['getMe'])
  }
}
</script>