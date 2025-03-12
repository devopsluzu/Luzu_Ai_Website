import React from 'react'
import { TbCheck } from "react-icons/tb";

const LandingTraditionalMarketing = () => {
    const LandingTraditionalMarketingData = [
        {
            title:"Traditional Marketing",
            heading:"The Time-Consuming Approach",
            para:"Relying on manual processes and delayed insights, traditional marketing often struggles to keep pace with the dynamic digital landscape.",
            points:[
                "8-12 hours per campaign.",
                "4+ days for quality articles.",
                "Weekly reports, delayed insights.",
                "Historical data, limited predictions."
            ]
        },
       { 
        title:"Prfec AI Marketing",
        heading:"The Accelerated Path to Success",
        para:"Leverage the power of AI to automate tasks, gain real-time insights, and achieve unprecedented marketing performance.",
        points:[
            "20 minutes per campaign.",
            "4 hours for quality articles.",
            "Real-time insights, predictive trends.",
            "Continuous optimization, data-driven forecasts."
        ]
        }

    ]
  return (
    <div className='landing-traditional'>
        <div className='landing-traditional-container'>
            <h2>The Evolution of Marketing</h2>
            <div className='landing-traditional-contents'>
              {LandingTraditionalMarketingData.map((item,index)=>(  
                <div className='landing-traditional-box' key={index}>
                    <div className='landing-traditional-box-heading'>
                        <h3>{item.title} </h3>
                        <h4>{item.heading} </h4>
                    </div>
                    <p>{item.para} </p>
                    <ul>
                      {item.points.map((point,pointIndex)=>( 
                        <div style={{display:"flex",gap:"0.5rem",alignItems:"center"}} key={pointIndex}>
                            <TbCheck style={{color:"var(--card-p-white)",fontSize: "1rem", flexShrink: 0 }}/>
                            <li>{point} </li>
                        </div>))} 
                    </ul>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default LandingTraditionalMarketing