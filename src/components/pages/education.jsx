import React, { useState } from "react";
import SectionTitle from "../sectionTitle";
import { useSelector } from "react-redux";

function Education() {
  const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const studies = portfolioData.education || [];
  const { Education, Institute_Name, Year_of_Passing, Percentage, University, Stream ,imgURL} = studies[selectedItemsIndex] || {};

  const IsDegree = (education) => {
    return education && education.toLowerCase().includes("degree");
  };

  return (
    <div className="h-[100vh] ">
      <SectionTitle title="Education" />
      <div className="pt-12">
      <div className="lg:px-20 sm:px-5 flex py-10 sm:py-2 gap-32 sm:flex-col  ">
        <div className="flex gap-28 flex-col border-solid border-y-0 border-r-0 border-l-4 border-[#ffd05a73] w-1/3 sm:flex-row sm:overflow-x-scroll sm:border-t-2 sm:border-x-0 sm:w-full slide-in-left rounded-lg">
          {studies.map((studyItem, index) => (
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
                    ? "text-light_primary dark:text-dark_primary border-solid border-y-0 border-r-0 border-l-4 -ml-1 sm:border-t-4 sm:border-x-0 border-[#ffd105ec] bg-[#f7d13840] shadow-lg shadow-yellow-400/50 rounded-lg"
                    : "text-light_secondary dark:text-dark_secondary"
                }`}
              >
                {studyItem.Education}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-16 sm:gap-2 slide-in-right">
          <span className="flex-row flex justify-center items-center"> <img className="text-light_tertiary dark:text-dark_tertiary w-[60px] h-[60px]" src={imgURL} alt="school img" />
          <h1 className="text-light_secondary dark:text-dark_tertiary text-3xl sm:text-lg sm:text-center sm:-mt-10 text-center"> {Institute_Name}</h1></span>
         
          {IsDegree(Education) && (
            <>
              <p className="text-light_secondary dark:text-dark_secondary text-xl sm:text-sm text-center"> {University}</p>
              <p className="text-light_secondary dark:text-dark_secondary text-xl sm:text-sm text-center"> {Stream}</p>
            </>
          )}
          <p className=" text-light_secondary dark:text-dark_secondary text-xl sm:text-sm text-center">Year Of Passing : {Year_of_Passing}</p>
          <p className=" text-light_secondary dark:text-dark_secondary text-xl sm:text-sm text-center">Percentage : <span className="dark:text-white text-light-tertiary font-bold">{Percentage} </span> </p>
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Education;
