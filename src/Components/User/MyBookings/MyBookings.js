import React from "react";
import "./MyBookings.css";
import Bookings from "./Bookings/Bookings";

export default class MyAccount extends React.Component{
    render(){
        return (
            <section id="user-bookings-section">
                <section className="user-account-header">
                    <h3>Manage Your Bookings</h3>
                    <h5>View, reschedule or cancel your bookings and easily book again.</h5>
                </section>

                <Bookings/>
            </section>
        )
    }
}