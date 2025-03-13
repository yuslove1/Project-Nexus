import { useContext, useState } from "react";
import { Button } from "./common/Button";
import { JOBEXPERIENCE } from "@/constants/JobFilter";
import { FilterContext } from "@/contexts/FilterContext";
import { useRouter } from "next/router";

const Filter: React.FC = () => {
  const { filterLocations, filterCategories, setFilters } = useContext(FilterContext);
  // const { setFilters } = useContext(JobContext);

  const [formState, setFormState] = useState({
    jobTitle: "",
    location: "",
    category: "",
    experience: "",
  });

  const router = useRouter(); //nextjs router

  //handle filter submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   
    if (Object.values(formState).every((value) => value === "")) {
      return "filter form can not be empty";
    }

    e.preventDefault();
    setFilters({
      title: formState.jobTitle,
      location: formState.location,
      category: formState.category,
      experience: formState.experience,
    });
    //redirect to search result page
    router.push({ pathname: "search-result"});
  };

  const clearFilters = () => {
    setFormState({
      jobTitle: "",
      location: "",
      category: "",
      experience: "",
    });
    // setFilters({
    //   title: "",
    //   location: "",
    //   category: "",
    //   experience: "",
    // });
  };

  return (
    <div className="py-4 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center w-full max-w-6xl mx-auto mb-8 md:mb-12">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-xl">
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent tracking-tight leading-tight">
              Discover Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent inline-block mt-2 md:mt-4">
              Dream Career
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto mb-6 md:mb-8 px-4 opacity-90">
            Explore thousands of opportunities across top companies worldwide
          </p>
        </div>

        {/* Filter Form */}
        <div className="max-w-7xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
              {/* Job Title */}
              <div className="lg:col-span-2 col-span-5">
                <input
                  type="text"
                  id="jobTitle"
                  value={formState.jobTitle}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      jobTitle: e.target.value,
                    }))
                  }
                  placeholder="Job title or keywords"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="col-span-5 lg:col-span-3 grid-cols-3 gap-2 grid">
                {/* Location */}
                <div className="col-span-1">
                  <select
                    id="location"
                    value={formState.location}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    className="w-full py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">All Locations</option>
                    {/* map over the locations from gotten from context */}
                    {filterLocations?.map((location:string, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* category */}
                 <div className="col-span-1">
                  <select
                    id="category"
                    value={formState.category}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">All Categories</option>
                  
                    {filterCategories?.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div> 

                {/* Experience */}
                <div className="col-span-1">
                  <select
                    id="experience"
                    value={formState.experience}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        experience: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    {JOBEXPERIENCE.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="grid grid-cols-2 gap-2">
               
                
              </div> */}
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <button
                  className="w-full span-col-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200"
                  type="submit"> Search Jobs </button>
                {/* <Button
                  btnText="Search Jobs"
                  btnStyle="w-full span-col-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200"
                  type="submit"
                /> */}
              </div>

              <Button
                btnText="Clear Filters"
                btnStyle="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg transition-colors duration-200"
                onBtnClick={clearFilters}
              />
            </div>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 md:mt-12 flex justify-center gap-6 md:gap-12 text-white">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">50K+</div>
            <div className="text-sm md:text-base">Jobs Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">100+</div>
            <div className="text-sm md:text-base">Companies Hiring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;