import React, { useState } from "react";
import GradientText from "./GradientText";

const Header = () => {
    return (
        <header className="bg-white shadow-2xl mb-4">
            <div className="flex justify-between items-center py-2 px-2 md:px-8">
                {/* Logo */}
                <div>
                    <img src="https://www.jobringer.com/images/logonew.svg" width={180} alt="jobringer" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <nav className="space-x-4">
                        {["Jobs", "Active Employers", "Job Blogs", "Pricing"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-900 font-semibold px-4 py-2 hover:text-white hover:bg-[#148dc9] transition-all duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="space-x-4">
                        <button className="text-black hover:bg-yellow-400 font-semibold px-4 py-2 rounded-xl border">
                            Jobseeker Login
                        </button>
                        <button className="bg-yellow-400 hover:bg-slate-700 hover:text-white font-semibold px-4 py-2 rounded-xl">
                            Employer Login
                        </button>
                    </div>
                </div>

                {/* Mobile Active Jobs */}
                <div className="md:hidden">
                    <GradientText />
                </div>
            </div>
        </header>
    );
};

export default Header;
