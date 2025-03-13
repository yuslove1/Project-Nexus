"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import { Category, FilterContextType, FilterParams } from "@/types/filter";
import { Job } from "@/types/job";
import { jobService } from "@/services/jobs";
import { clientSideFilter } from "@/utils/clientSideFilter";
import { JobContext } from "./JobContext";

const FilterContext = createContext<FilterContextType>({
  filters: { title: "", category: "", experience: "", location: "" },
  filterLocations: [],
  filterCategories: [],
  setFilterLocations: () => {},
  setFilterCategories: () => {},
  setFilters: () => {},
  fetchFilteredJobs: () => {},
});

const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { setJobs, setLoading, setError, setPagination } = useContext(JobContext);
  const [filterLocations, setFilterLocations] = useState<string[]>([]);
  const [filterCategories, setFilterCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState<FilterParams>({
    title: "",
    category: "",
    location: "",
    experience: "",
  });
  const [accumulatedJobs, setAccumulatedJobs] = useState<Job[]>([]);
  const abortControllerRef = useRef<AbortController>(new AbortController());

  // Cache locations with expiry
  const fetchLocations = useCallback(async () => {
    try {
      const cachedData = localStorage.getItem("locationsData");
      const now = Date.now();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < CACHE_EXPIRY_MS) {
          setFilterLocations(data);
          return;
        }
      }

      let nextPage = 1;
      let allLocations: string[] = [];
      let data;

      do {
        data = await jobService.getLocations(nextPage, {
          signal: abortControllerRef.current.signal,
        });
        allLocations = [...allLocations, ...data.results];
        nextPage++;
      } while (data.next);

      setFilterLocations(allLocations);
      localStorage.setItem("locationsData", JSON.stringify({
        data: allLocations,
        timestamp: now,
      }));
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.error("Location fetch error:", err);
        const cached = localStorage.getItem("locationsData");
        if (cached) setFilterLocations(JSON.parse(cached).data);
      }
    }
  }, []);

  // Cache categories with expiry
  const fetchCategories = useCallback(async () => {
    try {
      const cachedData = localStorage.getItem("categoriesData");
      const now = Date.now();

      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < CACHE_EXPIRY_MS) {
          setFilterCategories(data);
          return;
        }
      }

      let nextPage = 1;
      let allCategories: Category[] = [];
      let data;

      do {
        data = await jobService.getCategories(nextPage, {
          signal: abortControllerRef.current.signal,
        });
        allCategories = [
          ...allCategories,
          ...data.results.map((item:Category, index: number) => ({
            ...item,
            key: `${item.id}-${index + allCategories.length}`,
          })),
        ];
        nextPage++;
      } while (data.next);

      setFilterCategories(allCategories);
      localStorage.setItem("categoriesData", JSON.stringify({
        data: allCategories,
        timestamp: now,
      }));
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.error("Category fetch error:", err);
        const cached = localStorage.getItem("categoriesData");
        if (cached) setFilterCategories(JSON.parse(cached).data);
      }
    }
  }, []);

  // Debounced job fetcher with proper cancellation
  const fetchFilteredJobs = useCallback(async () => {
    abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();
    
    try {
      setLoading(true);
      setError(null);
      setAccumulatedJobs([]);

      let nextUrl: string | null = null;
      let filteredJobs: Job[] = [];
      let pageCount = 0;
      const maxPages = 3;

      do {
        const data = await jobService.getJobs(nextUrl || undefined, {
          signal: abortControllerRef.current.signal,
        });

        setAccumulatedJobs(prev => {
          const newJobs = [...prev, ...data.results];
          filteredJobs = clientSideFilter(newJobs, filters);
          return newJobs;
        });

        setPagination({
          count: data.count,
          next: data.next,
          previous: data.previous,
        });

        nextUrl = data.next;
        pageCount++;

      } while (nextUrl && filteredJobs.length < 10 && pageCount < maxPages);

      // Final filter in case last page didn't reach 10
      const finalFiltered = clientSideFilter(accumulatedJobs, filters);
      setJobs(finalFiltered.slice(0, 10));

    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(err instanceof Error ? err.message : "Failed to fetch jobs");
      }
    } finally {
      setLoading(false);
    }
  }, [filters, setJobs, setLoading, setError, setPagination]);

  // Debounce filter changes
  useEffect(() => {
    const timeout = setTimeout(fetchFilteredJobs, 500);
    return () => {
      clearTimeout(timeout);
      abortControllerRef.current.abort();
    };
  }, [filters, fetchFilteredJobs]);

  // Initial data load
  useEffect(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetchLocations();
    fetchCategories();

    return () => controller.abort();
  }, [fetchLocations, fetchCategories]);

  return (
    <FilterContext.Provider
      value={{
        filterLocations,
        filterCategories,
        setFilterLocations,
        setFilterCategories,
        filters,
        setFilters,
        fetchFilteredJobs,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };