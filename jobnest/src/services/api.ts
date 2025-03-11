import axios from "axios";

// Create an Axios instance with a base URL and default headers
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL from environment variables
  headers: { "Content-Type": "application/json" }, // Default headers
});

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add token to headers
  }
  return config;
});

export default api; // Export the configured Axios instance