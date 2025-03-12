import React from 'react'
import Image from 'next/image'
import Aipowered from "@public/Images/landing/marketing/ai-powered.svg"
import Competitive from "@public/Images/landing/marketing/competitive.svg"
import Precision from "@public/Images/landing/marketing/precision.svg"
import Realtime from "@public/Images/landing/marketing/real-time.svg"



const LandingMarketingStratergy = () => {

    const LandingMarketingStratergyData = [
        {
            img:Aipowered,
            title:'AI-Powered Growth',
            desc:'Automate and optimize your digital marketing efforts with AI-driven tools.'
        },
        {
            img:Competitive,
            title:'Competitive Edge',
            desc:'Gain deep insights into competitor strategies to stay ahead in the market.'
        },
        {
            img:Precision,
            title:'Precision-Driven Marketing',
            desc:'Optimize SEO and PPC campaigns with data-backed recommendations.'
        },
        {
            img:Realtime,
            title:'Real-Time Analytics',
            desc:'Track and refine your marketing strategy with AI-powered insights.'
        },
    ];

  return (
    <div className='landing-marketing-s'>
        <div className='landing-marketing-s-container'>
            <div className='landing-marketing-s-heading'>
                <h2>Elevate Your Marketing Strategy</h2>
                <p>Unlock the full potential of digital marketing with AI-powered precision and data-driven insights</p>
            </div>
            <div className='landing-marketing-s-contents'>
                {LandingMarketingStratergyData.map((item,index)=>(
                <div className='landing-marketing-s-box' key={index}>
                    <Image src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default LandingMarketingStratergy