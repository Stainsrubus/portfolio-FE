import React from 'react';
import SectionTitle from "../sectionTitle";
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Courses() {
    const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const courses = portfolioData.courses || [];
    const { imgURL, title, skillsgained, period, certifiedby } = courses[selectedItemsIndex] || {};

    return (
        <div className='h-full'>
            <SectionTitle title="Courses" />
            <div className="lg:px-20 sm:px-5 flex pt-20 justify-center items-center gap-28 sm:flex-col  ">
                <div className="flex gap-12 flex-col slide-in-left border-solid border-y-0 border-r-0 border-l-4 border-[#ffd05a73] w-1/3 sm:flex-row sm:overflow-x-scroll sm:border-t-2 sm:border-x-0 sm:w-full rounded-lg">
                    {courses.map((courseItem, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedItemsIndex(index);
                            }}
                            className="cursor-pointer"
                        >
                            <h1
                                className={`text-xl px-5 py-5 sm:text-sm sm:mt-0 ${
                                    selectedItemsIndex === index
                                        ? "text-dark_primary border-solid border-y-0 border-r-0 border-l-4 -ml-1 sm:border-t-4 sm:border-x-0 border-[#ffd105ec] bg-[#f7d13840] shadow-lg shadow-yellow-400/50 rounded-lg"
                                        : "text-light_secondary dark:text-dark_secondary"
                                    }`}
                            >
                                {courseItem.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center sm:gap-2 slide-in-right ">
                    <div className='flex items-center '>
                        <div className='flex flex-col gap-16'>
                            <h1 className="text-light_secondary dark:text-dark_tertiary text-3xl sm:text-lg sm:text-center sm:-mt-10 text-center">{title}</h1>
                            <p className="text-light_secondary dark:text-dark_secondary text-md sm:text-sm text-center">Skills Gained: {skillsgained}</p>
                            <p className="text-light_secondary dark:text-dark_secondary  text-md sm:text-sm text-center">Period: {period}</p>
                            <p className="text-light_tertiary font-bold dark:text-dark_tertiary   text-xl sm:text-sm text-center">Certified By: {certifiedby}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
