import React from "react";
import JobTags from "./JobTags";

const QuickJobSearch = () => {
  return (
    <div className="md:flex">
    <div className="bg-[#51baba] rounded-lg md:w-1/2 py-6 px-4 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mx-3">
      {/* Left Section */}
      <div className="flex flex-col space-y-4 w-full">
        {/* Search Input */}
        <div className="flex w-full items-center space-x-2">
          <input
            type="text"
            placeholder="Search Jobs Now"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:ring-yellow-300"
          />
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-500">
            Search
          </button>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100">
            View Jobs
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-500">
            Register For FREE
          </button>
        </div>
      </div>
      </div>
      <JobTags />
      </div>
  );
};

export default QuickJobSearch;
