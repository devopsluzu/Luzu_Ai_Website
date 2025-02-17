'use client'
import React from 'react'
import Image from 'next/image'
import Logo from "@public/Images/landing/accordion/b-amazon.png"
import Clickup from '@public/Images/landing/accordion/b-clickup.png'
import Grphy from '@public/Images/landing/accordion/b-grphy.png'
import Hostinger from '@public/Images/landing/accordion/b-hostinger.png'
import Semrush from '@public/Images/landing/accordion/b-semrush.png'
import Shopify from '@public/Images/landing/accordion/b-shopify.png'
import Wati from '@public/Images/landing/accordion/b-wati.png'
const LandingLogo = () => {
  return (
    <div className='landing-logo flex flex-col gap-10'>
        <p className='text-[25px] font-semibold sm:text-center text-center' >Partnered with world’s Leading companies</p>
        <div className='landing-logo-container'>
            
            <div className='logo'>
            <div className='landing-partners-logo'>
                    {/* First set of logos */}
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
                <div className='landing-partners-logo'>
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
                <div className='landing-partners-logo'>
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default LandingLogo