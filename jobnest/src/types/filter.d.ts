export interface FilterContextType {
    filterLocations: string[];
    filterCategories: Category[];
    setFilterLocations: (locations: string[]) => void;
    setFilterCategories: (categories: Category[]) => void;
    setFilters: (category: Category)
}

export interface Category {
    id: string;
    name: string;
    industry: string;
}