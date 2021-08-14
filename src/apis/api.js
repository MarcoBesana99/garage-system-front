import axios from "axios"

let api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export default api