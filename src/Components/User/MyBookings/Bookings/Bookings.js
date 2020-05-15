import React from "react";
import "./Bookings.css";
import Upcoming from "./Upcoming/Upcoming";
import History from "./History/History";

const headerStyle = {
    borderBottom: ".2em solid rgba(137, 196, 242, 0.6)"
}

export default class Bookings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showUpcoming: true,
            showHistory: false
        };
    };

    renderUpcoming = ()=>{
        let bookings = [];

        if(!bookings){
            return 
        }

        let upcomingBookings = bookings.map((book, index)=>{
            return <Upcoming key={index} book={book}/>
        });

        return upcomingBookings;
    }

    handleDisplay = (e)=>{
        this.setState({
            showUpcoming: !this.state.showUpcoming,
            showHistory: !this.state.showHistory
        })
    }

    render(){
        return(
            <section id="user-bookings">
                <section id="bookings-options-header">
                    <p 
                        onClick={this.handleDisplay}
                        style={this.state.showUpcoming ? headerStyle : null}>Upcoming</p>
                    <p 
                        onClick={this.handleDisplay}
                        style={this.state.showHistory ? headerStyle : null}>History</p>
                </section>

                {this.state.showUpcoming ? <Upcoming/> : ""}
                {this.state.showHistory ? <History/> : ""}
            </section>
        )
    }
}