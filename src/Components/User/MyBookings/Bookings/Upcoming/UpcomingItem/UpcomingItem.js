import React from "react";
import "./UpcomingItem.css";
import UserToken from "../../../../../../Services/UserToken/UserToken";
import UserBookingContext from "../../../../../../Context/UserBookingsContext/UserBookingsContext";

export default class UpcomingItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            delete: false,
            cancelConfirmed: false,
            loading: false
        };
    };

    static contextType = UserBookingContext;

    componentDidMount(){

    }

    handleCancel = ()=>{
        this.setState({
            delete: !this.state.delete
        })
    }

    hasBeen24Hours = ()=>{
        var OneDay = new Date().getTime() + (24 * 60 * 60 * 1000);
        
        if (OneDay > new Date(this.props.book.date).getTime()) {
            // The yourDate time is less than 1 days from now
            
            return false;
        }
        else if (OneDay < new Date(this.props.book.date)) {
            // The yourDate time is more than 1 days from now
            
            return true;
        }
    }

    renderOptions = ()=>{
        return (
            <div>
                {this.hasBeen24Hours() === false ? <button onClick={this.handleCancel}>Cancel</button> : ""}
                <p>* Must be 24 hour in advance to cancel.</p>
            </div>
        )
    }

    renderConfirmation = ()=>{
        return (
            <div>
                <p>Are you sure you want to cancel?</p>

                <p>{this.state.error ? this.state.error : ""}</p>
                
                
                {this.state.loading ? <p>Loading...</p> : <div>
                    <button onClick={this.handleDelete}>Yes</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>}
            </div>
        )
    }

    handleDone = ()=>{
        this.setState({
            cancelConfirmed: false,
            delete: false
        });

        this.context.deleteBook(this.props.book.id);
    }

    renderDone = ()=>{
        return (
            <div>
                <p>We have successfully canceled your appointment.</p>

                <button onClick={this.handleDone}>Thanks</button>
            </div>
        );
    }

    handleDelete = ()=>{

        this.setState({
            loading: true
        })
        
        fetch(`http://localhost:8000/api/bookings/${this.props.book.id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${UserToken.getToken()}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.rejeect(e));
                };
                return res.json();
            })
            .then( resData => {
                this.setState({
                    cancelConfirmed: true,
                    delete: true,
                    loading: false
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error,
                    loading: false
                });
            });
    }
    
    render(){
        return(
            <li className="upcoming-bookings-list">

                <p>Set for: {new Date(this.props.book.date).toDateString()} {this.props.book.time}</p>
                <p>Email: {this.props.book.email}</p>
                <p>Mobile number: {this.props.book.mobile_number}</p>
                <p>Included message: {this.props.book.message}</p>

                {!this.state.delete && !this.state.cancelConfirmed ? this.renderOptions() : ""}
                {this.state.delete && !this.state.cancelConfirmed ? this.renderConfirmation() : ""}
                {this.state.cancelConfirmed ? this.renderDone() : ""}
            </li>
        )
    }
}