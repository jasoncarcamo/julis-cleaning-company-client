import React from "react";
import "./BookSteps.css";
import UserToken from "../../../Services/UserToken/UserToken";
import UserBookingsContext from "../../../Context/UserBookingsContext/UserBookingsContext";

export default class BookSteps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            completed: false,
            error: ""
        };
    };

    static contextType = UserBookingsContext;

    componentDidMount(){
        
    }

    renderDirectionButtons = ()=>{
        return (
            <div>
                <button onClick={this.props.handleBackStep}>Back</button>
                <button onClick={this.handleForm}>Book It</button>
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
                <button onClick={this.handleForm}>Book It</button>
            </div>
        )
    };

    handleForm = (e)=>{
        e.preventDefault();

        let newBookings = {...this.props.info, ...this.props.contactInfo};

        this.setState({
            submitting: true
        });

        fetch("http://localhost:8000/api/bookings", {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${UserToken.getToken()}`
            },
            body: JSON.stringify(newBookings)
        })
            .then( res => {
                
                if(!res.ok){

                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                console.log(resData);
                this.props.resetInfo();
                
                this.setState({
                    submitting: false,
                    completed: false
                });

                this.props.isSuccessful(resData.createdBookings);
                
            })
            .catch( err => this.setState({
                error: err.error,
                submitting: false,
                completed: false
            }));
    }

    renderLoading = ()=>{
        return (
            <div>
                <p>Loading</p>
            </div>
        );
    };

    render(){
        console.log(this.state)
        return (
            <section id="book-steps-section">
                <p>Set for: {this.props.info.date.toDateString()}</p>
                <p>Best time: {this.props.info.time? this.props.info.time : "Choose the best time that works for you."}</p>

                <p className="book-steps-section-error">{this.state.error ? this.state.error : ""}</p>

                {this.props.info.time && this.props.chooseData ? <button onClick={this.props.handleNextStep}>Next</button> : ""}
                {this.props.confirmInfo && !this.props.chooseData && !this.state.submitting ? this.renderDirectionButtons() : ""}
                {!this.props.confirmInfo && !this.props.chooseData && !this.state.submitting ? this.renderMobileDirectionButtons() : ""}
            </section>
        )
    }
}