import React from "react";
import "./FourthSection.css";
import Kitchen from "../../../assets/images/kitchen.jpg";
import RedLivingRoom from "../../../assets/images/red-living-room.jpg"
import Hallway from "../../../assets/images/hallway.jpg"
import Gloves from "../../../assets/images/gloves.jpg"
import BlueLivingRoom from "../../../assets/images/blue-living-room.jpg"
import BlackLivingRoom from "../../../assets/images/black-living-room.jpg"
import GreenLivingRoom from "../../../assets/images/green-living-room.jpg"
import WhiteLivingRoom from "../../../assets/images/white-living-room.jpg"


export default class FourthSection extends React.Component{
    render(){
        return(
            <section id="fourth-section">
                <h3>Happy Clients' Homes</h3>

                <section id="fourth-section-img-container">
                    <img className="fourth-section-img" src={Kitchen} alt="Kitchen"/>
                    <img className="fourth-section-img" src={BlueLivingRoom} alt="Blue living room"/>
                    <img className="fourth-section-img" src={WhiteLivingRoom} alt="White living room"/>
                    <img className="fourth-section-img" src={RedLivingRoom} alt="Red living room"/>
                    <img className="fourth-section-img" src={Hallway} alt="Hallway"/>
                    <img className="fourth-section-img" src={BlackLivingRoom} alt="Black living room"/>
                    <img className="fourth-section-img" src={GreenLivingRoom} alt="Green living room"/>
                </section>
            </section>
        )
    }
}