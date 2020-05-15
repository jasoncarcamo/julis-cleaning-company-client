import React from "react";
import "./Upcoming.css";

export default class Upcoming extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    };

    renderItems = ()=>{
        let bookings = [];

        if(bookings.length == 0){
            return (
                <li id="no-upcoming">
                    <p>You've got nothing booked at the moment.</p>

                    <p>Contact Us</p>
                </li>
            )
        };

        bookings = bookings.map((book, index)=>{
            return <Upcoming key={index} book={book}/>
        });

        return bookings
    }

    render(){
        return (
            <ul id="upcoming-bookings-list">
                {this.renderItems()}
            </ul>
        )
    }
}