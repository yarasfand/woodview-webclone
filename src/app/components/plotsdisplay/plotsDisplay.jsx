"use client";

import React, { useState, useRef } from "react";
import "./plotsdisplay.css";
import Link from "next/link";

const PlotsDisplay = ({ plotNumber }) => {
  const [selectedPlotView, setSelectedPlotView] = useState("imageUrl1");
  const previousPlotView = useRef(null);

  const plots = [
    {
      id: "plot-1",

      videos: {
        videoUrl0: "/plot-1/Plot1_0-0.mp4",
        videoUrl1_2: "/plot-1/Plot1_2.mp4",
        videoUrl2: "/plot-1/Plot2.mp4"}
      ,

      images: {
        imageUrl1: "/plot-1/plot1_ext1.jpg",
        imageUrl2: "/plot-1/plot1_ext2.jpg",
        imageUrl3: "/plot-1/plot1_ext3.jpg",
        imageUrl4: "/plot-1/plot1_ext4.jpg",
        imageUrl5: "/plot-1/plot1_ext5.jpg",
      },
      galleryImages: {
        galleryImage1: "/plot-1/plot1-gallery1.jpg",
        galleryImage2: "/plot-1/plot1-gallery2.jpg",
      },
      plot_details: {
        size: "900 м²",
        dueDate: "3Q/2023",
        price: "$360,000",
      },

      plot_details_secondPart: {
        plotWidth: "85 ft",
        plotLength: "60 ft",
        maxHouseWidth: "85 ft",
        maxHouseLength: "85 ft",
      },
      pdfUrl: "/pdfs/plot1-pdf.pdf",
    },
    { id: "plot-2", videoUrl: "https://www.example.com/video2.mp4" },
    { id: "plot-3", videoUrl: "https://www.example.com/video3.mp4" },
  ];

  const matchingPlot = plots.find((plot) => plot.id === plotNumber);
  const [selectedPlotVideo, setSelectedPlotVideo] = useState(matchingPlot?.videos.videoUrl0);


  const getFilenameFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const handleImageClick = (key) => {
    // Save the current selected image to previousPlotView
    previousPlotView.current = selectedPlotView;
  
    // Update the selected image
    setSelectedPlotView(key);
  
    // Check if the clicked image is imageUrl2
    if (key === "imageUrl2") {
      // Set videoUrl1_2 first
      setSelectedPlotVideo(matchingPlot?.videos.videoUrl1_2);
  
      // After 2 seconds, switch to videoUrl2
      setTimeout(() => {
        setSelectedPlotVideo(matchingPlot?.videos.videoUrl2);
      }, 2000); // 2000 ms = 2 seconds
    }
  
    console.log("Current Selected:", key);
    console.log("Previous Selected:", previousPlotView.current);
  };
  return (
    <section className="plotsDifferentViewsContainer relative h-full w-full">
      {matchingPlot ? (
        <div className="plotSectionMobileContainer">
          <div className="bgVideoContainer">
            {/* Video element */}
            <video
             src={selectedPlotVideo}
              autoPlay
              loop
              muted
              className="h-screen w-full object-cover"
            />

            {/* Content over the video */}
            <div className="plotDetailContainer">
              <div className="plotDetailSubContainer">
                <div className="plotDetailSubSubContainer">
                  <div className="plotDetailsContentContainer">
                    <Link href={"/"} className="plotDetailsBackContent">
                      <div className="plotDetailsBackArrow">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="plotDetailsBackText">
                        {" "}
                        <h5> Back to the list </h5>
                      </div>
                    </Link>

                    <div className="plotDetailsFirstPartContainer">
                      <h2>{plotNumber.replace("plot-", "")}</h2>
                      <div className="plotDetailsFirstPartSubDetailsContainer">
                        {matchingPlot.plot_details &&
                          Object.entries(matchingPlot.plot_details).map(
                            ([label, value]) => (
                              <div
                                className="plotDetailsFirstPartDeatils"
                                key={label}
                              >
                                <label>
                                  {label.charAt(0).toUpperCase() +
                                    label.slice(1).replace(/([A-Z])/g, " $1")}
                                </label>
                                <h3>{value}</h3>
                              </div>
                            )
                          )}
                      </div>
                    </div>

                    <div className="plotDetailsSecondPartContainer">
                      <div className="plotDetailsSecondPartSubDetailsContainer">
                        <div>
                          {" "}
                          <h6 className="plotDetailsSecondPartSubDetailsLeftHeading">
                            Plot Details
                          </h6>
                        </div>
                        <div className="plotDetailsSecondPartSubDetailsRightContainer">
                          {matchingPlot.plot_details_secondPart &&
                            Object.entries(
                              matchingPlot.plot_details_secondPart
                            ).map(([label, value]) => (
                              <div
                                className="plotDetailsSecondPartSubDetailsRightHeading"
                                key={label}
                              >
                                <label>
                                  {label
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                </label>
                                <h3>{value}</h3>
                              </div>
                            ))}
                        </div>
                      </div>

                      <Amenities />
                    </div>

                    <div className="plotDetailsThirdPartContainer">
                      <hr className="border border-gray-500 mb-5" />
                      <div className="plotDetailsThirdPartSubContainer">
                        <div className="plotDetailsThirdPartHeading">
                          <h6>Summary Offer</h6>
                          <a
                            href={matchingPlot.pdfUrl}
                            download={getFilenameFromUrl(matchingPlot.pdfUrl)}
                            className="downloadableFileAnchorTag"
                          >
                            <img src={"/paperclip.svg"} alt="paperclip-svg" />{" "}
                            Plot_Plan.pdf
                          </a>
                        </div>
                        <div>
                          <a className="plotDetailsThirdPartButtonContainer">
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="plotDetailsImagesDisplayContainer">
              <div className="plotDetailsImagesDisplaySubContainer">
                <div className="plotDetailsImagesDisplaySubSubContainer">
                  <div className="plotImagesDisplayContentContainer">
                    <h3>Plot Views</h3>

                    {Object.entries(matchingPlot.images).map(([key, url]) => (
                      <div
                        className="plotImagesDisplayContentEachImage"
                        key={key}
                        onClick={() => handleImageClick(key)} // Handle click to set selected image
                        style={{
                          border:
                            selectedPlotView === key
                              ? "2px solid #fff"
                              : "none", // Add border to selected image
                        }}
                      >
                        <img src={url} alt={key} />
                      </div>
                    ))}
                  </div>

                  <div className="plotImagesDisplayContentContainer plotImagesDisplayContentContainer2">
                    <h3>Gallery</h3>

                    <div className="plotImagesDisplayContentEachImage">
                      <img
                        src={matchingPlot.galleryImages.galleryImage1}
                        alt="plot1-gallery1"
                      />
                    </div>
                    <div className="plotImagesDisplayContentEachImage plotImagesDisplayContentEachGalleryImage2">
                      <img
                        src={matchingPlot.galleryImages.galleryImage2}
                        alt="plot1-gallery2"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button className="plotsCarouselLeftContainer">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="plotsCarouselRightContainer">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="plotImagesDisplayContentMainContainer">
            <div className="plotImagesDisplayContentContainer">
              {Object.entries(matchingPlot.images).map(([key]) => (
                <div
                  className="plotImagesDisplayContentEachImage"
                  key={key}
                  onClick={() => handleImageClick(key)} 
                  style={{
                    backgroundColor:
                      selectedPlotView === key
                        ? "#fff"
                        : "rgba(255, 255, 255, 0.3)", 
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="plotTableMobileContainer">
            <div className="plotTableMobileFirstSectionContainer">
              <h2>{plotNumber.replace("plot-", "")}</h2>

              <div className="plotTableMobileFirstSubSectionContainer">
                {matchingPlot.plot_details &&
                  Object.entries(matchingPlot.plot_details).map(
                    ([label, value]) => (
                      <div
                        className="plotTableMobileFirstSubSectionSubContainer"
                        key={label}
                      >
                        <label>
                          {label.charAt(0).toUpperCase() +
                            label.slice(1).replace(/([A-Z])/g, " $1")}
                        </label>
                        <h3>{value}</h3>
                      </div>
                    )
                  )}
              </div>
            </div>

            <div className="plotDetailsSecondPartContainer plotDetailsSecondPartContainerMobile">
              <div className="plotDetailsSecondPartSubDetailsContainer">
                <div>
                  {" "}
                  <h6 className="plotDetailsSecondPartSubDetailsLeftHeading">
                    Plot Details
                  </h6>
                </div>
                <div className="plotDetailsSecondPartSubDetailsRightContainer">
                  {matchingPlot.plot_details_secondPart &&
                    Object.entries(matchingPlot.plot_details_secondPart).map(
                      ([label, value]) => (
                        <div
                          className="plotDetailsSecondPartSubDetailsRightHeading"
                          key={label}
                        >
                          <label>
                            {label
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </label>
                          <h3>{value}</h3>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>

            <div className="plotDetailsThirdPartContainer plotDetailsThirdPartContainerMobile">
              <div className="plotDetailsThirdPartSubContainer">
                <div className="plotDetailsThirdPartHeading">
                  <h6>Summary Offer</h6>
                  <a
                    href={matchingPlot.pdfUrl}
                    download={getFilenameFromUrl(matchingPlot.pdfUrl)}
                    className="downloadableFileAnchorTag"
                  >
                    <img src={"/paperclip.svg"} alt="paperclip-svg" />{" "}
                    Plot_Plan.pdf
                  </a>
                </div>
                <div>
                  <a className="plotDetailsThirdPartButtonContainer">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No plot found with id: {plotNumber}</p>
      )}
    </section>
  );
};

export { PlotsDisplay };

const Amenities = () => {
  return (
    <div className="plotDetailsSecondPartSubDetailsContainer">
      <div>
        <h6 className="plotDetailsSecondPartSubDetailsLeftHeading">
          Amenities
        </h6>
      </div>
      <div className="plotDetailsSecondPartSubDetailsRightContainer">
        <div className="plotDetailsSecondPartSubDetailsRightHeading">
          <h6>
            <img src={"/electricity.svg"} alt="electricity-svg" /> Electricity
          </h6>
        </div>
        <div className="plotDetailsSecondPartSubDetailsRightHeading">
          <h6>
            <img src={"/water.svg"} alt="Potable-Water-svg" /> Potable Water
          </h6>
        </div>
        <div className="plotDetailsSecondPartSubDetailsRightHeading">
          <h6>
            <img src={"/wires.svg"} alt="wires-svg" /> Optical Fiber
          </h6>
        </div>
        <div className="plotDetailsSecondPartSubDetailsRightHeading">
          <h6>
            <img src={"/pipeline.svg"} alt="pipeline-svg" /> Sewers
          </h6>
        </div>
      </div>
    </div>
  );
};
