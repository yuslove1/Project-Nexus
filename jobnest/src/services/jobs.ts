// import api from "./api";
// import axios from "axios";


// export const jobService = {
//       getJobs: async (url: string) => {
//         try {
//           if (url) {
//             const response = await axios.get(url);
//             return response.data
//           }
//           const response = await api.get("/job")
//           return response.data;
//         } catch (error) {
//           console.error(error)
//           throw new Error("Failed to fetch jobs");
//         }
//       },
  
//   getLocations: async (nextPage : number) => {
//     if(nextPage) {
//       const response = await api.get(`job/locations/?page=${nextPage}`)
//       return response.data;
//     }
//   },

//   getCategories: async (nextPage: number) => {
//     if(nextPage) {
//       const response = await api.get(`/category/?page=${nextPage}`)
//       return response.data;
//     }
//   },

//   getCategoryJobs: async (id: string, nextPage: number) => {
//     try {
//       console.log(id)
//       const response = await api.get(`/category/${id}/jobs/?page=${nextPage}`);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw new Error("Failed to fetch category jobs");
//     }
//   },
// };

import api from "./api";
import axios from "axios";

export const jobService = {
  getJobs: async (url?: string, options?: { signal?: AbortSignal }) => {
    try {
      const config = options?.signal ? { signal: options.signal } : {};
      const response = url 
        ? await axios.get(url, config)
        : await api.get("/job/", config);
      return response.data;
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Jobs fetch error:", error);
        throw new Error("Failed to fetch jobs");
      }
      return { results: [], next: null, previous: null, count: 0 };
    }
  },

  getLocations: async (nextPage: number, options?: { signal?: AbortSignal }) => {
    const response = await api.get(`job/locations/?page=${nextPage}`, {
      signal: options?.signal
    });
    return response.data;
  },

  getCategories: async (nextPage: number, options?: { signal?: AbortSignal }) => {
    const response = await api.get(`/category/?page=${nextPage}`, {
      signal: options?.signal
    });
    return response.data;
  },

  getCategoryJobs: async (id: string, nextPage: number, options?: { signal?: AbortSignal }) => {
    try {
      const response = await api.get(`/category/${id}/jobs/?page=${nextPage}`, {
        signal: options?.signal
      });
      return response.data;
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Category jobs error:", error);
        throw new Error("Failed to fetch category jobs");
      }
      return { results: [], next: null, previous: null, count: 0 };
    }
  },
};