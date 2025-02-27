"use client";

import Link from "next/link";
import React from "react";
// import tabbg from "@public/Images/landing/accordion/tabbg.svg"

const TabLandingHero = () => {
  return (
    <div
      className="h-screen lg:hidden sm:hidden md:block hidden  bg-cover bg-center p-[32px]"
      // style={{ backgroundImage: `url(${tabbg.src})` }}
    >
   
      <div className="pt-[160px]  font-bold flex justify-center">
        <h1 className="text-center leading-[120%] text-black w-[90%] text-[57px]">
        Elevate your marketing power, even on the move.        </h1>

      </div>
      <div className="pt-7 flex justify-center text-[21px]">
        <p className="w-[70%] text-center">
        Build your blog, analyse keywords, and monitor your analytics all in one place. Discover valuable insights into your marketing success.

        </p>
      </div>
      { <div className="pt-7 flex justify-center gap-10">
      <input className="border border-black w-[40%] px-4 text-[18px] rounded-lg h-[59px] " type="email" placeholder=" Enter your email ID. Join beta" />
      <Link className="text-white text-[18px] bg-[#515CDA] border py-3 rounded-lg px-8" href= 'https://app.prfec.ai'>Get Started</Link>
      </div> }
    </div>
  );
};

export default TabLandingHero;
