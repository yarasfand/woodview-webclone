"use client";

import { notFound } from "next/navigation";
import { Suspense } from 'react';
import React, { useState, useEffect } from "react";
import { PlotsDisplay } from "../../components/plotsdisplay/PlotsDisplay"; 

export default function PlotsPage({ params }: { params: { plotno: string } }) {
  const [isBgVideosVisible, setIsBgVideosVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBgVideosVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const plotNumbers = [
    "plot-1",
    "plot-2",
    "plot-3",
    "plot-4",
    "plot-5",
    "plot-6",
    "plot-7",
  ] as const;

  const plotVideos: Record<(typeof plotNumbers)[number], string> = {
    "plot-1": "/plot-1/Plot1_S-0.mp4",
    "plot-2": "https://example.com/video2.mp4",
    "plot-3": "https://example.com/video3.mp4",
    "plot-4": "https://example.com/video4.mp4",
    "plot-5": "https://example.com/video5.mp4",
    "plot-6": "https://example.com/video6.mp4",
    "plot-7": "https://example.com/video7.mp4",
  };

  const plotExists = plotNumbers.includes(
    params.plotno as (typeof plotNumbers)[number]
  );

  if (!plotExists) {
    notFound();
  }

  const videoUrl = plotVideos[params.plotno as keyof typeof plotVideos];

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="w-screen h-screen">
        {/* Show video while isBgVideosVisible is true */}
        {isBgVideosVisible && (
          <video
            src={videoUrl}
            autoPlay
            muted
            className="w-full object-cover h-full"
          />
        )}

        {/* After the timeout, display the PlotsDisplay component */}
        {!isBgVideosVisible && <PlotsDisplay plotNumber={params.plotno} />}
      </div>
    </Suspense>
  );
}
