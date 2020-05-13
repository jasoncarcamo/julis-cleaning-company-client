import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

export default class LandingPage extends React.Component{

    render(){

        return (
            <section>
                <FirstSection/>
                <SecondSection/>
            </section>
        )
    }
}