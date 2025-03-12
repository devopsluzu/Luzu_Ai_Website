"use client";

import React from "react";
import Link from "next/link";



const LandingHero = () => {
  return (
   <div className="landing-hero">
    <div className="landing-hero-container">
      <div className="landing-hero-heading">
        <h1>AI-Driven Marketing for Unmatched Performance</h1>
      </div>
      <div className="landing-hero-para">
        <p>Powerful AI tools to boost your SEO, content marketing, and advertising. Get insights, outperform competitors, and maximize ROI.</p>
      </div>
      <Link href='https://app.prfec.ai/' className="landing-hero-button">Get Started</Link>
    </div>
   </div>
  );
};

export default LandingHero;
