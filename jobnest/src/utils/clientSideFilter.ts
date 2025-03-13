import { Job } from "@/types/job";
import { FilterParams } from "@/types/filter";

export const clientSideFilter = (jobs: Job[], filters: FilterParams): Job[] => {
  return jobs.filter((job) => {
    const locationMatch = !filters.location || 
      job.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const experienceMatch = !filters.experience ||
      job.experience?.toLowerCase() === filters.experience.toLowerCase();

    const titleMatch = !filters.title ||
      job.title.toLowerCase().includes(filters.title.toLowerCase());

    const categoryMatch = !filters.category ||
      job.category.toLowerCase() === filters.category.toLowerCase();

    return locationMatch && experienceMatch && titleMatch && categoryMatch;
  });
};


