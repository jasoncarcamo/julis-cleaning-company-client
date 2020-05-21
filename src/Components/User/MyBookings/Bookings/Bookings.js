import React from "react";
import "./Bookings.css";
import Upcoming from "./Upcoming/Upcoming";
import History from "./History/History";
import UserBookingsContext from "../../../../Context/UserBookingsContext/UserBookingsContext"; 

const headerStyle = {
    borderBottom: ".2em solid rgba(137, 196, 242, 0.6)"
}

export default class Bookings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showUpcoming: true,
            showHistory: false,
            bookings: []
        };
    };

    static contextType = UserBookingsContext;

    componentDidMount(){
    }

    handleDisplay = (e)=>{
        this.setState({
            showUpcoming: !this.state.showUpcoming,
            showHistory: !this.state.showHistory
        })
    }

    render(){
        console.log(this.context)
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

                {this.state.showUpcoming ? <Upcoming bookings={this.context.bookings}/> : ""}
                {this.state.showHistory ? <History bookings={this.context.bookings}/> : ""}
            </section>
        )
    }
}