import React from "react";
import "./SixthSection.css";

export default class SixthSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            loading: false,
            success: false,
            error: ""
        }
    };

    handleEmail = (e)=>{
        this.setState({
            email: e.target.value
        });
    };

    handlSubmit = (e) =>{
        e.preventDefault();

        this.setState({
            loading: true
        });

        fetch("http://localhost:8000/api/subscribe", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                email: this.state.email
            })
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                
                this.setState({
                    loading: false,
                    success: true,
                    error: ""
                });
            })
            .catch( err => this.setState({ 
                error: err.error,
                loading: false
            }))
    }

    renderLoading =() => {
        return <p>Loading...</p>
    }

    resetForm = ()=>{
        this.setState({
            email: "",
            loading: false,
            success: false,
            error: ""
        })
    }

    success = ()=>{
        return (
            <div>
                <p>You have successfully subscribed!</p>
                <button onClick={this.resetForm} type="button">Ok</button>
            </div>
        )
    }

    render(){
        return(
            <section id="sixth-section">
                <h3>Enter your email for a response from our team</h3>

                <form id="sixth-section-form" onSubmit={this.handlSubmit}>
                    <fieldset id="sixth-section-fieldset">

                        <label htmlFor="sixth-section-email">Subscribe</label>
                        <div>
                            <input 
                                type="text" 
                                id="sixth-section-email" 
                                placeholder="Enter your email here" 
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required/>

                            <p>{this.state.error ? this.state.error : ""}</p>

                            {this.state.success ? this.success() : ""}

                            {this.state.loading && !this.state.success ? this.renderLoading() : ""}

                            {!this.state.loading && !this.state.success ? <button id="sixth-section-submit" type="submit">Submit</button> : ""}
                        </div>
                    </fieldset>
                </form>
            </section>
        )
    }
}