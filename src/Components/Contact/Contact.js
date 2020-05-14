import React from "react";
import "./Contact.css";
import Gloves from "../../assets/images/gloves.jpg";
import ContactForm from "./ContactForm/Contact.Form";

export default class Contact extends React.Component{
    render(){
        return(
            <section id="contact-section">
                <ContactForm/>

                <section>
                    <img className="contact-section-img" src={Gloves} alt="Gloves"/>
                </section>
            </section>
        )
    }
}