import React from 'react'

const JobTags = () => {
    return (
        <div className="bg-[#51baba] rounded-lg md:w-1/2 py-6 px-4 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mx-3">
            {/* Quick Job Search */}
            <div>
                <div className="text-blue-900 text-center font-bold text-lg mb-2">
                    Quick Job Search <span className="inline-block"><i class="fas fa-search"></i></span>
                </div>
                <div className="flex flex-wrap justify-start gap-0">
                    {[
                        "#Fresher",
                        "#Work From Home",
                        "#WFH",
                        "#IT",
                        "#HR",
                        "#Back Office",
                        "#BPO Jobs",
                        "#ITES",
                        "#Finance",
                        "#Accounts",
                        "#Medical",
                        "#Pharma",
                        "#Manager",
                        "#Developer",
                        "#Marketing",
                        "#Engineering",
                        "#Non Government Jobs",
                    ].map((tag, index) => (
                        <span
                            key={index}
                            className="text-white px-1 py-1 text-md font-semibold "
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobTags
