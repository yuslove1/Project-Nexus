export interface FilterContextType {
    filterLocations: string[];
    filterCategories: Category[];
    setFilterLocations: (locations: string[]) => void;
    setFilterCategories: (categories: Category[]) => void;

}

export interface Category {
    id: string;
    name: string;
    industry: string;
}