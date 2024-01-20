import axios from "axios";

export const api = axios.create({
    baseURL: "http://backend:3001",
    timeout: 6000
})