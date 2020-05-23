import React from "react";
import "./Upcoming.css";
import UpcomingItem from "./UpcomingItem/UpcomingItem"

export default class Upcoming extends React.Component{
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

        if(hourType == "PM" && hours < 12){
            hours += 12;
        } else if( hourType == "AM" && hours == 12){
            hours = Number("00");
        };

        hours =+ minutes;

        return hours;
    }

    renderItems = ()=>{
        let bookings = this.props.bookings;

        if(bookings.length == 0){
            return (
                <li id="no-upcoming">
                    <p>You've got nothing booked at the moment.</p>

                    <p>Contact Us</p>
                </li>
            )
        };

        bookings.sort((a, b)=>{
            return new Date(b.date) - new Date(a.date);
        });

        bookings = bookings.map((book, index)=>{

            if(new Date(book.date).toDateString() == new Date().toDateString()){
                return <UpcomingItem key={index} book={book}/>;
            };

            if(new Date(book.date) > new Date() || new Date(book.date) === new Date()){
                return <UpcomingItem key={index} book={book}/>;
            };

        });

        bookings = bookings.filter(( book) => book !== undefined);

        if(bookings.length == 0){
            return (
                <li id="no-upcoming">
                    <p>You've got nothing booked at the moment.</p>

                    <p>Contact Us</p>
                </li>
            )
        };

        return bookings;
    }

    render(){
        console.log(this.props);
        return (
            <ul id="upcoming-bookings-container">
                {this.renderItems()}
            </ul>
        )
    }
}