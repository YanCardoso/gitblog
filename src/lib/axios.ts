import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/"
  // baseURL: "https://www.tabnews.com.br/api/v1"
})