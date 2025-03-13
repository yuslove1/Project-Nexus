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
  posted_at?: string;
  picture: string;
  is_active?: boolean; 
  experience?: "Entry" | "Mid" | "Senior";
}

export interface JobContextType {
  jobs: Job[];
  fetchJobs: () => Promise<void>;
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  fetchJobByCat: (id: string) => Promise<Job[]>; //
  selectedJob: Job | null;
  setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
  isApplicationModalOpen: boolean;
  setIsApplicationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  nextPage: () => void;
  prevPage: () => void;
}


export interface PaginationProps {
  count: number;
  next?: string | null;
  previous?: string | null;
}