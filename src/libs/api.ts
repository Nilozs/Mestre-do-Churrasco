import axios from "axios"

// talvez aqui de erro
let token = null

if (typeof window !== "undefined") {
  token = localStorage.getItem("token")
}

export const api = axios.create({
  baseURL: "https://gochurrascos.onrender.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : ``,
  },
})
