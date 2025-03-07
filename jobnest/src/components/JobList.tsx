"use client";
import { JobContext } from "@/contexts/JobContext";
import JobCard from "./JobCard";
import LoadingSkeleton from "./common/LoadingSkeleton";
import ErrorMessage from "./common/ErrorMessage";
import { useContext } from "react";

export const JobList = () => {
  // Access jobs, loading, and error from JobContext
  const { jobs, loading, error } = useContext(JobContext);

  // Display error message if there's an error
  if (error) return <ErrorMessage message={error}  />;

  // Display loading skeleton while fetching data
  if (loading) return <LoadingSkeleton count={5} />;

  // Render the list of jobs
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};