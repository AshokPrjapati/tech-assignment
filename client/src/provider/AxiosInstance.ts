import axios from "axios";

// Create an instance of axios
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Interceptor to add token to headers
axiosInstance.interceptors.request.use((config) => {
  const user = sessionStorage.getItem("user");
  const token = user ? JSON.parse(user)?.token : null;
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
