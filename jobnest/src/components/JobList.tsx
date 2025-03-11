"use client";
import { JobContext } from "@/contexts/JobContext";
import JobCard from "./JobCard";
import LoadingSkeleton from "./common/LoadingSkeleton";
import NoJobFound from "./common/NoJobFound";
import ErrorMessage from "./common/ErrorMessage";
import { useContext } from "react";
import { Button } from "./common/Button";
import { FilterContext } from "@/contexts/FilterContext";

export const JobList = () => {
  const { jobs, loading, error, pagination, nextPage, prevPage } = useContext(JobContext);
  const {filters} = useContext(FilterContext);
  

  // Check if any filters are active
  const isFilterActive = Boolean(
    filters.category || filters.location || filters.experience
  );
  // Calculate current page and total pages
  const itemsPerPage = 10; // 
  const totalPages = Math.ceil(pagination.count / itemsPerPage);
  const currentPage = pagination.next 
    ? parseInt(new URL(pagination.next).searchParams.get('page') || '1', 10) - 1
    : pagination.previous
      ? parseInt(new URL(pagination.previous).searchParams.get('page') || '1', 10) + 1
      : 1;

  if (error) return <ErrorMessage message={error} />;
  if (loading) return <LoadingSkeleton count={5} />;

  return (
    <div>
      { jobs.length > 0? 
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      }
      </div>
     : <NoJobFound />
     }
<div className="flex justify-between items-center mt-8 mx-2">
        <Button
          btnStyle={`px-4 py-2 rounded-md ${
            !isFilterActive && pagination.previous 
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          btnText="Previous"
          onBtnClick={prevPage}
          disabled={isFilterActive || !pagination.previous}
        />

        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          btnStyle={`px-4 py-2 rounded-md ${
            !isFilterActive && pagination.next 
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          btnText="Next"
          onBtnClick={nextPage}
          disabled={isFilterActive || !pagination.next}
        />
      </div>
    </div>
  );
};