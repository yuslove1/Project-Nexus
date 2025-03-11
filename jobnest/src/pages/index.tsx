import React from "react";
import { JobList } from "@/components/JobList";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/categoryFilter";
import { FilterProvider } from "@/contexts/FilterContext";

export default function Home() {
  return (
    <div>
      <FilterProvider>
      <Hero />
      <CategoryFilter />
      <section className="container mx-auto py-6">
        <div className="px-4">
          <h2 className="lg:text-6xl text-3xl font-semibold mb-2">
            Explore Featured Jobs
          </h2>
          <p className="text-gray-500">Explore all Available Jobs and find your suitable Job</p>
        </div>

        <JobList />
      </section>
      </FilterProvider>
    </div>
  );
}
