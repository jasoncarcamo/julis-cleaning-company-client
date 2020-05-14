import React from "react";
import "./SixthSection.css";

export default class SixthSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            error: ""
        }
    };

    handleEmail = (e)=>{
        this.setState({
            email: e.target.value
        });
    };

    render(){
        return(
            <section id="sixth-section">
                <h3>Enter your email for a response from our team</h3>

                <form id="sixth-section-form">
                    <fieldset id="sixth-section-fieldset">

                        <label htmlFor="sixth-section-email">Subscribe</label>
                        <div>
                            <input 
                                type="text" 
                                id="sixth-section-email" 
                                placeholder="Enter your email here" 
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required/>

                            <button id="sixth-section-submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        )
    }
}