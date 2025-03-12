import React from 'react'
import Link from 'next/link'
const LandingEnterprise = () => {
  return (
    <div className='landing-enterprise'>
        <div className='landing-enterprise-container'>
            <div className='landing-enterprise-heading'>
                <h2>Enterprise AI Marketing Solutions</h2>
                <p>Custom AI marketing strategies designed for large-scale businesses</p>
            </div>
            <Link className='landing-enterprise-btn' href='/contact-sales'>Contact Sales</Link>
        </div>
    </div>
  )
}

export default LandingEnterprise