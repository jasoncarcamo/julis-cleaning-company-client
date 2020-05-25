import React from "react";
import "./History.css";
import HistoryItem from "./HistoryItem/HistoryItem";

export default class History extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };

    convertTime = (time)=>{
        let newTime = time.split(":");
        let hours = Number(newTime[0]);
        let minutes = Number(newTime[1].split(" ")[0]);
        let hourType = newTime[1].split(" ")[1];

        if(hourType === "PM" && hours < 12){
            hours += 12;
        } else if( hourType === "AM" && hours === 12){
            hours = Number("00");
        };

        hours =+ minutes;

        return hours;
    }

    renderItems = ()=>{
        let bookings = this.props.bookings;

        if(bookings.length === 0){
            return (
                <li id="no-history">
                    <p>We’re looking forward to meeting you.</p>

                    <p>Contact Us</p>
                </li>
            )
        };        

        bookings.sort((a, b)=>{
            return new Date(b.date) - new Date(a.date);
        });

        bookings = bookings.map((book, index)=>{


            if(new Date(book.date) < new Date()){
                return <HistoryItem key={index} book={book}/>;
            };
        });

        return bookings
    }

    render(){
        return (
            <ul id="history-bookings-list-container">
                {this.renderItems()}
            </ul>
        )
    }
}