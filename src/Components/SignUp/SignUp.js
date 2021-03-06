import React from "react";
import "./SignUp.css";
import {NavLink} from "react-router-dom";
import UserToken from "../../Services/UserToken/UserToken";
import UserContext from "../../Context/UserContext/UserContext";

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            mobile_number: "",
            password: "",
            confirmPassword: "",
            loading: false,
            error: ""
        }
    };

    static contextType = UserContext;

    componentDidMount(){
        if(UserToken.hasToken()){
            this.props.history.push("/user");
        };
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSignUp = (e)=>{
        e.preventDefault();

        this.setState({
            loading: true,
            error: ""
        });

        fetch("https://vast-atoll-11346.herokuapp.com/api/register", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                mobile_number: this.state.mobile_number,
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
                    .then( isLoggedIn => {
                        this.props.history.push("/user");
                    })
                
            })
            .catch( err => this.setState({
                error: err.error,
                loading: false
            }));
    }

    render(){
        return(
            <section id="signup-section">
                <h3>Sign Up</h3>
                <p>Already a member? <NavLink to="/login">Log In</NavLink></p>
                <form 
                    id="signup-form"
                    onSubmit={this.handleSignUp}>
                    <fieldset id="signup-fieldset">

                        <div>
                            <input 
                                id="signup-first-name" 
                                type="text" 
                                placeholder="First name" 
                                name="first_name" 
                                value={this.state.first_name}
                                onChange={this.handleInput}
                                required/>
                            <label htmlFor="signup-first-name">First name</label>
                        </div>

                        <div>
                            <input 
                                id="signup-last-name" 
                                type="text" 
                                placeholder="Last name" 
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleInput} 
                                required/>
                            <label htmlFor="signup-last-name">Last name</label>
                        </div>
                        
                        <div>
                            <input 
                                id="signup-email" 
                                type="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={this.handleInput}
                                name="email"
                                required/>
                            <label htmlFor="signup-email">Email</label>
                        </div>

                        <div>
                            <input 
                                id="signup-mobile-number" 
                                type="tel" 
                                placeholder="Mobile number" 
                                name="mobile_number" 
                                value={this.state.mobile_number}
                                onChange={this.handleInput}
                                required/>
                            <label htmlFor="signup-mobile-number">Mobile number</label>
                        </div>

                        <div>
                            <input 
                                id="signup-password" 
                                type="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInput} 
                                name="password"
                                required/>
                            <label htmlFor="signup-password">Password</label>
                        </div>

                        <div>
                            <input 
                                id="signup-confirm-password" 
                                type="password" 
                                placeholder="Confirm password" 
                                value={this.state.confirmPassword}
                                onChange={this.handleInput}
                                name="confirmPassword"
                                required/>
                            <label htmlFor="signup-confirm-password">Confirm password</label>
                        </div>

                        <p>{this.state.error ? this.state.error : ""}</p>

                        {this.state.loading ? <p>Loading...</p> : <button id="signup-submit" type="submit">Sign Up</button>}
                    </fieldset>
                </form>
            </section>
        )
    }
}