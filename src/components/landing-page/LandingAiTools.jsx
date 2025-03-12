import React from 'react'
import content from '@public/Images/landing/tools/content-gen.svg';
import keyword from '@public/Images/landing/tools/keyword.svg';
import competitor from '@public/Images/landing/tools/competitor.svg';
import Image from 'next/image';
import Link from 'next/link';
const LandingAiTools = () => {
    const LandingAiToolsData=[
        {
            img:content,
            title:"Content Generation",
            heading:"Scale Your Content Effortlessly",
            para:"Generate high-quality, SEO-optimized content in seconds. Overcome writer's block and publish content that resonates."
        },
        {
            img:keyword,
            title:"Keyword Research",
            heading:"Uncover Your Audience's Intent",
            para:"Dive deep into search trends. Identify the exact phrases your customers use, and drive targeted traffic to your site."
        },
        {
            img:competitor,
            title:"Competitor Analysis",
            heading:"Outsmart the Competition",
            para:"Gain a strategic advantage. Analyze competitor strategies, identify market gaps, and make data-driven decisions."
        },
    ]
  return (
    <div className='landing-ai-tools'>
        <div className='landing-ai-tools-container'>
            <div className='landing-ai-tools-heading'>
                <h2>Revolutionize Your Marketing with AI-Powered Tools</h2>
            </div>
            <div className='landing-ai-tools-content'>
              {LandingAiToolsData.map((item,index)=>( 
                <div className='landing-ai-tools-box' key={index}>
                    <div className='landing-ai-tools-box-image'>
                        <Image src={item.img} alt={item.title} />
                    </div>
                    <div className='landing-ai-tools-box-contents'>
                        <div className='landing-ai-tools-box-heading'>
                            <h3>{item.title} </h3>
                            <h4>{item.heading} </h4>
                        </div>
                        <p>{item.para} </p>
                       <Link href='https://app.prfec.ai/'> <button>Start Free Trail</button></Link>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default LandingAiTools