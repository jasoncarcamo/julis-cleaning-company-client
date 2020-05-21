import React from "react";
import "./UpcomingItem.css";
import UserToken from "../../../../../../Services/UserToken/UserToken";

export default class UpcomingItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            delete: false,
            cancelConfirmed: false
        };
    };

    componentDidMount(){

    }

    handleCancel = ()=>{
        this.setState({
            delete: !this.state.delete
        })
    }

    renderOptions = ()=>{
        return (
            <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <p>* Must be 24 hour in advance to cancel.</p>
            </div>
        )
    }

    renderConfirmation = ()=>{
        return (
            <div>
                <p>Are you sure you want to cancel?</p>

                <p>{this.state.error ? this.state.error : ""}</p>
                
                <div>
                    <button onClick={()=> this.setState({
                    cancelConfirmed: true,
                    delete: true
                })}>Yes</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            </div>
        )
    }

    handleDone = ()=>{
        this.setState({
            cancelConfirmed: false,
            delete: false
        });
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
                    delete: true
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error
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