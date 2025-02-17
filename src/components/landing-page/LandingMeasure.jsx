

import React from "react";
import Image from "next/image";
import ecommerce from "@public/Images/landing/accordion/ecommerce.svg"
import agency from "@public/Images/landing/accordion/agency.svg"
import education from "@public/Images/landing/accordion/education.svg"
import manufacturing from "@public/Images/landing/accordion/manufacturing.svg"
import research from "@public/Images/landing/accordion/research.svg"
import freelancing from "@public/Images/landing/accordion/freelancing.svg"


function LandingMeasure () {
  return (
    <div className="flex justify-center bg-[#F6F7FD] item-center py-[90px] xl:py-[110px]">
      <div className="flex flex-col gap-[2.5rem] xl:w-[70%] lg:w-[85%] md:w-[85%] w-[90%]">
        <div className="flex flex-col gap-[1`rem]">
          <h1 className="text-black  md:text-center font-semibold font-firansans lg:text-[50px] lg:text-center text-center sm:w-[80%] lg:w-[100%] md:w-[100%] md:text-[40px] text-[32px]">
            Who Choose Us
          </h1>
          <p className="text-center text-[18px] leading-[170%] md:text-[18px] lg:text-[20px] lg:text-center ">
         Customised marketing designed for your industry
          </p>
        </div>
       

        <div className="lg:flex lg:flex-row flex justify-center lg:flex-wrap gap-[1.5rem] md:flex md:flex-row md:flex-wrap md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[2.5rem] sm:flex sm:flex-col flex flex-col ">
          <div className="rounded-[12px] shadow-md shadow- hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 ">
            <Image className="" alt="" src={ecommerce} />
            <h1 className="lg:text-[20px] font-bold t-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              E-Commerce
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              E-commerce refers to the buying and selling of goods and services over the internet. It includes various business models, such as Business-to-Consumer, Business-to-Business, Consumer-to-Consumer.
              </p>
            </div>
          </div>
          <div className="rounded-[12px] shadow-md hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 border">
            <Image className="" alt="" src={agency} />
            <h1 className="lg:text-[20px] font-bold md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Agency
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              an agency refers to a company or organisation that provides specialised services to businesses, helping them promote their products or services.              </p>
            </div>
          </div>
          <div className="rounded-[12px] shadow-md hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 border">
            <Image className="" alt="" src={education}/>
            <h1 className="lg:text-[20px] font-bold md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Education
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Education is the process of 
              acquiring knowledge, skills, values, and understanding through teaching, learning, research, and practical experience.              </p>
            </div>
          </div>
          <div className="rounded-[12px] shadow-md hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 border">
            <Image className="" alt="" src={manufacturing} />
            <h1 className="lg:text-[20px] font-bold md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Manufacturing
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Manufacturing plays a key role in the economy by providing jobs, driving technological advancements, and supplying essential products across industries.</p>
            </div>
          </div>
          <div className="rounded-[12px] shadow-md hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 border">
            <Image className="" alt="" src={research} />
            <h1 className="lg:text-[20px] font-bold md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Research
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Research is the systematic process of investigating a topic to discover new information, gain deeper understanding, or solve problems.              </p>
            </div>
          </div>
          <div className="rounded-[12px] shadow-md hover:shadow-2xl hover:shadow-[#4F46E5] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[280px] p-6 border">
            <Image className="" alt="" src={freelancing} />
            <h1 className="lg:text-[20px] font-bold md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Freelancing
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Freelancing is a type of self-employment where individuals offer their skills and services to clients on a project or contract basis, rather than working as full-time employees for a single company.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingMeasure;
