import React from 'react'
import "./css/reset.css"
import "./css/footer.css"
import icon from "./assets/images/Icon.png"
import minimaze__logo from "./assets/images/minimaze__logo.svg"
import facebook from "./assets/images/facebook.svg"
import instagramm from "./assets/images/instagramm.svg"
import twitter from "./assets/images/twitter.svg"
import behance from "./assets/images/behance.svg"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container__footer">
                <div className="footer__wrapper">
                    <ul className='footer__list' >
                        <li>
                            <a href="#">First Column</a>
                        </li>
                        <li>
                            <a href="#">Link One</a>
                        </li>
                        <li>
                            <a href="#">Link Two</a>
                        </li>
                        <li>
                            <a href="#">Link Three</a>
                        </li>
                        <li>
                            <a href="#">Link Four</a>
                        </li>
                    </ul>
                    <ul className='footer__list' >
                        <li>
                            <a href="#">Second Column</a>
                        </li>
                        <li>
                            <a href="#">Link One</a>
                        </li>
                        <li>
                            <a href="#">Link Two</a>
                        </li>
                        <li>
                            <a href="#">Link Three</a>
                        </li>
                        <li>
                            <a href="#">Link Four</a>
                        </li>
                    </ul>
                    <ul className='footer__list' >
                        <li>
                            <a href="#">Third Column</a>
                        </li>
                        <li>
                            <a href="#">Link One</a>
                        </li>
                        <li>
                            <a href="#">Link Two</a>
                        </li>
                        <li>
                            <a href="#">Link Three</a>
                        </li>
                        <li>
                            <a href="#">Link Four</a>
                        </li>
                    </ul>
                    <ul className='footer__list' >
                        <li>
                            <a href="#">Fouth Column</a>
                        </li>
                        <li>
                            <a href="#">Link One</a>
                        </li>
                        <li>
                            <a href="#">Link Two</a>
                        </li>
                        <li>
                            <a href="#">Link Three</a>
                        </li>
                        <li>
                            <a href="#">Link Four</a>
                        </li>
                    </ul>
                    <form className='inbox__form' >
                        <input placeholder='Placeholder' className='inbox__input' type="text"/>
                        <button type='submit' className='submit__btn' ><img src={icon} alt=""/></button>
                    </form>
                    <p className='todo' >
                        Never miss an update
                    </p>
                </div>
                <div className='footer__copyright' >
                    <img src={minimaze__logo} alt="" />
                    <p className='copyright' >
                    © 2019 Fabrx 
                    </p>
                    <div  className='socials' >
                        <img src={facebook} alt="" />
                        <img src={instagramm} alt="" />
                        <img src={twitter} alt="" />
                        <img src={behance} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer