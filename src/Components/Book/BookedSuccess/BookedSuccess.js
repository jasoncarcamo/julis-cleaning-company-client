import React from "react";
import "./BookedSuccess.css";

export default class BookedSuccess extends React.Component{

    render(){
        return(
            <section id="booking-success-section">
                <p>We have set an appointment up. You will be contacted by our customer representitive to confirm your appointment.</p>

                <button onClick={this.props.handleDone}>Great, Thanks!</button>
            </section>
        )
    }
}