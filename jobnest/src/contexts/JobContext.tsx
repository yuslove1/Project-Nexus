"use client";
import { createContext, useState, useEffect, ReactNode, useCallback } from "react";
import { jobService } from "@/services/jobs";
import { Job, FilterParams, JobContextType, PaginationProps } from "@/types/job";

// Create a context for the job data
export const JobContext = createContext<JobContextType>({
  jobs: [],
  setJobs: () => {},
  fetchJob: () => {},
  fetchJobByCat: () => {},
  loading: false,
  error: null,
  selectedJob: null,
  setSelectedJob: () => {},
  isApplicationModalOpen: false,
  setIsApplicationModalOpen: () => {},
  pagination: { count: 0, next: null, previous: null },
  nextPage: async () => {},
  prevPage: async () => {},
});

// Create a provider for the job context
export const JobProvider = ({ children }: { children: ReactNode }) => {
  //Initialize the state variables in the context provider
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationProps>({count: 0,next: null,previous: null,});
  

  // Fetch jobs based on the filters
  const fetchJobs = useCallback(async (url?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await jobService.getJobs(url || '');
      setJobs(data.results);
      setPagination({
        count: data.count,
        next: data.next,
        previous: data.previous,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  }, []);


  //fetch job using base on category selected
    const fetchJobByCat = useCallback(async (id:string) => {
      try {
        setLoading(true);
        setError(null);
        const data = jobService.getCategoryJobs(id, 1);
        setJobs(data.results);
        setPagination({
          count: data.count,
          next: data.next,
          previous: data.previous,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "No job found");
      } finally {
        setLoading(false);
      }
    }, []);

  //fetch the next page of jobs
  const nextPage = useCallback(async () => {
    if (pagination.next) {
      await fetchJobs(pagination.next);
    }
  }, [pagination.next, fetchJobs]);

  //fetch the previous page of jobs if available
  const prevPage = useCallback(async () => {
    if (pagination.previous) {
      await fetchJobs(pagination.previous);
    }
  }, [pagination.previous, fetchJobs]); 

  // Fetch jobs on initial render
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs, fetchJobByCat]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        fetchJobs,
        loading,
        setLoading,
        error,
        setError,
        fetchJobByCat,
        // filters,
        // setFilters,
        selectedJob,
        setSelectedJob,
        isApplicationModalOpen,
        setIsApplicationModalOpen,
        pagination,
        setPagination,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};