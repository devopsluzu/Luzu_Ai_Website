"use client"
import Link from "next/link";

import React, { useState } from "react";

const LandingNewsletter = () => {
 

  return (
    <div className="landing-newsletter">
      <div className="landing-newsletter-container">
        <h2>Ready to Transform Your Marketing ?</h2>
        <p>Join thousands of marketers who are already leveraging the power of AI</p>
        <div className="landing-newsletter-button">
          <Link href='https://app.prfec.ai/' className="landing-newsletter-trail">Start Free Trial</Link>
          <Link href='/contact-sales' className="landing-newsletter-demo">Schedule Demo</Link>
        </div>
      </div>

    </div>
  );
};

export default LandingNewsletter;
