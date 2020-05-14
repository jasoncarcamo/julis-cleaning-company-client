import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";

import SixthSection from "./SixthSection/SixthSection";

export default class LandingPage extends React.Component{

    render(){

        return (
            <section>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>

                <SixthSection/>
            </section>
        )
    }
}