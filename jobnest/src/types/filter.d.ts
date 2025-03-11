export interface FilterContextType {
    filter: Category;
    filterLocations: string[];
    filterCategories: Category[];
    setFilterLocations: (locations: string[]) => void;
    setFilterCategories: (categories: Category[]) => void;
    setFilters: (category: Category) => void;
   
}

export interface Category {
    jobTitle: string;
    id: string;
    name: string;
    location: string;
}