// import React from 'react'

// const LandingAiSolutions = () => {
//     const LandingAiSolutionsData = [
//         {
//             id:"SEO Optimization",
//             title: "Boost Your Search Rankings with AI",
//             desc: "AI-powered SEO tools to help you outrank competitors and drive organic traffic effortlessly.",
//             points: [
//                 "AI-Driven Keyword Research for high-ranking opportunities.",
//                 "Competitor SEO Analysis to uncover winning strategies.",
//                 "Content Optimization for better rankings.",
//                 "Real-Time SEO Insights to stay ahead."
//             ]
//         },
//         {
//             id:"Content Marketing",
//             title: "Create High-Performing Content at Scale",
//             desc: "Generate engaging, SEO-friendly content in seconds with AI.",
//             points: [
//                 "AI-Powered Blog & Ad Copywriting for all platforms.",
//                 "SEO-Optimized Content to boost rankings.",
//                 "Personalized Content Recommendations for better engagement.",
//                 "Instant Topic & Idea Suggestions to eliminate writer’s block."
//             ]
//         },
//         {
//             id:"Market Research",
//             title: "Gain Data-Driven Market Insights",
//             desc: "AI-powered analytics to track trends, competitors, and customer behavior.",
//             points: [
//                 "Competitor Benchmarking to refine strategies.",
//                 "Industry Trend Analysis for future-proof decisions.",
//                 "Customer Sentiment Tracking to understand audience needs.",
//                 "Real-Time Market Intelligence to stay competitive."
//             ]
//         },
//         {
//             id:"Advertising & Paid Campaigns",
//             title: "Maximize ROI with AI-Powered Advertising",
//             desc: "Automate and optimize ad performance for higher conversions.",
//             points: [
//                 "AI-Generated Ad Copy to drive engagement.",
//                 "Target Audience Optimization for precision marketing.",
//                 "Automated Budget Allocation for the best ROI.",
//                 "Real-Time Ad Performance Tracking for optimization."
//             ]
//         },
//         {
//             id:"Social Media Marketing",
//             title: "Engage & Grow with AI-Driven Social Media",
//             desc: "AI-powered content and analytics to boost social engagement.",
//             points: [
//                 "Automated Post & Caption Generation to save time.",
//                 "Best Posting Time Predictions for maximum reach.",
//                 "AI-Driven Social Analytics for performance tracking.",
//                 "Competitor Social Media Monitoring to stay ahead."
//             ]
//         },
//         {
//             id:"Agency Solutions",
//             title: "Scale Your Agency with AI-Powered Tools",
//             desc: "Manage multiple clients effortlessly with AI-driven automation.",
//             points: [
//                 "White-Label AI Tools for seamless client branding.",
//                 "Automated SEO & Ad Reports for data-backed decisions.",
//                 "Client-Specific Market Research to deliver better results.",
//                 "AI-Enhanced Workflow Automation for efficiency."
//             ]
//         }
//     ];
    
//   return (
//     <div className='landing-solutions'>
//         <div className='landing-solutions-container'>
//             <div className='landing-solutions-heading'>
//                 <h2>AI Solutions Tailored for Your Industry</h2>
//                 <p>Whether you're optimizing SEO, creating content, or running digital ads, Prfec AI empowers your marketing strategy with data-driven automation.</p>
//             </div>
//             <div className='landing-solutions-contents'>
//                 <div className='landing-solutions-dashboard'>
//                     <div className='landing-solutions-dashboard-title'></div>
//                 </div>
//                 <div className='landing-solutions-dashboard-title-contents'>
//                     <h3></h3>
//                     <p></p>
//                     <ul>
//                         <li></li>
//                     </ul>
//                     <button>Learn More</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LandingAiSolutions
'use client'
import React, { useState } from 'react';
import { TbPoint } from "react-icons/tb";


