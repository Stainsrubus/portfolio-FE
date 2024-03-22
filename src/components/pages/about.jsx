import React from "react";
import SectionTitle from "../sectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const about = portfolioData.abouts;
  const { description1, description2, skills, imgURL } = about || {};
  const skillsArray = typeof skills === "string" ? skills.split(",").map(skill => skill.trim()) : [];
  
  return (
    <>
      <div className="h-[100%]">
        <SectionTitle title={"About"} />
        <div className=" flex sm:flex-col flex-col sm:gap-48" >
        <div className="h-[50vh] lg:px-20 sm:px-5 flex sm:w-full  items-center lg:gap-2 sm:flex-col lg:ml-0 slide-in">
          <div className="lg:w-1/3 lg:h-[600px] md:w-1/2 sm:w-full sm:h-[400px] sm:pr-16 slide-in-left">
            <dotlottie-player src={imgURL} background="transparent" speed="0.3" autoplay></dotlottie-player>
          </div>
          <div className="lg:w-1/2 sm:w-full flex  lg:flex-col lg:gap-3 slide-in-right">
            <p className="text-light_secondary text-lg md:text-md sm:text-sm dark:text-dark_tertiary text-justify ">{description1}</p>
            <p className="text-light_secondary text-lg md:text-md sm:text-sm dark:text-dark_tertiary text-justify">{description2}</p>
          </div>
        </div>
        <div className="sm:pt-30 sm:pb-10 w-3/4 slide-in-bottom mx-5 ">
          <h1 className="text-light_primary sm:text-xl py-5 text-xl">Here are a few technologies I've been working recently:</h1>
          <div className="flex flex-wrap gap-6">
            {skillsArray.map((skill, index) => (
              <div key={index} className="border  border-solid border-dark_primary py-0.5 px-2 sm:py-0.5 sm:px-1 rounded-lg shadow-lg shadow-yellow-500/30 ">
                <h1 className="sm:text-sm text-lg px-2 py-1 text-light_dark_gray  dark:text-dark_secondary">{skill}</h1>
              </div>
            ))}
          </div>
        </div>
        </div>
       
        
      </div>
      
    </>
  );
}

export default About;
