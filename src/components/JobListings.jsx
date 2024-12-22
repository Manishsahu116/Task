import React, { useRef } from "react";

const JobListings = () => {
  const jobs = [
    {
      title: "Senior QA Engineer",
      company: "Mirraw.com",
      type: "Full Time - Permanent",
      experience: "2 - 6 Years",
      location: "Mumbai (All Areas) / India",
      jobType: "In Office job",
    },
    {
      title: "Kinaxis Solutions Architect",
      company: "VySystems",
      type: "Full Time - Permanent",
      experience: "8 - 12 Years",
      location: "Texas / USA, United States of America",
      jobType: "Remote job",
    },
    {
      title: "Salesforce Developer",
      company: "NeerInfo Solutions",
      type: "Full Time",
      experience: "3 - 10 Years",
      location: "Houston / USA, United States of America",
      jobType: "Hybrid job",
    },
    {
      title: "Core Java Developer",
      company: "Infoplus Technologies UK Limited",
      type: "Full Time",
      experience: "5 - 9 Years",
      location: "The Hague / Netherlands Antilles",
      jobType: "In Office job",
    },
  ];

  const containerRef = useRef(null);

  // Scroll handler
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-4 mb-20 md:mb-5">
      <h2 className="text-2xl text-center font-bold text-blue-800 mb-6">
        Featured Jobs
      </h2>
      <div className="flex items-center space-x-2">
        {/* Left Arrow */}
        <button
          className="text-blue-800 text-4xl sm:text-6xl hover:scale-105 hidden sm:block"
          onClick={scrollLeft}
        >
          &#8249;
        </button>

        {/* Job Cards (Scrollable Container) */}
        <div
          ref={containerRef}
          className="flex md:justify-center gap-5 overflow-x-auto scrollbar-hidden w-full"
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 my-2 bg-white relative w-full sm:w-[90%] md:w-[300px] flex-shrink-0 flex flex-col"
            >
              {/* Job Type Badge */}
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-bl-2xl">
                {job.jobType}
              </div>

              {/* Job Details */}
              <div className="flex-grow">
                <h3 className="text-blue-800 font-bold text-lg mt-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{job.company}</p>

                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <span role="img" aria-label="Clock">🕒</span> {job.type}
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <span role="img" aria-label="Folder">📂</span> {job.experience}
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <span role="img" aria-label="Location">📍</span> {job.location}
                </p>
              </div>

              {/* Apply Button */}
              <button className="bg-[#8fe4e4] text-white font-semibold px-4 py-2 mt-2 rounded-md w-full hover:bg-[#3ac9c9]">
                Apply ➤
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="text-blue-800 text-4xl sm:text-6xl hover:scale-110 hidden sm:block"
          onClick={scrollRight}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default JobListings;