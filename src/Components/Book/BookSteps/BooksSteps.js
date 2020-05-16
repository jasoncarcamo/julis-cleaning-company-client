import React from "react";
import "./BookSteps.css";

export default class BookSteps extends React.Component{
    renderDirectionButtons = ()=>{
        return (
            <div>
                <button onClick={this.props.handleBackStep}>Back</button>
                <button>Book It</button>
            </div>
        )
    }

    goBack = ()=>{
        const booksSection = document.getElementById("book-steps-section");

        this.props.handleNextStep();
        booksSection.classList.remove("show-book-step");
    }

    renderMobileDirectionButtons = ()=>{
        return (
            <div>
                <button onClick={this.goBack}>Back</button>
                <button>Book It</button>
            </div>
        )
    };

    render(){
        console.log(this.props)
        return (
            <section id="book-steps-section">
                <p>{this.props.info.date.toDateString()}</p>
                <p>{this.props.info.time}</p>

                {this.props.chooseData ? <button onClick={this.props.handleNextStep}>Next</button> : ""}
                {this.props.confirmInfo && !this.props.chooseData ? this.renderDirectionButtons() : ""}
                {!this.props.confirmInfo && !this.props.chooseData ? this.renderMobileDirectionButtons() : ""}
            </section>
        )
    }
}