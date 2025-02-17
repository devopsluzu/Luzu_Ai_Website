"use client";

import React from "react";
import mobilebg from "@public/Images/landing/accordion/mobilebg.svg"

const MobileLandingHero = () => {
  return (
    <div
      className="h-screen lg:hidden md:hidden flex flex-col gap-7 bg-cover bg-center"
      style={{ backgroundImage: `url(${mobilebg.src})` }}
    >
      <div className="pt-36 font-bold flex justify-center">
        <h1 className="text-center leading-[120%] text-black w-[100%] text-[30px]">
        Elevate your marketing power, even on the move.        </h1>
      </div>
      <div className="flex justify-center text-[21px]">
        <p className="w-[90%] text-center">
        Build your blog, analyse keywords, and monitor your analytics all in one place. Discover valuable insights into your marketing success.

        </p>
      </div>
      <div className="text-center">
      <input className="border border-black w-[90%] px-4 text-[18px] rounded-lg h-[59px] " type="email" placeholder=" Enter your email ID. Join beta" />
      <button className="mt-5 text-white text-[18px] bg-[#515CDA] border py-3 rounded-lg px-8">Get Started</button>
      </div>
    </div>
  );
};

export default MobileLandingHero;
