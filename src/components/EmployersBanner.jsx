import React from "react";

const EmployersBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#27dadb] via-[#025481] to-[#031e5f] rounded-lg shadow-lg py-4 px-6 flex flex-col md:flex-row justify-between items-center mb-6 mx-3">
      {/* Title */}
      <div className="text-white font-semibold text-2xl md:text-3xl mb-2 md:mb-0 md:ml-10">
        EMPLOYERS
      </div>
      
      {/* Welcome Offer */}
      <div className="text-yellow-400 font-bold text-center text-sm md:text-base hidden md:block">
        WELCOME OFFER - FREE JOB Postings and Much More.
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex gap-2">
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-500 hover:text-white">
          Register for FREE
        </button>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100">
          Post A Job
        </button></div>
        <a
          href="#"
          className="text-white underline text-sm hover:text-blue-300 text-center"
        >
          Sales Enquiry
        </a>
      </div>
    </div>
  );
};

export default EmployersBanner;
