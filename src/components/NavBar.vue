<template>
  <nav>
    <router-link class="mr-3" to="/">Home</router-link>
    <router-link class="mr-3" to="/login" v-if="!authenticated">Login</router-link>
    <router-link class="mr-3" to="/register" v-if="!authenticated">Register</router-link>
    <router-link to="/dashboard" v-if="authenticated">Dashboard</router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
}
</script>