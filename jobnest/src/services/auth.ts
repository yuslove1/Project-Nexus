import api from "./api";

export const authService = {
//login auth service
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login/", { email, password });
    return response.data;
  },

  //signup
  signup: async (email: string, password: string, name: string) => {
    const response = await api.post("/auth/signup/", {
      email,
      password,
      name,
      user_type: "job_seeker"
    });
    return response.data;
  },

  //refeesh
  refreshToken: async (refreshToken: string) => {
    const response = await api.post("/auth/refresh/", { refresh: refreshToken });
    return response.data.access;
  }
};