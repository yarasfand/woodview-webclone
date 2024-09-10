"use client";

import React, { useState, useEffect } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

import "./header.css";

const Header = () => {
  const [ShowHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const handleOpenMenu = () => {
    setMenuClass("mobile-menu-enter");
    setMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuClass("mobile-menu-exit");
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMenuClass("");
    }, 500);
  };

  useEffect(() => {
    // Show header after 3400 milliseconds
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 3400);

    // Cleanup timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className={`headerContainer ${ShowHeader ? "show" : ""}`}>
      {ShowHeader && (
        <>
          <img src={"/logo.svg"} className="headerImage" alt="Logo" />

          <button
            type="button"
            onClick={handleOpenMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mobileHeaderOpenContainer"
          >
            <div className="mobileHeaderOpenSubContainer">
              <Bars4Icon aria-hidden="true" className="mobile-menu-icon " />
            </div>
          </button>

          <div className="headerContentContainer">
            <ul className="headerContentContainerUl">
              <li>
                <div className="headerContentContainerLiDiv">
                  <a href="#Plots">Plots</a>
                </div>
              </li>
              <li>
                <div className="headerContentContainerLiDiv">
                  <a href="#Amenities">Amenities</a>
                </div>
              </li>
              <li>
                <div className="headerContentContainerLiDiv">
                  <a href="#Contact">Contact</a>
                </div>
              </li>
            </ul>

            <div className="headerContentButtonContainer">
              <button className="headerContentButton">Register Now</button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              className={`fixed top-0 right-0 bottom-0 left-0 bg-white z-50 h-screen transition-transform duration-100 ease-in-out ${menuClass}`}
            >
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="mobile-options-title px-2"
              >
                <div className="px-3 my-3">
                  <img
                    src={"/mobile-header-logo.svg"}
                    className="headerImage"
                    alt="Logo"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleCloseMenu}
                    className="p-2 text-gray-700"
                  >
                    <div className="menu-close-icon-container h-10 w-10">
                      <XMarkIcon
                        className="menu-close-icon h-12 w-10 font-bold"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Close mobile menu</span>
                    </div>
                  </button>
                </div>
              </div>

              <hr className="mobile-menu-line my-3 border-t-2 border-gray-200 mx-4" />

              <div className="mx-4">
                <a href="#" className="mobile-menu-options block my-3">
                  PLOTS
                </a>
                <hr className="mobile-menu-line my-1 border-t-2 border-gray-200" />
                <a href="#" className="mobile-menu-options block my-3">
                  AMENITIES
                </a>
                <hr className="mobile-menu-line my-1 border-t-2 border-gray-200 " />
                <a href="#" className="mobile-menu-options block my-3">
                  CONTACT
                </a>
                <hr className="mobile-menu-line my-1 border-t-2 border-gray-200 " />
              </div>

              <div className="mobile-menu-buttons  m-4">
                <button className="mobileMenuRegisterButtonContainer">
                  <span> REGISTER NOW</span>
                </button>

                <div className="mobileMenuButtonsIconsContainer">
                  <div className="mobile-menu-icons flex-none">
                    {" "}
                    {/* Adjust width as needed */}
                    <a
                      href="#"
                      className="mobile-menu-icons-a border-2 border-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />{" "}
                      </svg>
                    </a>
                  </div>
                  <div className="mobile-menu-icons flex-none w-16">
                    {" "}
                    {/* Adjust width as needed */}
                    <a
                      href="#"
                      className="mobile-menu-icons-a border-2 border-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export { Header };
