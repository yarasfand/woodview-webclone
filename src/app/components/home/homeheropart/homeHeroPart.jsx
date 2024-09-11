"use client";

import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../controller/storefeatures/hooks";
import { scrolledTo } from "../../../controller/storefeatures/storeFeatures";
import "./homeheropart.css";
import ReactPlayer from "react-player";
import MegaScroll from "react-mega-scroll";
import Image from "next/image";

const HomeHeroPart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [IsFirstVideoContentVisible, setIsFirstVideoContentVisible] =
    useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  const plots = [
    { number: 1, length: 900, status: "SOLD OUT" },
    { number: 2, length: 890, price: "270.000" },
    { number: 3, length: 900, price: "360.000" },
    { number: 4, length: 900, price: "360.000" },
    { number: 5, length: 900, price: "360.000" },
    { number: 6, length: 900, price: "360.000" },
    { number: 7, length: 900, price: "360.000" },
    { number: 8, length: 900, price: "360.000" },
    { number: 9, length: 900, price: "360.000" },
    { number: 10, length: 900, price: "360.000" },
    { number: 11, length: 900, price: "360.000" },
  ];

  const scrollAbleLeftContent = [
    {
      title: "Schools",
      iconSrc: "/education-icon.svg",
      schools: [
        "St. John Catholic Elementary School",
        "St. Mark",
        "Public School",
        "Senator Gibson",
        "Beamsville",
        "Great Lakes Christian",
      ],
    },
    {
      title: "Parks",
      iconSrc: "/tree-icon.svg",
      schools: [
        "Bruce trail",
        "Angelina Macri Prokich park",
        "Niagara Escarpment",
        "Beamsville Lions",
      ],
    },
    {
      title: "Restaurants",
      iconSrc: "/tray-icon.svg",
      schools: [
        "August Restaurant",
        "Gigi’s Pizza House",
        "Conversations Cafe",
        "Beamsville Farmers Market",
        "Beamsville Town Centre",
      ],
    },
    {
      title: "Wineries",
      iconSrc: "/wine-icon.svg",
      schools: [
        "Peninsula Ridge Estates",
        "Rosewood Estates Winery",
        "Organized Crime Winery",
        "The Good Earth Food & Wine Co.",
        "Fielding Estate Winer",
      ],
    },
  ];

  useEffect(() => {
    // console.log("Scrolled to ", active)
    dispatch(scrolledTo(active));
  }, [active]);

  useEffect(() => {
    setIsMounted(true);

    const videoTimer = setTimeout(() => {
      setIsVideoVisible(false);
    }, 3400);

    const contentTimer = setTimeout(() => {
      setIsFirstVideoContentVisible(true);
    }, 3500);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section>
      {isVideoVisible ? (
        <div className="landingPageFirstVideoDiv">
          <ReactPlayer
            url="/landingpart/WoodView_Hero_0-1.mp4"
            playing={true}
            muted={true}
            className="landingPageFirstVideo"
          />
        </div>
      ) : (
        <div className="alternativeContentDiv">
          <MegaScroll
            onChange={setActive}
            threshold={0.01}
            className="megaScrollHeroPart"
          >
            <section className="landingPageFirstVideoContentContainer relative z-10">
              <div className="landingPageFirstVideoContentSubContainer ">
                <div className="landingPageFirstVideoContentSubSubContainer flex">
                  <div
                    className={`landingPageFirstVideoContentDiv ${
                      IsFirstVideoContentVisible ? "show" : ""
                    }`}
                  >
                    <div className="landingPageFirstVideoContentHeadingContainer">
                      <h1>THE PINNACLE OF HOMEBUILDING</h1>
                    </div>
                    <div className="landingPageFirstVideoContentDivDesc">
                      <p>
                        Our finest forest lots overlooking the rolling fields of
                        Wine Country will soon be graced by a one-of-a-kind
                        expression of the homebuilder’s art, crafted exclusively
                        for one discerning homeowner. Uncompromising, matchless
                        and entirely original. Your personal vision realized.
                      </p>
                    </div>
                    <div className="landingPageFirstVideoLocationInfoContainer">
                      <div className="landingPageFirstVideoLocationInfoSubContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="43"
                          height="43"
                          fill="none"
                        >
                          <g filter="url(#location_icon_svg__a)">
                            <rect
                              width="43"
                              height="43"
                              fill="#EBE4D0"
                              rx="21.5"
                            ></rect>
                            <g clipPath="url(#location_icon_svg__b)">
                              <path
                                fill="#681C3A"
                                d="M21 12a7.51 7.51 0 0 0-7.5 7.5c0 5.384 6.988 12.128 7.284 12.413a.31.31 0 0 0 .432 0c.296-.285 7.284-7.029 7.284-12.413A7.51 7.51 0 0 0 21 12Zm0 10.938a3.438 3.438 0 1 1 0-6.876 3.438 3.438 0 0 1 0 6.875Z"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="location_icon_svg__b">
                              <path fill="#fff" d="M11 12h20v20H11z"></path>
                            </clipPath>
                            <filter
                              id="location_icon_svg__a"
                              width="63"
                              height="63"
                              x="-10"
                              y="-10"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="5"
                              ></feGaussianBlur>
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_597_495"
                              ></feComposite>
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_597_495"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                        <h5>Canada, Toronto</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="landingPageSecondVideoContentContainer relative z-10">
              <div className="landingPageSecondVideoContentSubContainer">
                <h2 className="landingPageSecondVideoContentHeading">
                  Select your plot
                </h2>
                <div className="plotTableContainer">
                  <div className="plotTableHeadingContainer">
                    <h6>NAME</h6>
                    <h6>PLOT AREA, ft²</h6>
                    <h6>PRICE, USD</h6>
                  </div>

                  <div className="plotTablePlotsListContainer">
                    {plots.map((plot) => (
                      <PlotEntry
                        key={plot.number}
                        number={plot.number}
                        length={plot.length}
                        price={plot.price}
                        status={plot.status}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="plotsNumbersContainer">
                <div className="plotsNumbersSubContainer">
                  <div className="plotNumber1Container">
                    <div className="plotNumberBgContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="38"
                        fill="none"
                      >
                        <circle
                          cx="19.537"
                          cy="19"
                          r="18.172"
                          fill="#fff"
                          fill-opacity="0.8"
                          opacity="0.15"
                        ></circle>
                        <circle
                          cx="19.537"
                          cy="19"
                          r="13.474"
                          fill="#fff"
                          fill-opacity="0.8"
                          opacity="0.3"
                        ></circle>
                        <circle cx="19.537" cy="19" r="10" fill="#fff"></circle>
                      </svg>
                    </div>
                    <span className="plotNumberSpan">1 </span>
                  </div>
                </div>
              </div> */}
            </section>
            <section className="landingPageThirdSectionContainer relative z-10">
            <h2>Main amenities</h2>
              <div className="landingPageThirdSectionSubContainer">
                
                <div className="landingPageThirdSectionLeftContainer">
                  <div className="landingPageThirdSectionLeftTextContainer">
                    <h2 className="landingPageThirdSectionLeftContainerHeading">
                      Main amenities
                    </h2>
                  </div>

                  <div className="landingPageThirdSectionScrollContentContainer">
                    {scrollAbleLeftContent.map((section, index) => (
                      <ScrollAbleContent
                        key={index}
                        iconSrc={section.iconSrc}
                        title={section.title}
                        schools={section.schools}
                      />
                    ))}
                  </div>
                </div>

                <div className="landingPageThirdSectionRightImageContainer">
                  <div className="landingPageThirdSectionRightColouredImageMapDiv">
                    <Image
                      src="/coloured-map.avif"
                      alt="Colored Map"
                      width={800}
                      height={600}
                      quality={100}
                      className="landingPageThirdSectionRightColouredImageMap"
                    />
                  </div>
                </div>
              </div>
            </section>
          </MegaScroll>


          
        </div>
      )}
    </section>
  );
};

export { HomeHeroPart };

const PlotEntry = ({ number, length, price, status }) => {
  return (
    <div className="plotTablePlotsListSubContainer">
      <div className="plotTablePlotsSingleEntryContainer">
        <div className="plotTablePlotsSingleEntrySubContainer">
          <div className="plotTablePlotsSingleEntrySubSubContainer">
            <div className="plotTablePlotsSingleEntryNumber">
              {" "}
              <p>{number} </p>
            </div>
            <div className="plotTablePlotsSingleEntryLength">
              <p> {length} ft² </p>
            </div>
            {status ? (
              <div className="plotTablePlotsSingleEntryStatus">
                <div className="plotTablePlotsSingleEntryStatusDiv">
                  <p> {status}</p>
                </div>
              </div>
            ) : (
              <div className="plotTablePlotsSingleEntryPrice">
                <div className="plotTablePlotsSingleEntryPriceDiv">
                  <p> ${price} </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollAbleContent = ({ iconSrc, title, schools }) => {
  return (
    <div className="landingPageThirdSectionScrollingContentEntryContainer">
      <div>
        <img src={iconSrc} alt={`${title} icon`} />
      </div>
      <div className="landingPageThirdSectionScrollingEntryContent">
        <h4>{title}</h4>
        <ul>
          {schools.map((school, index) => (
            <li key={index}>{school}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
