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
            time: ""
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

    nextDay = ()=>{
        const tomorrow = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(9);
        tomorrow.setMinutes(0);
        tomorrow.setMilliseconds(0);

        return tomorrow;
    }

    render(){

        return (
            <section id="choose-date-section">
                <section>
                    <h3>Schedule</h3>
                    
                    <Calendar
                        calendarType={"US"}
                        tileClassName="calendar-tile"
                        className="calendar"
                        minDate={this.nextDay()}
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

                    <button className="next-btn" onClick={this.props.handleNextStep}>Next</button>
                </section>
            </section>
        )
    }
}