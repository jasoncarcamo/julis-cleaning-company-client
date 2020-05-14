import React from "react";
import "./ThirdSection.css";
import Room from "../../../assets/images/room.jpg";
import Office from "../../../assets/images/office.jpg";
import LivingRoom from "../../../assets/images/living-room.jpg";

export default class ThirdSection extends React.Component{
    render(){
        return(
            <section id="third-section">

                <h3>Our Services</h3>

                <div id="third-section-service-container">
                    <section>
                        <img className="third-section-img" src={Room} alt="Room"/>
                        <button className="third-section-btn">Residential</button>
                    </section>

                    <section>
                        <img className="third-section-img" src={Office} alt="office"/>
                        <button className="third-section-btn">Commericial</button>
                    </section>

                    <section>
                        <img className="third-section-img" src={LivingRoom} alt="Livong room"/>
                        <button className="third-section-btn">Customize</button>
                    </section>
                </div>

                <button id="third-section-book-btn">Book a Consultation</button>
            </section>
        )
    }
}