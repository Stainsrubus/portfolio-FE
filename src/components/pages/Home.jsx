import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../loader";
import { Cursor, Typewriter } from "react-simple-typewriter";

function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const homesData = portfolioData?.homes;

  if (loading) {
    return <Loader />;
  }

  if (!homesData) {
    return <div>No home data available</div>;
  }

  const { welcomeText, firstName, lastName, caption, description, imgURL } =
    homesData;

  return (
    <>
     <div >
      <div className={`flex flex-row sm:flex-col  pt-48 sm:pt-20 h-[100%]  `}>
        <div className=" flex w-1/2 sm:w-full sm:justify-center   ">
            <div className=" flex flex-col pl-32 sm:pl-5 gap-10">
            <h1
            className={`text-light_primary sm:text-center dark:text-dark_primary sm:text-lg  slide-in-right`}
          >
            {welcomeText || ""}
          </h1>
          <h1
            className={`text-7xl sm:text-3xl sm:text-center text-outline-primary dark:text-dark_tertiary text-light_tertiary font-bold slide-in-left`}
          >
            {firstName || ""} {lastName || ""}
          </h1>
          <h1
            className={`text-light_tertiary sm:text-center dark:text-dark_tertiary sm:text-xl text-4xl slide-in-right`}
          >
            I'm a {}
            <span>
              <Typewriter
                words={description}
                loop
                typeSpeed={250}
                deleteSpeed={100}
              />
            </span>
            <span className="text-light_primary dark:text-dark_primary">
              <Cursor cursorStyle="[]" />
            </span>
          </h1>
          <p
            className={`w-2/3 sm:w-full sm:text-lg sm:text-center lg:text-3xl text-light_secondary dark:text-dark_secondary slide-in-left`}
          >
            {caption || ""}
          </p>
            </div>
        </div>
        <div className=" flex w-1/2 sm:w-full slide-in-right sm:justify-center">
          <div className=" w-[500px] h-[500px] sm:w-[300px]  ">
            <dotlottie-player
              src={imgURL}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
