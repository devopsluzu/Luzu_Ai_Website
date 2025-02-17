"use client"

import React, { useState } from "react";

const LandingNewsletter = () => {
 

  return (
    <div>
      <div className="pt-[200px] bg-[#6966FF] pb-[180px] md:p-24 md:pt-[140px] lg:pt-[100px] lg:pb-[100px]">
        <h1 className="text-white font-semibold font-firansans lg:text-[36px] md:text-[55px] text-center md:text-[40px] text-[36px]">
        Ready to Transform Your Marketing ?     </h1>
        <div className="justify-center flex">
          {" "}
          <p className="text-center text-white leading-[170%] md:text-[21px] lg:text-[20px] text-[18px] w-[60%] pt-[10px]">
          Join thousands of marketers who are already leveraging the power of AI    </p>    </div>

        <div className="md:flex justify-center sm:flex justify-center lg:flex justify-center pt-[2rem] lg:pb-[0] md:pb-[0] gap-6 text-center ">
          <button
            className="bg-white text-[#6966FF] md:text-[19px] lg:text-[18px] lg:px-6 md:px-6 px-12 py-3 rounded-[12px] transition"
           
          >
            Start Free Trial
          </button>
          <button
            className="bg-[#6966FF] border-white border mt-4 ml-2 md:text-[19px] lg:text-[18px] lg:ml-0 md:ml-0 sm:ml-0 lg:mt-[0] md:mt-[0] sm:mt-[0] text-white px-6 py-3 rounded-[12px] transition"
          
          >
            Schedule Demo
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default LandingNewsletter;
