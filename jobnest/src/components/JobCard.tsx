import { useContext } from "react";
import { JobContext } from "@/contexts/JobContext";
import { Job } from "@/types/job";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { Button } from "./common/Button";
import Image from 'next/image';

// Component props type definition
interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const { setSelectedJob, setIsApplicationModalOpen } = useContext(JobContext);

  const handleApply = () => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <header className="flex justify-between items-center gap-4 pb-2 border-b-2 border-gray-200">
        <div className="w-15 overflow-hidden h-15 bg-gray-100 rounded-full flex items-center justify-center">
          {job.picture ? (
            <img
              src={job.picture}
              alt={job.company}
              width={50}
              height={50}
              className="rounded-full"
            />
          )
         : (<span className="text-gray-500 text-xl font-bold">{job.company[0]}</span>)}
        </div>

        <div className="flex gap-1 h-8 items-center justify-center">
          {/* Conditional rendering for time ago */}
          {job.posted_at && (
            <div className="text-sm italic py-1 px-1 border rounded">
              {getTimeAgo(job.posted_at)}
            </div>
          )}

          {/* Status badge */}
          <span className={`px-2 py-1 border text-sm rounded ${
            job.is_active 
              ? "bg-emerald-100 text-emerald-600" 
              : "bg-red-100 text-red-600"
          }`}>
            {job.is_active ? "Active" : "Not-active"}
          </span>
        </div>
      </header>

      <div className="my-4">
        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>

        <p className="text-sm py-2 border-b-2 border-gray-200 text-gray-500">
          {job.description}
        </p>

        <div className="flex justify-between items-center py-3">
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">
              {job.location}
            </span>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-sm rounded">
              {job.experience || "Mid-level"}
            </span>
          </div>
          <Button
            btnStyle="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            btnText="Apply"
            onBtnClick={handleApply}
          />
        </div>
      </div>
    </div>
  );
}