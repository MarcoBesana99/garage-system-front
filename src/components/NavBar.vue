<template>
  <nav>
    <router-link class="mr-3" to="/">Home</router-link>
    <router-link class="mr-3" to="/login" v-if="!authenticated"
      >Login</router-link
    >
    <router-link class="mr-3" to="/register" v-if="!authenticated"
      >Register</router-link
    >
    <router-link to="/dashboard" v-if="authenticated">Dashboard</router-link>
    <span class="cursor-pointer" v-if="authenticated" @click="logout"
      >Logout</span
    >
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { api, authHeader } from "../apis/api";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      setAuthenticated: "auth/setAuthenticated",
      setToken: "auth/setToken",
    }),
    logout() {
      api.post("/auth/logout", null, {headers: authHeader()}).then((res) => {
        console.log(res);
        this.setAuthenticated(false);
        this.setToken("");
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>