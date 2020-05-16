import React from "react";
import "./ConfirmInfo.css";

export default class ConfirmInfo extends React.Component{
    goNext = ()=>{
        const booksSection = document.getElementById("book-steps-section");

        this.props.finalStep();
        booksSection.classList.add("show-book-step");
    };

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
                                <input type="text" id="confirm-info-name" name="name" placeholder="Name"/>
                            </div>

                            <div>
                                <input type="text" id="confirm-info-email" name="email" placeholder="Email"/>
                            </div>

                            <div>
                                <input type="tel" id="confirm-info-mobile-number" name="mobile_number" placeholder="Mobile number"/>
                            </div>

                            <div>
                                <textarea id="confirm-info-message" name="message" placeholder="Add Your Message"/>
                            </div>
                        </fieldset>
                    </form>
                </section>

                <button className="next-btn" onClick={this.goNext}>Next</button>
            </section>
        )
    }
}