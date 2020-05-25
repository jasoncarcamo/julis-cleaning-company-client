import React from "react";
import "./NavBar.css";
import "./hamburger.css";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSparkles, faUser, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import UserToken from "../../Services/UserToken/UserToken";
import UserContext from "../../Context/UserContext/UserContext";

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenWidth: window.innerWidth,
            pageYoffset: window.pageYOffset
        }
    }

    static contextType = UserContext;

    componentDidMount(){
        window.addEventListener("resize", (e)=>{
            this.setState({
                screenWidth: window.innerWidth
            })
        })

        this.mobileNavBarHandler();
        this.handleAccountOptions();
    }

    handleMenuBurger = (e)=>{
        const navSection = document.querySelector("#nav-bar-second-sect > section");
        const button = document.getElementById("nav-burger");

        if(this.state.screenWidth > 770){
            return;
        }

        button.classList.toggle("is-active");

        if(button.classList.contains("is-active")){
            navSection.classList.add("display-nav-bar");
            navSection.classList.remove("hide-nav-bar");
        } else{
            navSection.classList.remove("display-nav-bar");
            navSection.classList.add("hide-nav-bar");
        };
    }

    handleAccountOptions = ()=>{
        const accountSection = document.getElementById("nav-bar-account");
        const accountOptions = document.getElementById("nav-bar-account-options");

        accountSection.addEventListener("mouseenter", (e)=>{
            accountOptions.classList.add("show-account-options");
        });

        accountSection.addEventListener("mouseleave", (e)=>{
            accountOptions.classList.remove("show-account-options");
        });
    }

    mobileNavBarHandler = (e)=>{
        const header = document.getElementsByTagName("header");
        const navLinks = document.querySelector("#nav-bar-second-sect > section")

        navLinks.addEventListener("touchmove", (e)=>{
            e.preventDefault();
        })
        
        let prevYOffset = window.pageYOffset;

        window.addEventListener("scroll", (e)=>{
            let currentYOffset = window.pageYOffset;

            console.log(header)
            if(currentYOffset < prevYOffset){
                header[0].classList.add("show-header");
                header[0].classList.remove("hide-header");
            } else{
                header[0].classList.remove("show-header");
                header[0].classList.add("hide-header");
            }

            prevYOffset = currentYOffset;
        })
    }

    isLoggedIn = ()=>{
        if(UserToken.hasToken()){
            return(
                <>
                    <li className="nav-bar-account-opt">
                        <NavLink 
                            to="/user"
                            onClick={this.handleAccountOpt}>My Account</NavLink>
                    </li>
                    
                    <li className="nav-bar-account-opt">
                        <NavLink 
                            to="/user/my-bookings"
                            onClick={this.handleAccountOpt}>My Bookings</NavLink>
                    </li>

                    <li className="nav-bar-account-opt" style={{
                        borderTop: ".07em solid lightgrey"
                    }}
                    onClick={this.handleLogoff}>
                        Log off
                    </li>
                </>
            )
        } else{
            return (
                <>
                    <li className="nav-bar-account-opt">
                        <NavLink 
                            to="/login"
                            onClick={this.handleAccountOpt}>log In</NavLink>
                    </li>

                    <li className="nav-bar-account-opt">
                        <NavLink 
                            to="/signup"
                            onClick={this.handleAccountOpt}>Sign Up</NavLink>
                    </li>
                </>
            )
        }
    }

    handleAccountOpt = ()=>{
        const accountOptions = document.getElementById("nav-bar-account-options");
        const navSection = document.querySelector("#nav-bar-second-sect > section");
        const button = document.getElementById("nav-burger");

        accountOptions.classList.remove("show-account-options");
        
        if(this.state.screenWidth > 770){
            return;
        };

        button.classList.toggle("is-active");

        navSection.classList.remove("display-nav-bar");
        navSection.classList.add("hide-nav-bar");

        this.props.history.push("/");
    }

    handleLogoff = (e)=>{

        UserToken.deleteToken();

        this.context.refreshUserContext()
            .then( refreshed =>{
                this.handleAccountOpt();
            });
    }

    toHome = (e)=>{
        this.props.history.push("/");
    }

    render(){

        return(
            <header>
                <nav id="nav-bar">
                    <section id="brand-container">
                        <section id='nav-bar-icon'>
                            <FontAwesomeIcon 
                                icon={faHandSparkles}
                                onClick={this.toHome}/>
                        </section>

                        <section 
                            id="nav-bar-header"
                            onClick={this.toHome}>
                            <h1>Julis Cleaning Company</h1>
                            <p>HOME CLEANING PROFESSIONALS</p>
                        </section>
                    </section>
                    
                    <button id="nav-burger" className="hamburger hamburger--collapse" type="button" onClick={this.handleMenuBurger}>
                        <span className="hamburger-box" >
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <section id="nav-bar-second-sect">

                        <section>
                            <ul id="nav-links">
                                <li>
                                    <NavLink to="/" onClick={this.handleMenuBurger}>Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/book" onClick={this.handleMenuBurger}>Book Online</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/about" onClick={this.handleMenuBurger}>About Us</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/contact" onClick={this.handleMenuBurger}>Contact</NavLink>
                                </li>
                            </ul>

                            <section id="nav-bar-account">
                                <section id="nav-bar-user-icon">
                                    <div>
                                        <FontAwesomeIcon className="nav-bar-user-icon-profile" icon={faUser}/>
                                    </div>

                                    <FontAwesomeIcon className="nav-bar-user-icon-btn" icon={faChevronDown}/>
                                </section>
                                
                                <section id="nav-bar-account-options">
                                    <ul>
                                        {this.isLoggedIn()}
                                    </ul>
                                    
                                </section>
                            </section>
                        </section>

                        <ul id="social-bar">
                            <li>
                                <a href="https://facebook.com/juliscleaningcompany" target="_blank"><FontAwesomeIcon className="social-bar-icon" icon={faFacebookF}/></a>
                            </li>

                            <li>
                            <FontAwesomeIcon className="social-bar-icon" icon={faTwitter}/>
                            </li>

                            <li>
                            <FontAwesomeIcon className="social-bar-icon" icon={faInstagram}/>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        )
    }
}