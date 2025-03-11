import { useContext, useEffect } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import { JobContext } from "@/contexts/JobContext"; // Import the JobContext
import { JobList } from "@/components/JobList";
import JobCard from "@/components/JobCard";
import HeadBadge from "@/components/Headbadge";

const SearchResult: React.FC = () => {
  const { filteredJobs, filters } = useContext(FilterContext);
  const { jobs } = useContext(JobContext);

  useEffect(() => {
    if (filters.category || filters.location || filters.experience) {
      filteredJobs();
    }
  }, [filters, filteredJobs]);

  return (
    <main>
      <HeadBadge />      
      <section>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
};
// const SearchResult: React.FC = () => {
//   const { filteredJobs } = useContext(FilterContext);
//   const { jobs } = useContext(JobContext);

//   useEffect(() => {
//     filteredJobs();
//   }, [filteredJobs]); // Will re-run when filters change

//   return (
//     <div>
//       <JobList>
//         {jobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </JobList>
//     </div>
//   );
// };

export default SearchResult;
