import React, { useState } from 'react';
import emailjs from "emailjs-com";
import Footer from './footer';
import Header from './header';

export default function contact(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_5xus7sn", "template_aqto6xc", e.target, "user_XmVRJ4snvOeb3UJlvluDS")
        .then((result) => {
            console.log(result.text); window.location.reload()
        }).catch(error => console.log("You have an error in user message submit" , error))
    }

    return (
        <div className="contact-wrapper">
          <Header />
          <form className="form" onSubmit={sendEmail}>
              <div className="form-group">
              <input type="text" name="name" id="FullName" placeholder="Your name"/>
              <label htmlFor="FullName">Your name</label>
              </div>

              <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Your email"/>
              <label htmlFor="email">Your email</label>
              </div>

              <div className="form-group">
                  <textarea name="message" name="message" id="message" placeholder="Message"></textarea>
              <label htmlFor="message">Message</label>
              </div>

              <div className="spacer10"></div>

              <div className="centered-btn-wrapper">
                  <button type="submit" className="btn" value="Send">Send</button>
              </div>
          </form>
          <Footer />
        </div>
    )
}