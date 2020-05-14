import React from "react";
import "./ContactForm.css";

export default class ContactForm extends React.Component{
    render(){
        return (
            <section id="contact-form-container">
                <section id="contact-form-info">
                    <h3>Feel free to reach out for any questions</h3>

                    <p>2 Madison ave</p>
                    <p>Amityville, Ny, 11701</p>
                    <p>juliscleaningcompany@gmail.com​</p>
                    <p>(631) 526-3306</p>
                </section>
                
                <form id="contact-form">
                    <fieldset id="contact-fieldset">
                        <label htmlFor="contact-form-name">Enter Your Name</label>
                        <input type="text" id="contact-form-name" placeholder="Name"/>

                        <label htmlFor="contact-form-email">Enter Your Email</label>
                        <input type="text" id="contact-form-email" placeholder="Email"/>

                        <label htmlFor="contact-form-phone">Enter Your Phone Number</label>
                        <input type="tel" id="contact-form-phone" placeholder="Phone"/>

                        <label htmlFor="contact-form-message">Enter Your Message</label>
                        <textarea id="contact-form-message" placeholder="Message"/>

                        <button id="contact-form-submit" type="submit">Submit</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}