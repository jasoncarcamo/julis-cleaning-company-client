import React from "react";
import "./Book.css";
import BookSteps from "./BookSteps/BooksSteps";
import ChooseDate from "./ChooseDate/ChooseDate";
import ConfirmInfo from "./ConfirmInfo/ConfirmInfo";

export default class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info: {
                date: new Date(),
                time: ""
            },
            chooseDate: true,
            confirmInfo: false
        }
    }

    setInfo = (info)=>{
        this.setState({
            info
        });
    }

    handleNextStep = ()=>{
        this.setState({
            confirmInfo: true,
            chooseDate: false
        });
    }

    handleBackStep = ()=>{
        this.setState({
            confirmInfo: false,
            chooseDate: true
        });
    }

    render(){
        console.log(this.state)
        return (
            <section id="book-section">
                {this.state.chooseDate ? <ChooseDate setInfo={this.setInfo}/> : ""}
                {this.state.confirmInfo ? <ConfirmInfo handleBackStep={this.handleBackStep}/> : ""}

                <BookSteps 
                    info={this.state.info}
                    chooseData={this.state.chooseDate}
                    confirmInfo={this.state.confirmInfo}
                    handleNextStep={this.handleNextStep}
                    handleBackStep={this.handleBackStep}/>
            </section>
        )
    }
}