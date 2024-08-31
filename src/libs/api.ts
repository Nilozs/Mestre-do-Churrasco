import axios from "axios"

// talvez aqui de erro
let token = null

if (typeof window !== "undefined") {
  token = localStorage.getItem("token")
}

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: token ? `Bearer ${token}` : ``,
  },
})
