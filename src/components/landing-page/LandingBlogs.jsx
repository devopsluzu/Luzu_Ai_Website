import React from 'react'
import Link from 'next/link'
import button from '@public/Images/landing/button.svg'
import Image from 'next/image'

const LandingBlogs = () => {
  return (
    <div className='landing-blog'>
        <div className='landing-blog-container'>
            <div className='landing-blog-heading'>
                <h3>Resources</h3> 
                <h2>Insights from AI Marketing Experts</h2>
            </div>
            <div className='landing-blog-contents'>
            <Link href='https://blog.prfec.ai/optimize-your-website-lets-explore-on-page-and-off-page-seo-together' className='landing-blog-box'>
                    <div className='landing-blogs-box-contents'>
                    <h5>SEO</h5>
                    <h4>Optimize Your Website: Let&apos;s explore on-page and off-page SEO together</h4>
                    <p>Search Engine Optimization is key to ranking, driving traffic, and building an online presence.</p>
                    </div>
                    <div className='landing-blogs-box-button'>
                        <Image src={button} alt='blog'/>
                    </div>
                </Link>
                <Link href='https://blog.prfec.ai/exploring-the-transformative-power-of-artificial-intelligence' className='landing-blog-box'>
                <div className='landing-blogs-box-contents'>
                    <h5>Artificial Intelligence</h5>
                    <h4>Exploring the Transformative Power of Artificial Intelligence</h4>
                    <p>Artificial Intelligence is a fast-evolving technology with the power to transform our world.</p>
                 </div>
                 <div className='landing-blogs-box-button'>
                 <Image src={button} alt='blog'/>
                 </div>
                </Link>
                <Link href='https://blog.prfec.ai/how-to-leverage-customer-segmentation-for-better-targeting' className='landing-blog-box'>
                <div className='landing-blogs-box-contents'>
                    <h5>SEO</h5>
                    <h4>How to Leverage Customer Segmentation for Better Targeting</h4>
                    <p>Let&apos;s explore how customer segmentation improves targeting, marketing, and customer relationships.</p>
                </div>
                <div className='landing-blogs-box-button'>
                <Image src={button} alt='blog'/>
                </div>
                </Link>      
            </div>
        </div>
    </div>
  )
}

export default LandingBlogs