import React from "react";
import "./MyAccount.css";

export default class MyAccount extends React.Component{
    render(){
        return (
            <section id="user-account-section">
                <section className="user-account-header">
                    <h3>My Account</h3>
                    <h5>View and edit your personal info below.</h5>
                </section>

                <section id="user-account-myaccount">
                    <form id="user-account-form">
                        <fieldset id="user-account-fieldset">
                            
                            <div>
                                <div>
                                    <label htmlFor="user-account-first-name">First name</label>
                                    <input type="text" id="user-account-first-name" name="first_name"/>
                                </div>

                                <div>
                                    <label htmlFor="user-account-last-name">Last name</label>
                                    <input type="text" id="user-account-last-name" name="last_name"/>
                                </div>

                                <div>
                                    <label htmlFor="user-account-mobile-number">Mobile number</label>
                                    <input type="text" id="user-account-mobile-number" name="mobile_number"/>
                                </div>
                            </div>

                            <button id="user-account-update-submit">Update info</button>
                        </fieldset>
                    </form>
                </section>
            </section>
        )
    }
}