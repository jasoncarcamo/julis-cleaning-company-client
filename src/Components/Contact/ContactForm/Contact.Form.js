import React from "react";
import "./ContactForm.css";
import { faRss } from "@fortawesome/free-solid-svg-icons";

export default class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile_number: "",
            message: "",
            loading: false,
            success: false,
            error: ""
        };
    };

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        this.setState({
            loading: true
        });

        fetch("http://localhost:8000/api/contact", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                mobile_number: this.state.mobile_number,
                message: this.state.message
            })
        })
            .then( res => {

                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                this.setState({
                    name: "",
                    email: "",
                    mobile_number: "",
                    message: "",
                    loading: false,
                    success: true
                })
            })
            .catch( err => {
                console.log(err);

                this.setState({
                    error: err.error,
                    loading: false
                });
            })
    }

    renderSuccesss = ()=>{
        return (
            <div id="contact-successful-section">
                <p>You have successfully submitted your contact form. You will hear from us soon!</p>

                <button onClick={()=>{this.setState({
                    success: false
                })}}>Ok</button>
            </div>
        )
    }

    render(){
        console.log(this.state)
        return (
            <section id="contact-form-container">
                <section id="contact-form-info">
                    <h3>Feel free to reach out for any questions</h3>

                    <p>2 Madison ave</p>
                    <p>Amityville, Ny, 11701</p>
                    <p>juliscleaningcompany@gmail.com​</p>
                    <p>(631) 526-3306</p>
                </section>
                
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
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

                        {this.state.loading && !this.state.success ? <p>Loading...</p> : <button id="contact-form-submit" type="submit">Submit</button>}
                        
                    </fieldset>
                </form>
            </section>
        )
    }
}