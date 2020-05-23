import React from "react";
import UserToken from "../../Services/UserToken/UserToken";

const UserBookingsContext = React.createContext({
    bookings: [],
    completeBooking: ()=>{},
    deleteBook: ()=>{}
});

export default UserBookingsContext;

export class UserBookingsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookings: [],
            error: ""
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:8000/api/bookings", {
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
                    bookings: resData.bookings
                });

            })
            .catch( err => this.setState({
                error: err.error
            }))
    };

    completeBooking = (newBookings)=>{
        const newBooking = [...this.state.bookings, newBookings];

        this.setState({
            bookings: newBooking
        });

        this.componentDidMount();
    }

    deleteBook = (id)=>{
        console.log(id);
        let bookings = this.state.bookings;
        let oldBookings = this.state.bookings;
        let index;

        bookings = bookings.filter( book => book.id === id);

        index = oldBookings.indexOf(bookings[0]);

        console.log(oldBookings);

        oldBookings.splice(index, 1);

        this.setState({
            bookings: oldBookings
        });

        this.componentDidMount();
    }

    render(){
        const value = {
            bookings: this.state.bookings,
            completeBooking: this.completeBooking,
            deleteBook: this.deleteBook
        };
        console.log(this.state)
        return (
            <UserBookingsContext.Provider value={value}>
                {this.props.children}
            </UserBookingsContext.Provider>
        )
    }
}