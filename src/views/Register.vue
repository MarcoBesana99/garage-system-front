<template>
  <div>
    Register
    <form @submit.prevent="register">
      <input
        type="text"
        class="border border-gray-500"
        v-model="registerData.name"
      />
      <span v-if="registrationErrors && registrationErrors.errors.name">{{
        registrationErrors.errors.name[0]
      }}</span>
      <input
        type="text"
        class="border border-gray-500"
        v-model="registerData.email"
      />
      <span v-if="registrationErrors && registrationErrors.errors.email">{{
        registrationErrors.errors.email[0]
      }}</span>
      <input
        type="text"
        class="border border-gray-500"
        v-model="registerData.password"
      />
      <span v-if="registrationErrors && registrationErrors.errors.password">{{
        registrationErrors.errors.password[0]
      }}</span>

      <input
        type="text"
        class="border border-gray-500"
        v-model="registerData.password_confirmation"
      />
      <button type="submit" class="border border-gray-500">Register</button>
      <span v-if="registrationErrors && registrationErrors.message">{{
        registrationErrors.message
      }}</span>
    </form>
  </div>
</template>

<script>
import { api } from "../apis/api";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      registerData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      registrationErrors: "",
    };
  },
  methods: {
    ...mapActions({
      setAuthenticated: "auth/setAuthenticated",
      setToken: "auth/setToken",
    }),
    register() {
      api
        .post("/auth/register", this.registerData)
        .then((res) => {
          this.registrationErrors = "";
          this.setAuthenticated(true);
          this.setToken(res.data.access_token);
        })
        .catch((error) => {
          this.setAuthenticated(false);
          this.setToken("");
          this.registrationErrors = error.response.data;
          console.log("ERRRR:: ", error.response.data);
        });
    },
  },
};
</script>
