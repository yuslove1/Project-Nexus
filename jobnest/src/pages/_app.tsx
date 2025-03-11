import { JobProvider } from "@/contexts/JobContext";
import { FilterProvider } from "@/contexts/FilterContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import ApplicationFormModal from "@/components/ApplicationFormModal";
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
     <JobProvider>
      <FilterProvider>
      <Layout>
       <Component {...pageProps} />;

       <ApplicationFormModal />
    </Layout>
    </FilterProvider>
    </JobProvider>
  )
}