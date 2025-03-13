import { useContext, useEffect } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import { JobContext } from "@/contexts/JobContext";
import JobCard from "@/components/JobCard";
import HeadBadge from "@/components/Headbadge";


// const SearchResult: React.FC = () => {
//   const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

//   useEffect(() => {
//     const storedJobs = localStorage.getItem('filteredJobs');
//     if (storedJobs) {
//       setFilteredJobs(JSON.parse(storedJobs));
//     } else {
//       // Fetch filtered jobs if not found in local storage
//       fetchFilteredJobs();
//     }
//   }, [fetchFilteredJobs]);

//   return (
//     <main>
//       <HeadBadge />      
//       <section className="container">
//         {filteredJobs.map((job: Job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </section>
//     </main>
//   );
// };
// export default SearchResult



const SearchResult: React.FC = () => {
  const { fetchFilteredJobs } = useContext(FilterContext);
  const { jobs } = useContext(JobContext);

  useEffect(() => {
    fetchFilteredJobs();
  }, [fetchFilteredJobs]);

  return (
    <main>
      <HeadBadge />      
      <section className="container mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
};

export default SearchResult;



