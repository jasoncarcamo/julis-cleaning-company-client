import React from "react";
import "./FirstSection.css";
import Pillows from "../../../assets/images/pillows.jpg";

export default class FirstSection extends React.Component{

    render(){

        return(
            <section id="first-section">
                <section id="first-section-header">
                    <div>
                        <h2>Tidy Space.</h2>
                        <h2>Happy Mind.</h2>

                        <p>Let Us Work While You Unwind</p>

                        <button 
                            id="get-started-btn"
                            onClick={()=> this.props.history.push("/book")}>Get Started</button>
                    </div>
                </section>

                <section>
                    <img id="pillows-img" src={Pillows} alt="Pillows" style={{
                        width: "10em"
                    }}/>
                </section>
            </section>
        )
    }
}