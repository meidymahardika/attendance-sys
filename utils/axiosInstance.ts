import axios from 'axios'
// import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  maxBodyLength: 100 * 1024 * 1024,
})

// Interceptor request for check token)
api.interceptors.request.use((config) => {
  // const token = Cookies.get('token')
  // if (token) {
  // }
  // config.headers.Authorization = `Bearer ${token}`
  config.headers.Authorization = `Bearer ${`7|lxu8xIh3ZuEjXFzbkC47iynhcLbrDKmZcAIrH6Ck83429fba`}`
  return config
})

export default api
