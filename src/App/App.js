import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Route} from "react-router-dom";

//Routes
import NavBar from "../Components/NavBar/NavBar";
import LandingPage from "../Components/LandingPage/LandingPage";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

class App extends React.Component {
    render(){
        return (
            <>
                <Route path="/" component={NavBar}></Route>
                <Route exact path="/" component={LandingPage}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route path="/" component={Footer}></Route>
            </>
        );
    }
}

export default App;
