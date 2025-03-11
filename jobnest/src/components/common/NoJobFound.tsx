import React from 'react';

const NoJobFound = () => {
  return (
    <div className="container flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold text-red-500 mb-4">No Jobs Found</h1>
      <p className="text-lg text-gray-600 text-center">Sorry, we could not find any jobs matching your search.</p>
    </div>
  );
};

export default NoJobFound;