"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Job, JobContextType, FilterParams } from "@/types/job";
import { fetchJobs } from "@/services/api";
import { filterJobs } from "@/utils/filterJobs";

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({
    category: "",
    location: "",
    experience: "",
  });

  // Fetch jobs on initial load and filter changes
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Always fetch fresh data, let API decide filtering mode
        const data = await fetchJobs(filters);
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [filters]); // Re-fetch when filters change

  return (
    <JobContext.Provider value={{ jobs, loading, error, filters, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};