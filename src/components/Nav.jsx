import React from 'react'
import "./css/nav.css"
import logo from "./assets/images/logo.svg"
import avatar from "./assets/images/Avatar.png"
import arrow__down from './assets/images/arrow__down.svg'
import price from './assets/images/price.svg'
import bell from "./assets/images/bell.svg"

const Nav = () => {
  return (
    <>
      <nav>
            <div className="container__nav">
                <div className="nav__wrapper">
                    <img src={logo} alt="" />
                    <div className="nav__list" >
						<div className='user__wrapper' >
							<img className='user__logo' src={avatar} alt="" />
							<p className='user__name' >
								Bruce Lee
							</p>
							<img src={arrow__down} alt="" />
						</div>
						<div className='user__action' >
							<img src={price} alt="" />
							<img src={bell} alt="" />
						</div>
                    </div>
                </div>
            </div>
      </nav>
    </>
  )
}

export default Nav