import api from "./api";
import axios from "axios";
import { FilterParams } from "@/types/job";
import { clientSideFilter } from "@/utils/clientSideFilter";


export const jobService = {
      getJobs: async (url: string, filters: FilterParams) => {
        try {
          if (url) {
            const response = await axios.get(url);
            return response.data
          }
          const response = await api.get("/job");
          return response.data;
        } catch (error) {
          throw new Error("Failed to fetch jobs");
        }
      },
  
  getLocations: async (nextPage : number) => {
    if(nextPage) {
      const response = await api.get(`job/locations/?page=${nextPage}`)
      return response.data;
    }
  },

  getCategories: async (nextPage: number) => {
    if(nextPage) {
      const response = await api.get(`/category/?page=${nextPage}`)
      return response.data;
    }
  },

    getCategoryJobs: async (id, nextPage: number) => {
      try {
        const response = await api.get(`category/${id}/jobs/?page=${nextPage}`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch category jobs");
      }
  },
};
