import Button from "../Button/Button";
import "./ContactForm.css";
import { MdMessage } from "react-icons/md"; // Assuming you have a CSS file for styles
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  return (
    
    <section className="container">
        <div className="contact-form">
            <div className="top-btn">
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={20}  />} />
                <Button text="VIA CALL" icon={<BsFillTelephoneFill fontSize={20}  />} />     
            </div>
            
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize={20}  />} />
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <textarea name="text"rows={8} />
            </div>
            <div style={{display:"flex", justifyContent:"end", alignItems:"center"}}>
              <Button  text="SUBMIT BUTTON"/>
            </div>
        </div>

        <div className="contact-image">
            <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm