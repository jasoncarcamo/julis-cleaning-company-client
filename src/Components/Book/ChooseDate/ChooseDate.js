import React from "react";
import "./ChooseDate.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TimePicker from "react-time-picker";

export default class ChooseDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            time: "",
            validTime: ""
        }
    }

    handleDate = (date)=>{
        let newState = this.state;

        newState.date = date;

        this.setState({
            date
        });

        this.props.setInfo(newState)
    }

    formatTime = (time)=>{
        let newTime;
        const arr = time.split(':');

        if(arr[0] > 12){
            arr[0] = arr[0] - 12 ;
            newTime = arr.join(':') + ' PM';
        } else if(arr[0] === '00'){
            arr[0] = '12'
            newTime = arr.join(':') + ' AM'
        } else if(arr[0] === '12'){
            newTime = arr.join(':') + ' PM'
        }
        else{
            newTime = arr.join(':') + ' AM';
        }
        return newTime;
    }

    handleTime = (time)=>{
        let newState = this.state;

        newState.time = this.formatTime(time);

        this.setState({
            time: this.formatTime(time),
            validTime: time
        });

        this.props.setInfo(newState);
    }

    render(){
        console.log(this.state)
        return (
            <section id="choose-date-section">
                <section>
                    <h3>Schedule</h3>
                    
                    <Calendar
                        calendarType={"US"}
                        minDate={new Date()}
                        tileClassName="calendar-tile"
                        className="calendar"
                        value={this.state.date} onChange={this.handleDate}/>

                    <section>
                        <p>Choose Time</p>
                        <TimePicker
                            disableClock={true}
                            clockClassName="clock"
                            clockIcon={null}
                            onChange={this.handleTime}
                            value={this.state.validTime}
                            />
                    </section>
                </section>
            </section>
        )
    }
}