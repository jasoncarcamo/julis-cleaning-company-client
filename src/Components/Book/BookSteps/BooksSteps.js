import React from "react";
import "./BookSteps.css";

export default class BookSteps extends React.Component{
    render(){
        console.log(this.props)
        return (
            <section id="book-steps-section">
                <p>{this.props.info.date.toDateString()}</p>
                <p>{this.props.info.time}</p>

                {this.props.chooseData ? <button onClick={this.props.handleNextStep}>Next</button> : ""}
                {this.props.confirmInfo ? <button>Book It</button> : ""}
            </section>
        )
    }
}