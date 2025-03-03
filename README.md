# JobNest  
*A modern job board platform for seamless job searching and application.*  

## **Overview**  
JobNest is a responsive web app built for ALX Project Nexus (Frontend Development track). It allows users to:  
- Browse job listings dynamically fetched from an API.  
- Filter jobs by **category**, **location**, and **experience level**.  
- Submit applications via accessible forms.  
- View a polished, mobile-first interface.  

**Developed in 2 weeks** with collaboration with a backend partner from ALX BE prodev(Backend Devenlopment track) .  

## **Tech Stack**  
- **Frontend**:  
  ![Next.js](https://img.shields.io/badge/Next.js-13.5%2B-black?logo=next.js)  
  ![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?logo=typescript)  
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3%2B-%2306B6D4?logo=tailwind-css)  
  ![Context API](https://img.shields.io/badge/React_Context-18%2B-%2361DAFB?logo=react)  
- **Backend**: REST API (Mocked for initial development).  
- **Deployment**: Vercel  

## **Features**  
✅ Dynamic job listings with API integration  
✅ Advanced filtering (category, location)  
✅ Responsive design (mobile-first)  
✅ Accessible application forms  
✅ Loading states & error handling  

## **Installation**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/yuslove1/Project-nexus.git

   ```
2. Cd in the project directory:  
   ```bash  
   cd JobNest  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Run the development server:  
   ```bash  
   npm run dev  
   ```  

## **Configuration**  
1. **Environment Variables**:  
   Create a `.env.local` file:  
   ```  
   NEXT_PUBLIC_API_URL=http://localhost:3000/api/jobs  //Replace with your API 
   ```  
2. **Mock Data**:  
   Edit `src/mocks/jobs.ts` to add/update sample jobs.  

## **Deployment**  
Deploy to Vercel in 2 steps:  
```bash  
npm install -g vercel  
vercel deploy --prod  
```  

## **Collaboration**  
- **Frontend**: Yusuf Adesina  
- **Backend Partner**: ......  

## **Evaluation Criteria**  
- **Functionality**: API integration, filtering, responsive design.  
- **Code Quality**: TypeScript practices, component structure.  
- **UX**: Accessibility, performance, cross-device compatibility.  

## **License**  
MIT License
```  
