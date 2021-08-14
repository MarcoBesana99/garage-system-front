<template>
  <div>
    Login
    <form @submit.prevent="login">
      <input
        type="text"
        v-model="loginData.email"
        class="border border-gray-500"
      />
      <input
        type="text"
        v-model="loginData.password"
        class="border border-gray-500"
      />
      <button type="submit" class="border border-gray-500">Login</button>
    </form>
  </div>
</template>

<script>
import api from "../apis/api";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      setAuthenticated: "auth/setAuthenticated",
      setToken: "auth/setToken",
    }),
    login() {
      api
        .post("/auth/login", this.loginData)
        .then((res) => {
          console.log(res.data);
          this.setAuthenticated(true);
          this.setToken(res.data.access_token);
          //set to all next api calls the bearer token
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access_token}`;
        })
        .catch((error) => {
          this.setAuthenticated(false);
          this.setToken("");
          delete api.defaults.headers.common["Authorization"];
          console.log("ERRRR:: ", error.response.data);
        });
    },
  },
};
</script>
