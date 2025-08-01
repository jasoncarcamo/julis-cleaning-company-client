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
            loading: true,
            error: ""
        });

        fetch("https://vast-atoll-11346.herokuapp.com/api/contact", {
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
            .then( async resData => {
                let expoTokens = resData.expoTokens;

                if(expoTokens.length > 0){
                    expoTokens.forEach(async (expoToken, index) => {
                    
                        const message = {
                            to: expoToken.expo_token,
                            sound: 'default',
                            title: 'New contact',
                            body: `${this.state.name} has filled out a contact form on your website!`,
                            data: { data: `${this.state.name} has filled out a contact form on your website!` },
                            _displayInForeground: true,
                        };
    
                        await fetch('https://exp.host/--/api/v2/push/send', {
                            mode: "no-cors",
                            method: 'POST',
                            headers: {
                            Accept: 'application/json',
                            'Accept-encoding': 'gzip, deflate',
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(message),
                            });
                    });

                    this.setState({
                        loading: false,
                        success: true
                    });
                } else {
                    this.setState({
                        loading: false,
                        success: true
                    });
                };
            })
            .catch( err => {

                this.setState({
                    error: err.error,
                    loading: false
                });
            })
    }

    resetForm = ()=>{
        this.setState({
            name: "",
            email: "",
            mobile_number: "",
            message: "",
            loading: false,
            success: false,
            error: ""
        });
    }

    renderSuccesss = ()=>{
        return (
            <>
                <p>You have successfully submitted your contact form. You will hear from us soon!</p>

                <button onClick={this.resetForm} type="button">Ok</button>
            </>
        );
    }

    render(){

        return (
            <section id="contact-form-container">
                <section id="contact-form-info">
                    <h3>Feel free to reach out for any questions</h3>
                    <p>Amityville, Ny, 11701</p>
                    <p>Jayscleaningcompany@email.com​</p>
                    <p>(631) 123-1234</p>
                </section>
                
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    <fieldset id="contact-fieldset">

                        <label htmlFor="contact-form-name">* Enter Your Name</label>
                        <input 
                            type="text" 
                            id="contact-form-name" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-email">* Enter Your Email</label>
                        <input 
                            type="email" 
                            id="contact-form-email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-phone">* Enter Your Phone Number</label>
                        <input 
                            type="tel" 
                            id="contact-form-phone" 
                            name="mobile_number" 
                            placeholder="(999) 999-9999"
                            value={this.state.mobile_number}
                            onChange={this.handleInput}/>

                        <label htmlFor="contact-form-message">* Enter Your Message</label>
                        <textarea 
                            id="contact-form-message" 
                            name="message" 
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleInput}/>

                        <p>{this.state.error ? this.state.error : ""}</p>

                        {this.state.success ? this.renderSuccesss() : ""}

                        {this.state.loading ? <p>Loading...</p> : ""}

                        {!this.state.loading && !this.state.success ? <button id="contact-form-submit" type="submit">Submit</button> : ""}
                        
                    </fieldset>
                </form>
            </section>
        )
    }
}