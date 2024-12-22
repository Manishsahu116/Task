import React from "react";

const FooterNavigation = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden">
      <div className="flex justify-around py-2">
        <button className="flex flex-col items-center text-gray-600">
          <i className="fas fa-user"></i>
          <span className="text-xs">Login</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <i className="fas fa-home"></i>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <i className="fas fa-briefcase"></i>
          <span className="text-xs">Jobs</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <i className="fas fa-arrow-left"></i>
          <span className="text-xs">Back</span>
        </button>
      </div>
    </footer>
  );
};

export default FooterNavigation;