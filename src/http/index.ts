import axios, { AxiosInstance} from 'axios'

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000"
    // baseURL: "https://dev-challenge.micheltlutz.me"
})

export default http