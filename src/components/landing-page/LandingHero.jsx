"use client";

import React from "react";
import DesktopLandingHero from "./DesktopLandingHero";
import TabLandingHero from "./TabLandingDesktop";
import MobileLandingHero from "./MobileLandingHero";


const LandingHero = () => {
  return (
    <>
    <DesktopLandingHero/>
    <TabLandingHero/>
    <MobileLandingHero/>
    </>
  );
};

export default LandingHero;
