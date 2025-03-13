// pages/api/jobs.ts
import { NextApiRequest, NextApiResponse } from "next";

const jobs = [
    {
        id: "1",
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Remote",
        category: "Engineering",
        experience: "Mid",
        description: "Build responsive user interfaces using React and Next.js.",
        "posted_at": "2025-03-04T18:26:00Z"
    },
    {
        id: "2",
        title: "UX Designer",
        company: "Creative Agency",
        location: "New York, NY",
        category: "Design",
        experience: "Senior",
        description: "Design user-friendly interfaces for web and mobile apps.",
    },
    {
        id: "3",
        title: "Marketing Manager",
        company: "Startup Zone",
        location: "San Francisco, CA",
        category: "Marketing",
        experience: "Entry",
        description: "Develop and execute digital marketing strategies.",
    },
    {
        id: "4",
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
        id: "5",
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
        id: "6",
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
        id: "7",
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
        id: "8",
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
    {
        "id": "9",
        "no_of_applicants": "35",
        "title": "Software Engineer",
        "company": "ABC Tech",
        "location": "San Francisco, CA",
        "wage": "80,000-100,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Flexible"
        },
        "experience_level": "mid",
        "description": "We are seeking an experienced software engineer to join our growing team. Responsibilities include developing new features, optimizing existing codebase, and collaborating with cross-functional teams.",
        "posted_at": "2022-05-15T10:30:00Z",
        "is_active": true,
        "responsibilities": {
            "designing_and_developing_software": "50%",
            "code_optimization": "30%",
            "team_collaboration": "20%"
        },
        "required_skills": {
            "programming_languages": [
                "Python",
                "JavaScript"
            ],
            "frameworks": [
                "React",
                "Django"
            ],
            "databases": [
                "PostgreSQL"
            ]
        },
        "picture": "http://example.com/software-engineer.jpg",
        "industry": "Technology",
        "category": "Engineering",
        "posted_by": "ABC Tech"
    },
    {
        "id": "10",
        "no_of_applicants": "19",
        "title": "Digital Marketing Specialist",
        "company": "XYZ Media",
        "location": "New York, NY",
        "wage": "45,000-55,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Remote"
        },
        "experience_level": "entry",
        "description": "We are looking for a talented digital marketing specialist to join our team. Responsibilities include managing social media campaigns, optimizing website content, and analyzing marketing data.",
        "posted_at": "2023-03-01T08:45:00Z",
        "is_active": true,
        "responsibilities": {
            "social_media_management": "40%",
            "content_optimization": "30%",
            "data_analysis": "30%"
        },
        "required_skills": {
            "digital_marketing_tools": [
                "Google Analytics",
                "Facebook Ads",
                "Hootsuite"
            ],
            "content_creation": [
                "Copywriting",
                "Graphic Design"
            ],
            "data_analysis": [
                "SQL",
                "Excel"
            ]
        },
        "picture": "http://example.com/digital-marketing-specialist.jpg",
        "industry": "Media",
        "category": "Marketing",
        "posted_by": "XYZ Media"
    },
    {
        "id": "11",
        "no_of_applicants": "12",
        "title": "Graphic Designer",
        "company": "Creative Studio",
        "location": "Seattle, WA",
        "wage": "35,000-45,000",
        "type": {
            "employment": "Part-time",
            "schedule": "Flexible"
        },
        "experience_level": "entry",
        "description": "We are seeking a creative and talented graphic designer to join our team. Responsibilities include designing marketing materials, creating branding assets, and collaborating with cross-functional teams.",
        "posted_at": "2022-11-20T14:00:00Z",
        "is_active": true,
        "responsibilities": {
            "marketing_material_design": "60%",
            "branding_asset_creation": "30%",
            "team_collaboration": "10%"
        },
        "required_skills": {
            "design_software": [
                "Adobe Creative Suite",
                "Figma"
            ],
            "design_principles": [
                "Color Theory",
                "Typography",
                "Layout"
            ],
            "client_communication": true
        },
        "picture": "http://example.com/graphic-designer.jpg",
        "industry": "Creative",
        "category": "Design",
        "posted_by": "Creative Studio"
    },
    {
        "id": "12",
        "no_of_applicants": "28",
        "title": "HR Coordinator",
        "company": "Acme Corp",
        "location": "Chicago, IL",
        "wage": "40,000-50,000",
        "type": {
            "employment": "Full-time",
            "schedule": "On-site"
        },
        "experience_level": "entry",
        "description": "We are looking for a detail-oriented HR Coordinator to join our growing team. Responsibilities include managing employee onboarding, processing payroll, and maintaining HR records.",
        "posted_at": "2023-02-10T11:15:00Z",
        "is_active": true,
        "responsibilities": {
            "employee_onboarding": "40%",
            "payroll_processing": "30%",
            "hr_record_maintenance": "30%"
        },
        "required_skills": {
            "hr_software": [
                "HRIS",
                "Payroll System"
            ],
            "attention_to_detail": true,
            "communication_skills": true
        },
        "picture": "http://example.com/hr-coordinator.jpg",
        "industry": "Business",
        "category": "Human Resources",
        "posted_by": "Acme Corp"
    },
    {
        "id": "13",
        "no_of_applicants": "42",
        "title": "Sales Representative",
        "company": "Enterprise Solutions",
        "location": "Miami, FL",
        "wage": "50,000-65,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Hybrid"
        },
        "experience_level": "mid",
        "description": "We are seeking an experienced sales representative to join our team. Responsibilities include generating leads, closing deals, and building long-term client relationships.",
        "posted_at": "2023-01-01T09:00:00Z",
        "is_active": true,
        "responsibilities": {
            "lead_generation": "40%",
            "sales_closing": "40%",
            "client_relationship_management": "20%"
        },
        "required_skills": {
            "sales_techniques": [
                "Consultative Selling",
                "Negotiation"
            ],
            "customer_service": true,
            "time_management": true
        },
        "picture": "http://example.com/sales-representative.jpg",
        "industry": "Business",
        "category": "Sales",
        "posted_by": "Enterprise Solutions"
    },
    {
        "id": "14",
        "no_of_applicants": "17",
        "title": "Data Analyst",
        "company": "Data Insights",
        "location": "Toronto, Canada",
        "wage": "60,000-75,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Remote"
        },
        "experience_level": "mid",
        "description": "We are looking for a skilled data analyst to join our team. Responsibilities include gathering and analyzing data, creating data visualizations, and providing insights to stakeholders.",
        "posted_at": "2022-09-01T13:30:00Z",
        "is_active": true,
        "responsibilities": {
            "data_gathering_and_analysis": "60%",
            "data_visualization": "30%",
            "providing_insights": "10%"
        },
        "required_skills": {
            "data_analysis_tools": [
                "SQL",
                "Python",
                "Tableau"
            ],
            "statistical_analysis": true,
            "communication_skills": true
        },
        "picture": "http://example.com/data-analyst.jpg",
        "industry": "Technology",
        "category": "Data",
        "posted_by": "Data Insights"
    },
    {
        "id": "15",
        "no_of_applicants": "9",
        "title": "Content Writer",
        "company": "Wordsmith Agency",
        "location": "London, UK",
        "wage": "35,000-45,000",
        "type": {
            "employment": "Part-time",
            "schedule": "Flexible"
        },
        "experience_level": "entry",
        "description": "We are seeking a talented content writer to join our creative team. Responsibilities include developing engaging blog posts, web copy, and social media content.",
        "posted_at": "2023-04-01T16:00:00Z",
        "is_active": true,
        "responsibilities": {
            "blog_post_writing": "50%",
            "web_copy_development": "30%",
            "social_media_content_creation": "20%"
        },
        "required_skills": {
            "writing_skills": [
                "Copywriting",
                "SEO-optimized Content"
            ],
            "research_skills": true,
            "creativity": true
        },
        "picture": "http://example.com/content-writer.jpg",
        "industry": "Media",
        "category": "Content",
        "posted_by": "Wordsmith Agency"
    },

    {
        "id": "16",
        "no_of_applicants": "22",
        "title": "Project Manager",
        "company": "Streamline Solutions",
        "location": "Sydney, Australia",
        "wage": "75,000-90,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Hybrid"
        },
        "experience_level": "senior",
        "description": "We are looking for an experienced project manager to lead our cross-functional teams. Responsibilities include managing project timelines, allocating resources, and ensuring successful project delivery.",
        "posted_at": "2022-07-15T15:00:00Z",
        "is_active": true,
        "responsibilities": {
            "project_planning_and_execution": "50%",
            "resource_allocation": "30%",
            "team_leadership": "20%"
        },
        "required_skills": {
            "project_management_tools": [
                "Jira",
                "Trello"
            ],
            "leadership_skills": true,
            "problem_solving": true
        },
        "picture": "http://example.com/project-manager.jpg",
        "industry": "Business",
        "category": "Management",
        "posted_by": "Streamline Solutions"
    },
    {
        "id": "17",
        "no_of_applicants": "14",
        "title": "UI/UX Designer",
        "company": "Digital Creatives",
        "location": "Berlin, Germany",
        "wage": "50,000-65,000",
        "type": {
            "employment": "Full-time",
            "schedule": "Remote"
        },
        "experience_level": "mid",
        "description": "We are seeking a skilled UI/UX designer to join our team. Responsibilities include designing user-friendly interfaces, conducting user research, and optimizing the user experience.",
        "posted_at": "2023-03-15T10:45:00Z",
        "is_active": true,
        "responsibilities": {
            "user_interface_design": "50%",
            "user_research": "30%",
            "user_experience_optimization": "20%"
        },
        "required_skills": {
            "design_tools": [
                "Figma",
                "Adobe XD"
            ],
            "user_centered_design": true,
            "prototyping": true
        },
        "picture": "http://example.com/ui-ux-designer.jpg",
        "industry": "Technology",
        "category": "Design",
        "posted_by": "Digital Creatives"
    },
    {
        "id": "18",
        "no_of_applicants": "32",
        "title": "Customer Service Representative",
        "company": "Acme Support",
        "location": "Vancouver, Canada",
        "wage": "35,000-45,000",
        "type": {
            "employment": "Full-time",
            "schedule": "On-site"
        },
        "experience_level": "entry",
        "description": "We are looking for a friendly and customer-oriented individual to join our customer service team. Responsibilities include handling customer inquiries, resolving issues, and providing excellent customer support.",
        "posted_at": "2023-02-20T14:30:00Z",
        "is_active": true,
        "responsibilities": {
            "customer_inquiry_handling": "60%",
            "issue_resolution": "30%",
            "customer_support": "10%"
        },
        "required_skills": {
            "communication_skills": true,
            "problem_solving": true,
            "customer_service_experience": true
        },
        "picture": "http://example.com/customer-service-representative.jpg",
        "industry": "Customer Service",
        "category": "Support",
        "posted_by": "Acme Support"
    }
];



const resultsPerPage = 10; // Number of results per page

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt(req.query.page as string) || 1; // Get the page number from the query parameter

  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = page * resultsPerPage;

  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / resultsPerPage);

  const results = jobs.slice(startIndex, endIndex);

  const basePath = "/api/jobs"; // Base path for the API endpoint
  const nextUrl = page < totalPages ? `${basePath}?page=${page + 1}` : null;
  const prevUrl = page > 1 ? `${basePath}?page=${page - 1}` : null;

  const response = {
    count: totalJobs,
    results,
    next: nextUrl,
    previous: prevUrl
  };

  setTimeout(() => {
    res.status(200).json(response);
  }, 500); // 500ms delay
}