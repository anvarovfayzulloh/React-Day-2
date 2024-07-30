import React from 'react'
import "./css/articles.css"
import card1 from "./assets/images/card1.png"
import card2 from "./assets/images/card2.png"
import card3 from "./assets/images/card3.png"
import card4 from "./assets/images/card4.png"
import card5 from "./assets/images/card5.png"
import card6 from "./assets/images/card6.png"
import user1 from "./assets/images/user1.png"
import user2 from "./assets/images/user2.png"
import user3 from "./assets/images/user3.png"
import user4 from "./assets/images/user4.png"
import user5 from "./assets/images/user5.png"
import user6 from "./assets/images/user6.png"


const Aricles = () => {
  return (
    <>
        <section className='articles' >
            <div className="container__articles">
                <div className="articles__wrapper">
                    <h4 className='articles__title' >
                        Featured articles
                    </h4>
                    <hr style={{margin: "24px 0px 40px 0px"}} />
                    <div className='articles__cards' >
                        <div className='articles__card' >
                            <img className='card__img' src={card1} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user1} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                        <div className='articles__card' >
                            <img className='card__img' src={card2} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                        <div className='articles__card' >
                            <img className='card__img' src={card3} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user3} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                        <div className='articles__card' >
                            <img className='card__img' src={card4} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user4} alt="" />
                                <p className='user__desc' >

                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                        <div className='articles__card' >
                            <img className='card__img' src={card5} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user5} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                        <div className='articles__card' >
                            <img className='card__img' src={card6} alt="" />
                            <p className='card__title' >
                                10 beaches you must visit
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user6} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                            On the other hand, we denounce with righteous
                             indignation and dislike men who are so 
                             beguiled and demoralized by the charms of 
                             pleasure of the…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Aricles