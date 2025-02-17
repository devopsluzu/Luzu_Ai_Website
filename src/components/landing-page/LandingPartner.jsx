import React from "react";
import Image from "next/image";
import contentgeneration from "@public/Images/landing/accordion/contentgeneration.svg"
import keywordresearch from "@public/Images/landing/accordion/keywordresearch.svg"
import competitoranalysis from "@public/Images/landing/accordion/competitoranalysis.svg"


function AnalyticsStrategy() {
  return (
    <div className="flex justify-center item-center bg-[#F6F7FD] py-[90px] xl:py-[110px]">
      <div className="flex flex-col gap-[2.5rem] xl:w-[70%] lg:w-[85%] md:w-[85%] w-[90%]">
        <div className="flex flex-col gap-[1`rem]">
          <h1 className="text-black  md:text-center font-semibold font-firansans lg:text-[36px] lg:text-center text-center sm:w-[80%] lg:w-[100%] md:w-[100%] md:text-[40px] text-[32px]">
            Experience AI-Powered Marketing
          </h1>
          <p className="flex justify-center text-center text-[18px] leading-[200%] md:text-[18px] sm:w-[%] lg:text-[20px] md:w-[99%] lg:w-[99%]">
            Discover how over platform revolutionizes your marketing strategy
          </p>
        </div>
       

        <div className="lg:flex lg:flex-row flex justify-center lg:flex-wrap gap-[1.5rem] md:flex md:flex-row md:flex-wrap md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[2.5rem] sm:flex sm:flex-col flex flex-col ">
          <div className="rounded-[12px] bg-white border shadow-2xl flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[290px] p-6 border">
            <Image alt="" src={contentgeneration}/>
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
            Content Generation
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Automate repetitive tasks and focus on strategy with AI-powered workflows.
              </p>
            </div>
          </div>
          <div className="rounded-[12px] bg-white border shadow-2xl flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[290px] p-6 border">
            <Image alt="" src={keywordresearch} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
            Keyword Research            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Make data-driven decisions with advanced AI analytics and insights.
              </p>
            </div>
          </div>
          <div className="rounded-[12px] border shadow-2xl flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[290px] p-6 border">
            <Image alt="" src={competitoranalysis} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
            Competitor Analysys            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
              Deliver personalised experiences to every customer automatically.
              </p>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}

export default AnalyticsStrategy;
