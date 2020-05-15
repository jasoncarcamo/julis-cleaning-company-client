import React from "react";
import "./LogIn.css";
import {NavLink} from "react-router-dom";
import UserToken from '../../Services/UserToken/UserToken';
import UserContext from "../../Context/UserContext/UserContext";

export default class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "'"
        }
    }

    static contextType = UserContext;

    componentDidMount(){
        if(UserToken.hasToken()){
            this.props.history.push("/user");
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogIn = (e)=>{
        e.preventDefault();

        fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then( res => {
                if(!res.ok){

                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {

                UserToken.saveToken(resData.token);

                this.context.refreshUserContext()
                    .then( refreshed => {

                        this.setState({
                            email: "",
                            password: "",
                            error: ""
                        });

                        this.props.history.push("/");
                    });
                
            })
            .catch( err => this.setState({
                error: err.error
            }))
    }

    render(){
        return(
            <section id="login-section">

                <h3>Log In</h3>
                <p>New to this site? <NavLink to="/signup">Sign up</NavLink></p>
                <form 
                    id="login-form"
                    onSubmit={this.handleLogIn}>
                    <fieldset id="login-fieldset">
                        
                        <div>
                            <input 
                                id="login-email" 
                                type="email" 
                                placeholder="Email" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleInput}
                                required/>
                            <label htmlFor="login-email">Email</label>
                        </div>

                        <div>
                            <input 
                                id="login-password" 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleInput}
                                required/>
                            <label htmlFor="login-password">Password</label>
                        </div>

                        <p>{this.state.error ? this.state.error : ""}</p>

                        <button id="login-submit" type="submit">Log In</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}