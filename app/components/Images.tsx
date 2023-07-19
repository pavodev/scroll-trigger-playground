"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Images.scss";
import Image from "next/image";

// Images
import img1 from "public/images/img1.jpg";
import img2 from "public/images/img2.jpg";
import img3 from "public/images/img3.jpg";
import img4 from "public/images/img4.jpg";
import img5 from "public/images/img5.jpg";
import img6 from "public/images/img6.jpg";
import img7 from "public/images/img7.jpg";
import img8 from "public/images/img8.jpg";
import img9 from "public/images/img9.jpg";

const Images = () => {
  const main = useRef<HTMLInputElement>(null);

  // Gsap animations
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      console.log("works");

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".img",
            start: "top 90%",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(".img", {
          stagger: 0.2,
          y: -200,
          scrub: true,
        });

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
    <div ref={main} className="gallery">
      {/* <h1 className="gallery__title fixed text-7xl font-extrabold">Siiick</h1> */}
      <section>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </section>
      <section>
        <Image className="img" width={0} height={0} alt="img1" src={img1} />
        <Image className="img" width={0} height={0} alt="img2" src={img2} />
        <Image className="img" width={0} height={0} alt="img3" src={img3} />
        <Image className="img" width={0} height={0} alt="img4" src={img4} />
        <Image className="img" width={0} height={0} alt="img5" src={img5} />
        <Image className="img" width={0} height={0} alt="img6" src={img6} />
        <Image className="img" width={0} height={0} alt="img7" src={img7} />
        <Image className="img" width={0} height={0} alt="img8" src={img8} />
        <Image className="img" width={0} height={0} alt="img9" src={img9} />
      </section>
    </div>
  );
};

export default Images;
