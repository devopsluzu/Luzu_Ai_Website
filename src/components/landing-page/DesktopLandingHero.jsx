"use client";

import React from "react";
import herobg from "@public/Images/landing/accordion/herobg.svg";
import Link from "next/link";

const DesktopLandingHero = () => {
  return (
    <div
      className="h-screen md:hidden sm:hidden lg:block hidden flex flex-col gap-10 bg-cover bg-center"
      // style={{ backgroundImage: `url(${herobg.src})` }}
    >
      <div className="pt-[14rem]  font-bold flex justify-center">
        <h1 className="text-center leading-[120%] text-black w-[62%] text-[57px]">
        Elevate your marketing power, even on the move.        </h1>
      </div>
      <div className="pt-7 flex justify-center text-[21px]">
        <p className="w-[42%] text-center">
        Build your blog, analyse keywords, and monitor your analytics all in one place. Discover valuable insights into your marketing success.

        </p>
      </div>
      <div className="pt-7 flex justify-center gap-10">
      {/* <input className="border border-black w-[32%] px-4 text-[18px] rounded-lg h-[59px] " type="email" placeholder=" Enter your email ID. Join beta" /> */}
      <Link className="text-white text-[18px] bg-[#515CDA] border py-3 rounded-lg px-8" href= 'https://app.prfec.ai'>Get Started</Link>
      </div>
    </div>
  );
};

export default DesktopLandingHero;
