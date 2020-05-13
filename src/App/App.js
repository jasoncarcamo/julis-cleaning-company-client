import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Route} from "react-router-dom";

//Routes
import NavBar from "../Components/NavBar/NavBar";

class App extends React.Component {
    render(){
        return (
            <>
                <Route path="/" component={NavBar}></Route>
            </>
        );
    }
}

export default App;
