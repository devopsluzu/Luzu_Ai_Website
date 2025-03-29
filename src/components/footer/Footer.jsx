// import React from 'react'
// import '@styles/footer/Footer.css'
// import Image from 'next/image'
// import facebookWhite from '@public/Images/footer/facebook-white.png';
// import xWhite from '@public/Images/footer/x-white.png';
// import Instagram from '@public/Images/footer/instagram-white.png'
// import Linkedin from '@public/Images/footer/linkedin-white.png'


// export const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className='footer-container'>
//             <div className='footer-contents'>
//                 <p>Terms of Service</p>
//                 <p>Privacy Policy</p>
//                 <p>Cookie Policy</p>
//                 <p>Refund Policy</p>
//             </div>
//             <div className='footer-socials'>
//                 <Image src={facebookWhite}/>
//                 <Image src={xWhite}/>
//                 <Image src={Instagram}/>
//                 <Image src={Linkedin}/>
//             </div>
//         </div>
//     </div>
//   )
// }
'use client'
import React from 'react'
import '@styles/footer/Footer.css'
import Image from 'next/image'
import logo from '@public/Images/navbar/logo-white.png'
import facebookWhite from '@public/Images/footer/facebook-white.png';
import xWhite from '@public/Images/footer/x-white.png';
import Instagram from '@public/Images/footer/instagram-white.png'
import Linkedin from '@public/Images/footer/linkedin-white.png'

import Link from "next/link";


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='footer-left'>
            <div className='footer-contents'>
            <div className="footer-content-text"><Link href="/terms-of-service"> <p>Terms of Service</p> </Link></div>
            <div className="footer-content-text"><Link href="/privacy-policy"><p>Privacy Policy</p></Link></div>
            <div className="footer-content-text"><Link href="/cookie-policy"><p>Cookie Policy</p></Link></div>
            <div className="footer-content-text"><Link href="/refund-policy"><p>Refund Policy</p></Link></div>
            </div>
            <div className='footer-contents'>
            <Image src={logo} alt="luzu logo" style={{height:"20px",width:"auto"}} />
          </div>
          </div>
          <div className='footer-right'>
              <div className='footer-socials'>
                  <Image src={facebookWhite} alt='facebook'/>
                  <Image src={xWhite} alt='X'/>
                  <Image src={Instagram} alt='Instagram'/>
                  <Image src={Linkedin} alt='Linkedin'/>
              </div>
              <p>@copyright luzu.ai, 2025</p>

          </div>
        </div>
    </div>
  )
}
