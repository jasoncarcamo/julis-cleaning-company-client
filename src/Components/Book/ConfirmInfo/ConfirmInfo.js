import React from "react";
import "./ConfirmInfo.css";

export default class ConfirmInfo extends React.Component{
    render(){
        return (
            <section id="confirm-info-section">
                <button onClick={this.props.handleBackStep}>Back</button>

                <section>
                    <h3>Add Your Info</h3>
                    <p>Tell us a bit about yourself.</p>

                    <form id="confirm-info-form">
                        <fieldset id="confirm-info-fieldset">
                            
                            <div>
                                <label htmlFor="confirm-info-name">Name</label>
                                <input type="text" id="confirm-info-name" name="name"/>
                            </div>

                            <div>
                                <label htmlFor="confirm-info-email">Email</label>
                                <input type="text" id="confirm-info-email" name="email"/>
                            </div>

                            <div>
                                <label htmlFor="confirm-info-mobile-number">Mobile number</label>
                                <input type="tel" id="confirm-info-mobile-number" name="mobile_number"/>
                            </div>

                            <div>
                                <label htmlFor="confirm-info-message">Add Your Message</label>
                                <textarea id="confirm-info-message" name="message"/>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </section>
        )
    }
}