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

export default api; 


// import axios from 'axios';

// const isDevelopment = process.env.NODE_ENV === 'development';
// const baseURL = isDevelopment ? 'http://localhost:3000/api' : process.env.NEXT_PUBLIC_API_URL;

// const api = axios.create({
//   baseURL,
//   headers: { 'Content-Type': 'application/json' },
// });

// if (isDevelopment) {
//   // In development mode, use mock API endpoints
//   api.interceptors.request.use((config) => {
//     // You can add logic here to intercept the request and modify it if needed
//     return config;
//   });
// } else {
//   // In production mode, include the authorization token
//   api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });
// }

// export default api;