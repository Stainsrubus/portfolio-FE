import React from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const handleEmail = () => {
    window.location.href = "mailto:stainsrubus@gmail.com";
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/stains-rubus/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/Stainsrubus/", "_blank");
  };
  return (
    <>
      <div className="fixed left-5 bottom-20 sm:static sm:mb-10 sm:mt-10 slide-in-bottom">
        <div className="flex flex-col sm:flex-row items-center sm:justify-center   gap-4">
        <div className="w-[1px] sm:h-[0.5px] sm:w-20 h-52 dark:bg-dark_secondary bg-light_tertiary" />
          <div className="flex flex-col sm:flex-row text-tertiary gap-4">
            <div
              onClick={handleEmail}
              className="hover:text-light_gray text-light_primary dark:text-dark_primary cursor-pointer"
            >
              <i className="fas fa-envelope"></i>
            </div>
            <div
              onClick={handleLinkedIn}
              className="hover:text-light_gray text-light_primary  dark:text-dark_primary cursor-pointer"
            >
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div
              onClick={handleGitHub}
              className="hover:text-light_gray text-light_primary dark:text-dark_primary cursor-pointer"
            >
              <i className="fab fa-github"></i>
            </div>
          </div>
          <div className="w-[1px] sm:h-[0.5px] sm:w-20 h-52 dark:bg-dark_secondary  bg-light_tertiary" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
