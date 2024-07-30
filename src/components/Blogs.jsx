import React from 'react'
import "./css/blogs.css"
import blog1 from "./assets/images/blog1.png"
import blog2 from "./assets/images/blog2.png"
import blog3 from "./assets/images/blog3.png"
import blog4 from "./assets/images/blog4.png"
import blog5 from "./assets/images/blog5.png"
import user2 from "./assets/images/user2.png"

const Blogs = () => {
  return (
    <>
        <section className='blog' >
            <div className="container__blog">
                <div className="blog__wrapper">
                <h4 className='articles__title' >
                    Featured articles
                </h4>
                <hr style={{margin: "24px 0px 40px 0px"}}/>
                <div className='blog__cards' >
                    <div className='blog__card' >
                        <img className='blog__img' src={blog1} alt="" />
                        <div className='card__info' >
                            <p  className='card__title'>
                                Pathway to the Mediterranean
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                                On the other hand, we denounce with 
                                righteous indignation and dislike men who 
                                
                                are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
                            </p>
                        </div>  
                    </div>
                    <div className='blog__card' >
                        <img className='blog__img' src={blog2} alt="" />
                        <div className='card__info' >
                            <p  className='card__title'>
                                My awesome safari in Lahbab Desert, United Arab Emirates
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                                On the other hand, we denounce with 
                                righteous indignation and dislike men who 
                                
                                are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
                            </p>
                        </div>  
                    </div>
                    <div className='blog__card' >
                        <img className='blog__img' src={blog3} alt="" />
                        <div className='card__info' >
                            <p  className='card__title'>
                            10 amazing things to do in Cuba
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                                On the other hand, we denounce with 
                                righteous indignation and dislike men who 
                                
                                are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
                            </p>
                        </div>  
                    </div>
                    <div className='blog__card' >
                        <img className='blog__img' src={blog4} alt="" />
                        <div className='card__info' >
                            <p  className='card__title'>
                            The best street food in the world. Ranked!
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                                On the other hand, we denounce with 
                                righteous indignation and dislike men who 
                                
                                are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
                            </p>
                        </div>  
                    </div>
                    <div className='blog__card' >
                        <img className='blog__img' src={blog5} alt="" />
                        <div className='card__info' >
                            <p  className='card__title'>
                            Travel Packing guide for beginners
                            </p>
                            <div className='user' >
                                <img className='user__logo' src={user2} alt="" />
                                <p className='user__desc' >
                                  Farok Rastegar  .  1 hour ago
                                </p>
                            </div>
                            <p className='article__description' >
                                On the other hand, we denounce with 
                                righteous indignation and dislike men who 
                                
                                are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
                            </p>
                        </div>  
                    </div>
                </div>
                <button className='blog__btn' >Load more</button>
                </div>
            </div>
        </section>
    </>

)
}

export default Blogs