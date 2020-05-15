import React from "react";
import "./History.css";

export default class History extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };

    renderItems = ()=>{
        let bookings = [];

        if(bookings.length == 0){
            return (
                <li id="no-history">
                    <p>We’re looking forward to meeting you.</p>

                    <p>Contact Us</p>
                </li>
            )
        };

        bookings = bookings.map((book, index)=>{
            return <History key={index} book={book}/>
        });

        return bookings
    }

    render(){
        return (
            <ul id="history-bookings-list">
                {this.renderItems()}
            </ul>
        )
    }
}