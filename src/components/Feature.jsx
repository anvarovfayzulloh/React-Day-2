import React from 'react'
import "./css/feature.css"
import user2 from "./assets/images/user2.png"
import keyboard from './assets/images/keyboard.png'

const Feature = () => {
  return (
    <>
        <section className='feature' >
            <div className="container__feature">
                <div className="feature__wrapper">
                    <div className='user__commitv2' >
                        <button className='feature__btn' >Featured</button>
                        <h4 className='feature__title' >
                            Beached to take you
                            somewhere else
                        </h4>
                        <div className='user' >
                            <img className='user__logo' src={user2} alt="" />
                            <p className='user__desc' style={{color: "white"}}>
                                Farok Rastegar  .  1 hour ago
                            </p>
                        </div>
                    </div>
                    <img className='keyboard' src={keyboard} alt="" />
                </div>
            </div>
        </section>
    </>
)
}

export default Feature