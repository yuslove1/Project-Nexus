import React, { useContext } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import { JobContext } from "@/contexts/JobContext";
import { jobService } from "@/services/jobs";

// const CategoryFilter: React.FC = () => {
//   const { filterCategories } = useContext(FilterContext);
//   const { setLoading, setError, setJobs, setPagination } = useContext(JobContext);

  
//   const fetchJobByCat = useCallback(async (id: string) => {
//     try {
//         const pages =  1;
//       setLoading(true);
//       setError(null);
//       const data = await jobService.getCategoryJobs(id, pages);
//       setJobs(data.results);
//       setPagination({
//         count: data.count,
//         next: data.next,
//         previous: data.previous,
//       });
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "No job found");
//     } finally {
//       setLoading(false);
//     }
//   }, [setLoading, setError, setJobs, setPagination]);

//   useEffect(() => {
//     // No need to call fetchJobByCat here
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8 overflow-hidden">
//       <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap">
//         {filterCategories.map((category) => (
//           <div
//             key={category.name}
//             className="inline-block px-6 py-3 mx-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300"
//             onClick={() => fetchJobByCat(category.id)}
//           >
//             {category.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryFilter;



const CategoryFilter: React.FC = () => {
  const { filterCategories } = useContext(FilterContext);
  const { setLoading, setError, setJobs, setPagination } = useContext(JobContext);

  const handleCategoryClick = async (categoryId: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch first page of jobs for this category
      const data = await jobService.getCategoryJobs(categoryId, 1);
      
      // Update jobs state
      setJobs(data.results);
      
      // Update pagination
      setPagination({
        count: data.count,
        next: data.next,
        previous: data.previous,
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch category jobs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap">
        {filterCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="inline-block px-6 py-3 mx-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;