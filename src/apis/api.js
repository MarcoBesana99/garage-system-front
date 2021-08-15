import axios from "axios"
import store from "../store/index"

let api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

function authHeader() {
  let token = store.getters['auth/token']
  if (token) {
    return { 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}

export { api, authHeader }