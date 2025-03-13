export interface FilterContextType {
    filters: FilterParams;
    filterLocations: string[];
    filterCategories: Category[];
    setFilterLocations: (locations: []) => void;
    setFilterCategories: (categories: Category[]) => void;
    setFilters: (category: FilterParams) => void;
    fetchFilteredJobs: () => Promise<void>;
}

interface Category {
    id: string;
    name: string;
    industry: string;
}

export interface FilterParams {
  title?: string;
  category?: string;
  location?: string;
  experience?: string;
}