"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import "./Card.css";

const Card = () => {
  const main = useRef<HTMLInputElement>(null);

  // Gsap animations
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      console.log("works");

      gsap.to(".animated-card", {
        x: 0,
        // duration: 2,
        scrollTrigger: {
          trigger: ".animated-card",
          start: "-50% center", // The first value is in relation to the element we are targeting, the second is relative to the scroller
          end: "bottom center",
          scrub: false, // If set to false, it plays after the first trigger and then detaches from the scroll
          markers: true, // Enable markers to understand the values defined above
          // toggleActions: "play reverse play reverse", // Works only when scrub is set to false.
        },
      });
    }, main); // <-- Scope!

    return () => ctx.revert(); // <-- Cleanup!
  }, []);

  return (
    <div ref={main}>
      <div className="animated-card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
