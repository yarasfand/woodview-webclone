"use client";

import React, { useState, useEffect } from "react";
import { HomeHeroPart } from "../homeheropart/homeHeroPart";
import { HomeHeroBgVideos } from "../homeheropart/homeHeroBgVideos";

const HomeMain = () => {
  const [isBgVideosVisible, setIsBgVideosVisible] = useState(false);

  useEffect(() => {
    // Set a timer to update visibility state for HomeHeroBgVideos after 2000 milliseconds
    const timer = setTimeout(() => {
      setIsBgVideosVisible(true);
    }, 3300);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <HomeHeroPart />
      {isBgVideosVisible && <HomeHeroBgVideos />}
    </section>
  );
};

export { HomeMain };
