import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

//const apiUrl = "https://c503260c-4cf8-41ad-9f13-edf48f27b9f8-dev.e1-us-east-azure.choreoapis.dev/djangoreactproject/backend/v1";
const apiUrl = "choreo-apis/djangoreactproject/backend/v1"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
