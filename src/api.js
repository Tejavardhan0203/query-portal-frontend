import axios from 'axios'
const api = axios.create({ baseURL: import.meta.env.VITE_API || 'http://localhost:5000' })
//const api = axios.create({ baseURL: import.meta.env.VITE_API || 'https://query-backend-theta.vercel.app/' })
export default api