const LandingAiSolutions = () => {
    const LandingAiSolutionsData = [
        {
            id: "SEO Optimization",
            title: "Boost Your Search Rankings with AI",
            desc: "AI-powered SEO tools to help you outrank competitors and drive organic traffic effortlessly.",
            points: [
                "AI-Driven Keyword Research for high-ranking opportunities.",
                "Competitor SEO Analysis to uncover winning strategies.",
                "Content Optimization for better rankings.",
                "Real-Time SEO Insights to stay ahead."
            ]
        },
        {
            id: "Content Marketing",
            title: "Create High-Performing Content at Scale",
            desc: "Generate engaging, SEO-friendly content in seconds with AI.",
            points: [
                "AI-Powered Blog & Ad Copywriting for all platforms.",
                "SEO-Optimized Content to boost rankings.",
                "Personalized Content Recommendations for better engagement.",
                "Instant Topic & Idea Suggestions to eliminate writer’s block."
            ]
        },
        {
            id: "Market Research",
            title: "Gain Data-Driven Market Insights",
            desc: "AI-powered analytics to track trends, competitors, and customer behavior.",
            points: [
                "Competitor Benchmarking to refine strategies.",
                "Industry Trend Analysis for future-proof decisions.",
                "Customer Sentiment Tracking to understand audience needs.",
                "Real-Time Market Intelligence to stay competitive."
            ]
        },
        {
            id: "Advertising & Paid Campaigns",
            title: "Maximize ROI with AI-Powered Advertising",
            desc: "Automate and optimize ad performance for higher conversions.",
            points: [
                "AI-Generated Ad Copy to drive engagement.",
                "Target Audience Optimization for precision marketing.",
                "Automated Budget Allocation for the best ROI.",
                "Real-Time Ad Performance Tracking for optimization."
            ]
        },
        {
            id: "Social Media Marketing",
            title: "Engage & Grow with AI-Driven Social Media",
            desc: "AI-powered content and analytics to boost social engagement.",
            points: [
                "Automated Post & Caption Generation to save time.",
                "Best Posting Time Predictions for maximum reach.",
                "AI-Driven Social Analytics for performance tracking.",
                "Competitor Social Media Monitoring to stay ahead."
            ]
        },
        {
            id: "Agency Solutions",
            title: "Scale Your Agency with AI-Powered Tools",
            desc: "Manage multiple clients effortlessly with AI-driven automation.",
            points: [
                "White-Label AI Tools for seamless client branding.",
                "Automated SEO & Ad Reports for data-backed decisions.",
                "Client-Specific Market Research to deliver better results.",
                "AI-Enhanced Workflow Automation for efficiency."
            ]
        }
    ];

    const [selectedSolution, setSelectedSolution] = useState(LandingAiSolutionsData[0]); // Default selection

    return (
        <div className="landing-solutions">
            <div className="landing-solutions-container">
                <div className="landing-solutions-heading">
                    <h2>AI Solutions Tailored for Your Industry</h2>
                    <p>Whether you&apos;re optimizing SEO, creating content, or running digital ads, Prfec AI empowers your marketing strategy with data-driven automation.</p>
                </div>

                <div className="landing-solutions-contents">
                    {/* Sidebar with clickable IDs */}
                    <div className="landing-solutions-dashboard">
                        {LandingAiSolutionsData.map((solution) => (
                            <div 
                                key={solution.id} 
                                className={`landing-solutions-dashboard-title ${selectedSolution.id === solution.id ? "active" : ""}`}
                                onClick={() => setSelectedSolution(solution)}
                            >
                                {solution.id}
                            </div>
                        ))}
                    </div>

                    {/* Display selected solution details */}
                    <div className="landing-solutions-dashboard-title-contents">
                        <h3>{selectedSolution.title}</h3>
                        <p>{selectedSolution.desc}</p>
                        <ul>
                            {selectedSolution.points.map((point, index) => (
                                <div key={index} style={{display:"flex",gap:"0.5rem",alignItems:"center"}} >
                                    <TbPoint style={{color:"var(--p-black)",fontSize: "1rem", flexShrink: 0 }}/>
                                    <li>{point}</li>
                                </div>
                                
                            ))}
                        </ul>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingAiSolutions;
