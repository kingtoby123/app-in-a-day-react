import React, { useState } from 'react';
import emailjs from "emailjs-com";

export default function contact(props) {
    function sendEmail(event) {
        event.preventDefault();
        if (Name !== "" || Email !== "" || Message !== "") {
            emailjs.sendForm("service_5xus7sn", "template_aqto6xc", event.target, "user_XmVRJ4snvOeb3UJlvluDS")
            .then((result) => {
                console.log(result.text); window.location.reload()
            }).catch(error => console.log("You have an error in user message submit" , error))
        }
    }

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Message, setMessage] = useState("")

    return (
        <div className="contact-wrapper">
          <form className="form" onSubmit={sendEmail}>
              <div className="form-group">
                    <input type="text" name="name" id="FullName" placeholder="Your name" onChange={() => setName(event.target.value)}/>
                    <label htmlFor="FullName">Your name</label>
              </div>

              <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Your email" onChange={() => setEmail(event.target.value)}/>
                    <label htmlFor="email">Your email</label>
              </div>

              <div className="form-group">
                    <textarea name="message" name="message" id="message" placeholder="Message" onChange={() => setMessage(event.target.value)}></textarea>
                    <label htmlFor="message">Message</label>
              </div>

              <div className="spacer10"></div>

              <div className="centered-btn-wrapper">
                  <button type="submit" className="btn" value="Send">Send</button>
              </div>
                
              <div className="spacer10"></div>
              <div className="spacer10"></div>
          </form>
        </div>
    )
}