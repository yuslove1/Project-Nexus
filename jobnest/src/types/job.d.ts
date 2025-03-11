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
  posted_at: string;
  picture: string;
  is_active?: boolean; 
  experience?: "Entry" | "Mid" | "Senior";
}

export interface FilterParams {
  title?: string;
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
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
  isApplicationModalOpen: boolean;
  setIsApplicationModalOpen: (isOpen: boolean) => void;
  pagination: PaginationProps;
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
};


export interface PaginationProps {
  count: number;
  next?: string | null;
  previous?: string | null;
}