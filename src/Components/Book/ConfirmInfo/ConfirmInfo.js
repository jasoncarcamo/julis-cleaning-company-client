import React from "react";
import "./ConfirmInfo.css";
import UserToken from "../../../Services/UserToken/UserToken";

export default class ConfirmInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile_number: "",
            message: "",
            error: ""
        }
    }
    goNext = ()=>{
        const booksSection = document.getElementById("book-steps-section");

        this.props.finalStep();
        booksSection.classList.add("show-book-step");
    };

    handleInput = (e)=>{
        const newState = this.state;
        
        newState[e.target.name] = e.target.value;

        this.setState({
            [e.target.name]: e.target.value
        });

        delete newState.error;

        this.props.setContactInfo(newState);
    }

    render(){
        return (
            <section id="confirm-info-section">
                <button className="confirm-info-section-first-btn" onClick={this.props.handleBackStep}>Back</button>

                <section>
                    <h3>Add Your Info</h3>
                    <p>Tell us a bit about yourself.</p>

                    <form id="confirm-info-form">
                        <fieldset id="confirm-info-fieldset">
                            
                            <div>
                                <input 
                                    type="text" 
                                    id="confirm-info-name" 
                                    name="name" 
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleInput}/>
                                <span>* Required</span>
                            </div>

                            <div>
                                <input 
                                    type="text" 
                                    id="confirm-info-email" 
                                    name="email" 
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInput}/>
                                <span>* Required</span>
                            </div>

                            <div>
                                <input 
                                    type="tel" 
                                    id="confirm-info-mobile-number" 
                                    name="mobile_number" 
                                    placeholder="Mobile number"
                                    value={this.state.mobile_number}
                                    onChange={this.handleInput}/>
                                <span>* Required</span>
                            </div>

                            <div>
                                <textarea 
                                    id="confirm-info-message" 
                                    name="message" 
                                    placeholder="What are you looking to get done?"
                                    value={this.state.message}
                                    onChange={this.handleInput}/>
                                <span>* Required</span>
                            </div>
                        </fieldset>
                    </form>
                </section>

                <button className="next-btn" onClick={this.goNext}>Next</button>
            </section>
        )
    }
}