import LandingBanner from "../Components/LandingBanner/LandingBanner"
import Navbar from "../Components/Navbar/Navbar"

import React from 'react'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <LandingBanner />
    </div>
  )
}

export default LandingPage
