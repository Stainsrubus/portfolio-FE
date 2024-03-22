import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import fileurl from "../utils/resource/StainsRubus_resume.pdf";
import logo from "./resource/logo.png";
import logoLight from "./resource/lightmode_logo.png";
import useTheme from "../../hooks/useTheme";
import moon from "./resource/night-mode.png";
import sun from "./resource/brightness.png";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Education", href: "/education", current: false },
  { name: "Courses", href: "/courses", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const downloadFileATURL = (url) => {
    const fileName = url.split("/").pop();
    const file = document.createElement("a");
    file.href = url;
    file.setAttribute("download", fileName);
    document.body.appendChild(file);
    file.click();
    file.remove();
  };

  const [newTheme, setTheme] = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <Disclosure
        as="nav"
        className=" bg-light_primary dark:bg-[#0e0e0f] header  sm:h-16 sm:p-0 sm:m-0"
      >
        {({ open }) => (
          <>
            <div className="lg:mx-auto sm:pt-3  lg:px-6 sm:px-2 ">
              <div className="relative flex h-16 items-center  justify-between ">
                <div className="absolute inset-y-0  left-0 flex items-center  lg:hidden  sm:block">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative  inline-flex items-center justify-center rounded-md p-2 text-gray-950 sm:mt-3 hover:bg-gray-200 dark:bg-dark_primary dark:text-dark_tertiary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="sm:block h-2 w-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="sm:block h-2 w-2"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 no-underline sm:justify-evenly sm:ml-16 sm:mb-3 lg:items-stretch lg:justify-start justify-center">
                  <div className="flex flex-shrink-0  sm:items-center  sm:pl-20 justify-center items-center  sm:justify-center ">
                    <img
                      className="h-8 w-auto  "
                      src={newTheme === "light" ? logo : logoLight}
                      alt="logo"
                    />
                  </div>
                  <div className="flex sm:hidden  pt-1 lg:ml-6 lg:block ">
                    <div className="flex no-underline  space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          onClick={() => navigate(item.href)}
                          className={classNames(
                            "no-underline",
                            item.current
                              ? "hover:bg-dark_secondary  text-gray-950 dark:hover:bg-dark_primary dark:text-dark_secondary hover:dark:text-light_secondary  "
                              : "text-gray-800 dark:text-dark_secondary  dark:hover:bg-dark_primary  hover:bg-dark_secondary hover:dark:text-light_secondary",
                            "rounded-md px-1  py-3 font-bold text-md"
                          )}
                          aria-current={item.current ? "page " : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-2 lg:static  lg:inset-auto lg:ml-6 lg:pr-0 sm:mb-3">
                  <img
                    src={newTheme === "dark" ? moon : sun}
                    alt={newTheme === "dark" ? "dark" : "light"}
                    className="h-8 w-8 px-5 sm:h-6 sm:w-6"
                    onClick={() => setTheme(newTheme)}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      downloadFileATURL(fileurl);
                    }}
                    className="relative animate-bounce  rounded-full cursor-pointer dark:bg-dark_primary p-1 dark:text-gray-950 text-gray-900 dark:hover:text-dark_primary dark:hover:bg-dark_secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only"></span>
                    <i className="fa-solid  fa-download text-xl w-6 h-6 sm:text-sm sm:w-4 sm:h-4 "></i>{" "}
                  </button>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3  rounded-full ">
                    <div>
                      <Menu.Button className="relative dark:bg-dark_primary p-1 dark:text-gray-950 text-gray-900 dark:hover:text-dark_primary dark:hover:bg-dark_secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full   ">
                        <span className="absolute " />
                        <span className=" sr-only ">Open user menu</span>
                        <i className="fa-solid fa-link text-xl w-6 h-6 sm:text-sm sm:w-4 sm:h-4 "></i>{" "}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right  rounded-md dark:bg-gray-950  bg-dark_secondary py-1 shadow-lg ring-1 dark:ring-black ring-white ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() =>
                                window.open(
                                  "https://www.linkedin.com/in/stains-rubus/",
                                  "_blank"
                                )
                              }
                              className={classNames(
                                active
                                  ? "dark:bg-gray-600 bg-dark_primary no-underline"
                                  : "",
                                "  no-underline block px-4 py-2 text-sm dark:text-gray-100 text-gray-800"
                              )}
                            >
                              <>
                                <i className="fab fa-linkedin-in pr-3"></i>
                              </>{" "}
                              LinkedIn
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() =>
                                window.open(
                                  "https://github.com/Stainsrubus/",
                                  "_blank"
                                )
                              }
                              className={classNames(
                                active
                                  ? "dark:bg-gray-600 bg-dark_primary no-underline"
                                  : "",
                                " no-underline block px-4 py-2 text-sm dark:text-gray-100 text-gray-950 "
                              )}
                            >
                              <>
                                <i className="fab fa-github pr-3"></i>
                              </>{" "}
                              GitHub
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() =>
                                (window.location.href =
                                  "mailto:stainsrubus@gmail.com")
                              }
                              className={classNames(
                                active
                                  ? "dark:bg-gray-600 bg-dark_primary  no-underline"
                                  : "",
                                "block px-4 py-2 text-sm dark:text-gray-100 text-gray-900 no-underline"
                              )}
                            >
                              <>
                                <i className="fas fa-envelope pr-3"></i>
                              </>{" "}
                              Email
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className=" lg:hidden absolute sm:block  backdrop-blur bg-dark_secondary dark:bg-black/90 w-1/2 h-auto z-50">
              <div className="space-y-3 px-2 pb-3 pt-2  ">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    to={item.href}
                    onClick={() => navigate(item.href)}
                    className={classNames(
                      item.current
                        ? "hover:bg-dark_primary dark:bg-black/10 text-gray-950 dark:hover:bg-gray-700  dark:text-white w-full"
                        : "text-gray-800 dark:text-gray-300 dark:bg-black/10 dark:hover:bg-gray-700 hover:bg-dark_primary  w-full",
                      "block rounded-md px-3 py-2 text-base font-medium no-underline bg-light_primary"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}

                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
