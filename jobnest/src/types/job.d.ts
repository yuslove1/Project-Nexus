export interface Job {
    id: string;
    title: string;
    description: string;
    experience: string;
    salary?: string;
    company: string;
    location: string;
    category: string;
    type?: string;
    createdAt: string;
    experience?: "Entry" | "Mid" | "Senior";
  }

  export interface FilterParams{
    category?: string; 
    location?: string; 
    experience?: string;
  }

  export type JobContextType = {
    jobs: Job[];
    loading: boolean;
    error: string | null;
    filters: FilterParams;
    setFilters: (filters: FilterParams) => void;
  };