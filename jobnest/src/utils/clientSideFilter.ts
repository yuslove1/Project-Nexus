import { Job, FilterParams } from "@/types/job";

export const clientSideFilter = (jobs: Job[], filters: FilterParams): Job[] => {
  return jobs.filter(job => {
    const locationMatch = !filters.location || 
      job.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const experienceMatch = !filters.experience ||
      job.experience?.toLowerCase() === filters.experience.toLowerCase();

    return locationMatch && experienceMatch;
  });
};