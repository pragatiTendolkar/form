import React from 'react'
import Button from './Button'
import Leftimg from '/imgs/Service.png'

function Form() {
    return (
        <div>
            <div className="contact-info">
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT : WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <form className="contact-form">
                <div className="left-side">
                    <div className="btns">
                        <Button text="VIA SUPPORT CHAT" />
                        <Button text="VIA CALL" />
                    </div>
                    <Button iswhite="true" text="VIA EMAIL FORM" />
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type='email' name="email" id="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Comment</label>
                        <textarea rows="8" name="comment" id="comment" />
                    </div>
                    <div className="submit">

                        <Button text="Submit" />
                    </div>

                </div>
                <div className="right-side">
                <img src={Leftimg} alt="" srcset="" />
                </div>
            </form>
        </div>


    )
}

export default Form