import React from "react";
import "./Footer.css";

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p><span className="copyright">&copy;</span> Jay's Cleaning Company, All rights reserved</p>
            </footer>
        )
    }
}