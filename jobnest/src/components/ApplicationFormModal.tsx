import { useContext, useEffect, useRef } from "react";
import { JobContext } from "@/contexts/JobContext";
import { Button } from "./common/Button";

export default function ApplicationFormModal() {
  const {
    selectedJob,
    isApplicationModalOpen,
    setIsApplicationModalOpen,
  } = useContext(JobContext);

  const firstNameInputRef = useRef<HTMLInputElement>(null);

  // Handle modal close
  const handleClose = () => {
    setIsApplicationModalOpen(false);
    // setSelectedJob(job)
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    handleClose();
  };

  // Accessibility: Focus first input when modal opens
  useEffect(() => {
    if (isApplicationModalOpen && firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
  }, [isApplicationModalOpen]);

  if (!isApplicationModalOpen || !selectedJob) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-lg font-bold">
            Apply for {selectedJob.title} at {selectedJob.company}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close application form"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full grid grid-cols-2 gap-2">
          <input
            ref={firstNameInputRef}
            type="text"
            placeholder="First Name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
            aria-label="First Name"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Last Name"
          />
          </div>
         
         <div className="grid grid-cols-2 gap-2">
         <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Email Address"
          />
          <input
            type="phone"
            placeholder="phone"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
            aria-label="phone number"
          />
         </div>
          
          <Button
            btnStyle="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            btnText="Submit Application"
          />

          {/* <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Submit Application
          </button> */}
        </form>
      </div>
    </div>
  );
}
