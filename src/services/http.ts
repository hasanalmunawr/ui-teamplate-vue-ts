import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8088/api',
  withCredentials: true // jika backend pakai session/cookie
})

export default http
