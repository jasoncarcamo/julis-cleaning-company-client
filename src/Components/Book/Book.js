import React from "react";
import "./Book.css";
import BookSteps from "./BookSteps/BooksSteps";
import ChooseDate from "./ChooseDate/ChooseDate";
import ConfirmInfo from "./ConfirmInfo/ConfirmInfo";
import BookedSuccess from "./BookedSuccess/BookedSuccess";
import UserBookingsContext from "../../Context/UserBookingsContext/UserBookingsContext";
import UserToken from "../../Services/UserToken/UserToken";

export default class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info: {
                date: new Date(),
                time: ""
            },
            contactInfo: {
                name: "",
                email: "",
                mobile_number: "",
                message: ""
            },
            chooseDate: true,
            confirmInfo: false,
            screenWidth: window.innerWidth,
            success: false
        }
    }

    static contextType = UserBookingsContext;

    componentDidMount(){
        window.addEventListener("resize", (e)=>{
            this.setState({
                screenWidth: window.innerWidth
            });
        });
    }

    setInfo = (info)=>{
        this.setState({
            info
        });
    }

    setContactInfo = (contactInfo) => {
        this.setState({
            contactInfo
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

    finalStep = ()=>{
        this.setState({
            confirmInfo: false,
            chooseData: false
        })
    }

    resetInfo = ()=>{
        this.setState({
            info: {
                date: new Date(),
                time: ""
            },
            contactInfo: {
                name: "",
                email: "",
                mobile_number: "",
                message: ""
            },
            chooseDate: true,
            confirmInfo: false
        });
    }

    isSuccessful = (newBooking)=>{
        this.context.completeBooking(newBooking);

        this.setState({
            success: true
        });

    }

    isGuestSuccessful = (newBooking)=>{

        this.setState({
            success: true
        });

    }

    handleDone = ()=>{
        this.setState({
            success: false
        })
    }

    render(){

        return (
            <section id="book-section">
                {this.state.chooseDate && !this.state.success ? <ChooseDate setInfo={this.setInfo} chooseData={this.state.chooseDate}
                    confirmInfo={this.state.confirmInfo}
                    handleNextStep={this.handleNextStep}
                    handleBackStep={this.handleBackStep}/> : ""}
                {this.state.confirmInfo && !this.state.success ? <ConfirmInfo chooseData={this.state.chooseDate}
                    setContactInfo={this.setContactInfo}
                    confirmInfo={this.state.confirmInfo}
                    handleNextStep={this.handleNextStep}
                    handleBackStep={this.handleBackStep}
                    finalStep={this.finalStep}/> : ""}

                {!this.state.success ? <BookSteps 
                    info={this.state.info}
                    contactInfo={this.state.contactInfo}
                    chooseData={this.state.chooseDate}
                    confirmInfo={this.state.confirmInfo}
                    handleNextStep={this.handleNextStep}
                    handleBackStep={this.handleBackStep}
                    resetInfo={this.resetInfo}
                    isSuccessful={this.isSuccessful}
                    isGuestSuccessful={this.isGuestSuccessful}/> : <BookedSuccess handleDone={this.handleDone}/>}
                
            </section>
        )
    }
}