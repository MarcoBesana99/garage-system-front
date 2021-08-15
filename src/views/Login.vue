<template>
  <div>
    Login
    <form @submit.prevent="login">
      <input
        type="text"
        v-model="loginData.email"
        class="border border-gray-500"
      />
      <span v-if="loginErrors && loginErrors.errors.email">{{
        loginErrors.errors.email[0]
      }}</span>
      <input
        type="text"
        v-model="loginData.password"
        class="border border-gray-500"
      />
      <span v-if="loginErrors && loginErrors.errors.password">{{
        loginErrors.errors.password[0]
      }}</span>
      <button type="submit" class="border border-gray-500">Login</button>
      <span v-if="loginErrors && loginErrors.message">{{
        loginErrors.message
      }}</span>
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
      loginErrors: "",
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
          this.loginErrors = "";
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
          this.loginErrors = error.response.data;
          console.log("ERRRR:: ", error.response.data);
        });
    },
  },
};
</script>
