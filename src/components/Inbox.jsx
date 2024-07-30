import React from 'react'
import "./css/inbox.css"
import icon from "./assets/images/Icon.png"

const Inbox = () => {
  return (
    <>
        <div className="inbox">
            <div className="container__inbox">
                <div className="inbox__wrapper">
                    <h3 className='inbox__title' >
                        Incredible deals, right to your inbox!
                    </h3>
                    <form className='inbox__form' >
                        <input placeholder='Placeholder' className='inbox__input' type="text"/>
                        <button type='submit' className='submit__btn' ><img src={icon} alt=""/></button>
                    </form>
                    <p className='inbox__text' >
                        By joining you agree to our Terms and Conditions
                    </p>
                </div>
            </div>
        </div>
    </>
)
}

export default Inbox