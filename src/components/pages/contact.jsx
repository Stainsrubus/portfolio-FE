import React from "react";
import SectionTitle from "../sectionTitle";
import Footer from "./footer";
import Sidebar from "./sidebar";
import fileurl from "../utils/resource/StainsRubus_resume.pdf";
import { useSelector } from "react-redux";
function Contact() {
  const downloadFileATURL = (url) => {
    const fileName = url.split("/").pop();
    const file = document.createElement("a");
    file.href = url;
    file.setAttribute("download", fileName);
    document.body.appendChild(file);
    file.click();
    file.remove();
  };
const{loading, portfolioData}=useSelector((state)=>state.root);
const contact=portfolioData.contacts;
const { _id, ...user } = contact || {};
  return (
    <>
      <SectionTitle title="Say Hello!" />
      <div className=" sm:text-md  lg:px-16  sm:px-5 flex relative sm:flex-col  items-center justify-evenly text-lg">
        <div className="flex flex-col slide-in-left ">
          <p className="text-light_tertiary dark:text-dark_tertiary">{"{"} </p>
          {Object.keys(user).map((key) => (
            <p className="ml-16">
              <span className="text-light_secondary  dark:text-dark_secondary ">{key}:</span>
              <span className="text-light_secondary  dark:text-dark_secondary">{user[key]}</span>
            </p>
          ))}
          <p className="text-light_tertiary dark:text-dark_tertiary">{"}"} </p>
        </div>
        <div className="h-[400px] slide-in-right">
    <dotlottie-player src="https://lottie.host/b6b06638-8cee-4f25-93d5-5c4066b36dd2/ngCGoExzFR.json" background="transparent" speed="1" loop  autoplay></dotlottie-player>
        </div>
      </div>
      <div className="flex justify-center">
      <button
                  type="button"
                  onClick={() => {
                    downloadFileATURL(fileurl);
                  }}
                  className="relative  rounded-full cursor-pointer dark:text-dark_tertiary text-light_primary  dark:bg-dark_primary bg-dark_secondary"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only"></span>
                  <i className="fa-solid  fa-download text-xl w-6 h-6 "></i>{" "}
                
                <><hi className=" dark:text-dark_tertiary text-lg text-light_primary  ">Download Resume</hi>
                </>
                </button>
        </div>
      <Sidebar  />
      <Footer />
     
    </>
  );
}

export default Contact;


