import React from "react";
import "./User.css";
import {Route, NavLink} from "react-router-dom";
import UserToken from "../../Services/UserToken/UserToken";
import UserContext from "../../Context/UserContext/UserContext"; 
import MyAccount from "./MyAccount/MyAccount";
import MyBookkings from "./MyBookings/MyBookings";

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    static contextType = UserContext;

    componentDidMount(){
        if(!UserToken.hasToken()){
            this.props.history.push("/login");
        };
    }

    render(){
        
        return (
            <section id="user-section">
                <section id="user-section-opts-container">
                    <section>
                        <p>
                            <strong>
                                Hello {this.context.user.first_name} {this.context.user.last_name}
                            </strong>
                        </p>
                    </section>

                    <ul id="user-section-opt-list-container">
                        <li className="user-section-opt">
                            <NavLink 
                                exact to="/user"
                                activeStyle={{
                                    color: "rgb(137, 196, 242)"
                                }}>
                                My Account
                            </NavLink>
                        </li>

                        <li className="user-section-opt">
                            <NavLink 
                                exact
                                to="/user/my-bookings"
                                activeStyle={{
                                    color: "rgb(137, 196, 242)"
                                }}>
                                My Bookings
                            </NavLink>
                        </li>
                    </ul>
                </section>

                <Route exact path="/user" component={MyAccount}></Route>
                <Route exact path="/user/my-bookings" component={MyBookkings}></Route>
                
            </section>
        )
    }
}