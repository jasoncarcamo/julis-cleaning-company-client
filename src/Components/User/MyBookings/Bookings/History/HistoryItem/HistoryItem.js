import React from "react";
import "./HistoryItem.css";

export default class HistoryItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    };



    render(){

        return(
            <li className="history-bookings-list">
                <p>Set for: {new Date(this.props.book.date).toDateString()} {this.props.book.time}</p>

                <p>Email: {this.props.book.email}</p>
                <p>Mobile number: {this.props.book.mobile_number}</p>
                <p>Included message: {this.props.book.message}</p>

            </li>
        );
    };
}