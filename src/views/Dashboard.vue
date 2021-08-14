<template>
  <div>
    Dashboard
    <div>{{ authenticated }}</div>
    <div>{{ token }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../apis/api";

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      token: "auth/token",
    }),
  },
  created() {
    if (this.authenticated && this.token != "") {
      api
        .get("/me")
        .then((res) => console.log(res));
    }
  },
};
</script>