import React from 'react'
import './css/hero.css'
import hero__wrapper from "./assets/images/hero__banner.png"
import user2 from "./assets/images/user2.png"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container__hero">
          <div className="hero__wrapper">
            <img className='hero__banner' src={hero__wrapper} alt="" />
            <div className='users__commit' >
              <h3 className='title__hero' >
                5 mind blowing facts about the iPhone 14
              </h3>
              <div className='user' >
                <img className='user__logo' src={user2} alt="" />
                <p className='user__desc' >
                  Farok Rastegar  .  1 hour ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero