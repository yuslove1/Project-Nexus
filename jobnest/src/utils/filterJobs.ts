import { Job, FilterParams } from "@/types/job";
// import { JOBCATEGORIES, JOBEXPERIENCE } from "@/constants/job";


// Filters jobs based on provided criteria
// @param jobs Array of job listings
// @param filters Filter parameters
// @returns Filtered array of jobs

//clent side filter logic
export const filterJobs = (jobs: Job[], filters: FilterParams): Job[] => {
  return jobs.filter(job => {
    const categoryMatch = !filters.category || job.category.toLowerCase() === filters.category.toLowerCase();
    const locationMatch = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const experienceMatch = !filters.experience || job.experience?.toLowerCase() === filters.experience.toLowerCase();

    return categoryMatch && locationMatch && experienceMatch;
  });
};