"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { FilterContextType } from "@/types/filter";
import { FilterParams, Job } from "@/types/job";
import { jobService } from "@/services/jobs";
import { clientSideFilter } from "@/utils/clientSideFilter";
import { JobContext } from "./JobContext";

const FilterContext = createContext<FilterContextType>({
  filterLocations: [],
  filterCategories: { id: "", name: "", industry: "" },
  setLocations: () => {},
  setCategories: () => {},
  setSelectedLocation: () => {},
  setSelectedCategory: () => {},
  filteredJobs: () => [],
  jobs: [],
  setJobs: () => {},
});

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { jobs, setJobs } = useContext(JobContext); // Use JobContext's setJobs
  const [filterLocations, setFilterLocations] = useState<FilterContextType[]>([]);
  const [filterCategories, setFilterCategories] = useState<FilterContextType[]>([]);
  // const [jobs, setJobs] = useState<Job[]>([]);
  // const [nextPage, setNextPage] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({
    title: "",
    category: "",
    location: "",
    experience: "",
  });

  const fetchLocations = useCallback(async () => {
    try {
      let nextPage = 1;
      let data = await jobService.getLocations(nextPage);
      setFilterLocations(data.results);

      while (data.next !== null) {
        nextPage += 1;
        data = await jobService.getLocations(nextPage);
        setFilterLocations((prevData) => [...prevData, ...data.results]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      let nextPage = 1;
      let data = await jobService.getCategories(nextPage);
      setFilterCategories(data.results);

      while (data.next !== null) {
        nextPage += 1;
        data = await jobService.getCategories(nextPage);
        setFilterCategories((prevData) => [...prevData, ...data.results]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  //filter funvtionalities
  const filteredJobs = useCallback(async () => {
    try {
      let currentUrl: string;
      let allJobs: Job[] = [];
      let pageCount = 0;
      const MAX_PAGES = 5; // Prevent infinite loops
  
      // Determine initial endpoint
      currentUrl = filters.category 
        ? `/category/${filters.category}/jobs/`
        : "/job/";
  
      // Fetch pages until we get 10 filtered jobs or reach MAX_PAGES
      while (currentUrl && pageCount < MAX_PAGES) {
        const response = filters.category 
          ? await jobService.getCategoryJobs(currentUrl)
          : await jobService.getJobs(currentUrl);
  
        // Apply client-side filtering
        const filtered = clientSideFilter(response.results, filters);
        allJobs = [...allJobs, ...filtered];
  
        // Stop if we have enough results
        if (allJobs.length >= 10) {
          allJobs = allJobs.slice(0, 10);
          break;
        }
  
        // Move to next page
        currentUrl = response.next;
        pageCount++;
      }
  
      setJobs(allJobs);
    } catch (err) {
      console.error("Filter error:", err);
    }
  }, [filters, setJobs]);

  useEffect(() => {
    fetchLocations();
    fetchCategories();
  }, [fetchLocations, fetchCategories, filteredJobs]);

  return (
    <FilterContext.Provider
      value={{
        filterLocations,
        filterCategories,
        setFilterLocations,
        setFilterCategories,
        filteredJobs,
        jobs,
        setJobs,
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };