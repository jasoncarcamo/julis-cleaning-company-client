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
                <FirstSection history={this.props.history}/>
                <SecondSection history={this.props.history}/>
                <ThirdSection history={this.props.history}/>
                <FourthSection history={this.props.history}/>
                <SixthSection history={this.props.history}/>
            </section>
        )
    }
}