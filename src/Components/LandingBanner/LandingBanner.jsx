import React from 'react'
import './LandingBanner.css'
import SampleChat from '../SampleChat/SampleChat'

const LandingBanner = () => {
  return (
    <div className='landing-banner'>
      <div className="landing-banner-left">
        <div className="tagline">
            <h1><span>Chatbot Care</span>: Instant Answers, Wellness Guidance, Always at Your Service.</h1>
        </div>
        <div className="tagline-info">
            <p>Our chatbot is your dedicated companion, ready to provide instant answers, guide you through symptom analysis, and offer personalized healthcare solutions.Your well-being is our priority, and our chatbot is here to empower your health journey with precision and care.</p>
        </div>
        <div className="start-btn">
            <a href='/signup'>Get started</a>
        </div>
      </div>
      <div className="landing-banner-right">
        <SampleChat />
      </div>
    </div>
  )
}

export default LandingBanner
