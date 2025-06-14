import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1/users",
    withCredentials: true,
  
})

export const googleAuth = (code) => api.post("/google-auth", { code });
