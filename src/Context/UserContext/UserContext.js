import React from "react";
import UserToken from "../../Services/UserToken/UserToken";

const UserContext = React.createContext({
    user: {},
    refreshUserContext: ()=>{}
});

export default UserContext;

export class UserProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {},
            error: ""
        }
    }

    componentDidMount(){
        if(UserToken.hasToken()){
            return fetch("https://vast-atoll-11346.herokuapp.com/api/user", {
                headers: {
                    'content-type': "application/json",
                    'authorization': `bearer ${UserToken.getToken()}`
                }
            })
                .then( res => {
                    if(!res.ok){
                        return res.json().then( e => Promise.reject(e));
                    };

                    return res.json();
                })
                .then( resData => {
                    this.setState({
                        user: resData.user
                    });

                    return true;
                })
                .catch( err => {
                    this.setState({
                        error: err.error
                    })

                    return false;
                })
        } else{
            this.setState({
                user: {},
                error: ""
            });

            return false;
        }
    }

    refreshUserContext = async ()=>{
        return await this.componentDidMount();
    }

    render(){
        const value = {
            user: this.state.user,
            refreshUserContext: this.refreshUserContext
        };

        return(
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}