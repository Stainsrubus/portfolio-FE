import React from "react";
import SectionTitle from "../sectionTitle";
import { useSelector } from "react-redux";
import { useState } from "react";


function Projects() {
  const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);
  const{loading, portfolioData}=useSelector((state)=>state.root);
const project=portfolioData.projects;
const {title,description,technologies}=project|| {};
  return (
    <div className="h-[100vh]">
      <SectionTitle title="Projects" />
      <div className="lg:px-20  sm:px-5 flex py-20  sm:py-2 gap-28 sm:flex-col ">
        <div className="flex  flex-col   border-solid border-y-0 border-r-0 border-l-4 border-[#ffd05a73] w-1/3 sm:flex-row sm:overflow-x-scroll sm:border-t-2 sm:border-x-0  sm:w-full slide-in-left rounded-lg ">
          {project.map((projectItem, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemsIndex(index);
              }}
              className="cursor-pointer  "
            >
              <h1
                className={`text-xl px-5 py-5 sm:text-sm sm:mt-0 ${
                  selectedItemsIndex === index
                    ? "text-light_primary dark:text-dark_primary  border-solid border-y-0 border-r-0 border-l-4 -ml-1 sm:border-t-4 sm:border-x-0  border-[#ffd105ec] bg-[#f7d13840] shadow-lg shadow-yellow-400/50 rounded-lg"
                    : "text-light_secondary dark:text-dark_secondary"
                }`}
              >
                {projectItem.title}
              </h1>
            </div>
          ))}
        </div>
      
      <div className="flex flex-col gap-16 sm:gap-2 slide-in-right"> 
      <h1 className="text-light_secondary  dark:text-dark_tertiary text-3xl sm:text-lg sm:text-center sm:-mt-10 text-center"> {project[selectedItemsIndex].title}</h1>
        <p className="text-light_secondary dark:text-dark_secondary text-sm sm:text-sm text-center"> {project[selectedItemsIndex].description}</p>
        <p className="text-light_secondary dark:text-dark_tertiary text-sm sm:text-sm text-center"> Technologies Used : {project[selectedItemsIndex].technologies}</p>

      </div>
    </div>
    </div>
  );
}

export default Projects;
