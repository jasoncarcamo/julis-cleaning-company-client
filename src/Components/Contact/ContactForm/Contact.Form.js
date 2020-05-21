import React from "react";
import "./ContactForm.css";

export default class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile_number: "",
            message: "",
            error: ""
        };
    };

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

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
                        <input 
                            type="text" 
                            id="contact-form-name" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-email">Enter Your Email</label>
                        <input 
                            type="email" 
                            id="contact-form-email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-phone">Enter Your Phone Number</label>
                        <input 
                            type="tel" 
                            id="contact-form-phone" 
                            name="mobile_number" 
                            placeholder="(999) 999-9999"
                            value={this.state.mobile_number}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-message">Enter Your Message</label>
                        <textarea 
                            id="contact-form-message" 
                            name="message" 
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleInput}/>

                        <button id="contact-form-submit" type="submit">Submit</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}