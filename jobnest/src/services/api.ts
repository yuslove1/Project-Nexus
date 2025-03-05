
import axios from "axios";
import { Job, FilterParams } from "@/types/job";
import { mockJobs } from "@/mocks/jobs";
import { filterJobs } from "@/utils/filterJobs";

// export const fetchJobs = async (filters?: FilterParams): Promise<Job[]> => {
//     try {
//         if(process.env.FILTER_MODE === "server"){
//             //Server-side filtering
//             const response = await axios.get<Job[]>("api/jobs", {params: filters});
//             return response.data;
//         } 
//         //Client-side filtering
//         await new Promise(resolve => setTimeout(resolve, 500)); //mock server delay time with 500ms
//         return filterJobs(mockJobs, filters || {});
//     }catch(error) {
//         throw new Error("Failed to fetch jobs");
//     }
// };



// type for error handling
type ApiError = {
    message: string;
    code?: number;
};

export const fetchJobs = async (filters?: FilterParams): Promise<Job[]> => {
    try {
        if (process.env.NEXT_PUBLIC_FILTER_MODE === "server") { //if the filtering is at the backen
            const response = await axios.get<Job[]>("/api/jobs", {
                params: filters, validateStatus: (status) => status < 500
            });

            if (response.status >= 400) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            return response.data;
        }

        // Client-side filtering
        await new Promise(resolve => setTimeout(resolve, 500)); //To mock the Api fetching delay of 500ms
        return filterJobs(mockJobs, filters || {});
        
    } catch (error) {
        let errorMessage = "Failed to fetch jobs";

        if (axios.isAxiosError(error)) {
            errorMessage = error.response?.data?.message || error.message;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }

        throw new Error(errorMessage);
    }
};