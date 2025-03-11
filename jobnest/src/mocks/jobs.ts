// src/mocks/jobs.ts
import { Job } from '@/types/job';

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer (React)",
    company: "Tech Innovators Inc",
    location: "Remote",
    category: "Engineering",
    experience: "Mid-Level",
    description: "Build responsive user interfaces using React and Next.js. Collaborate with product teams to deliver high-quality web applications.",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted_at: "2024-03-15"
  },
  {
    id: "2",
    title: "UX Designer",
    company: "Digital Creative Agency",
    location: "New York, NY",
    category: "Design",
    experience: "Senior",
    description: "Lead UX design for enterprise applications. Conduct user research and create wireframes/prototypes.",
    salary: "$95,000 - $130,000",
    type: "Contract",
    posted_at: "2024-03-14"
  },
  {
    id: "3",
    title: "Marketing Manager",
    company: "Startup Zone",
    location: "San Francisco, CA",
    category: "Marketing",
    experience: "Mid-Level",
    description: "Develop and execute digital marketing strategies. Manage social media campaigns and SEO optimization.",
    salary: "$75,000 - $90,000",
    type: "Full-time",
    posted_at: "2024-03-13"
  },
  {
    id: "4",
    title: "Backend Engineer (Node.js)",
    company: "Cloud Solutions Ltd",
    location: "Austin, TX",
    category: "Engineering",
    experience: "Senior",
    description: "Develop scalable backend services using Node.js and TypeScript. Implement RESTful APIs and database optimizations.",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted_at: "2024-03-12"
  },
  {
    id: "5",
    title: "Graphic Designer",
    company: "Creative Minds Studio",
    location: "London, UK",
    category: "Design",
    experience: "Entry-Level",
    description: "Create visual assets for digital campaigns. Proficiency in Adobe Creative Suite required.",
    salary: "£30,000 - £40,000",
    type: "Part-time",
    posted_at: "2024-03-11"
  },
  // Add more entries as needed
];

//Helper function to simulate API delay(optional)
export const fetchMockJobs = async (): Promise<Job[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  return mockJobs;
};