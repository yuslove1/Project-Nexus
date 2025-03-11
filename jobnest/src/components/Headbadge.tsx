import React from "react";

const HeadBadge: React.FC = () => {
  return (
    <section className=" min-h-[20vh] bg-blue-200 flex justify-center items-center">
        <div className="min-full">
            <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent inline-block mt-2 md:mt-4">Your search</h1>
        </div>
    </section>
  );
};

export default HeadBadge;