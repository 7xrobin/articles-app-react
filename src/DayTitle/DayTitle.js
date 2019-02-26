import React from 'react';
import './daytitle.css'
import Title from '../Title/Title'

class DayTitle extends React.Component{
    constructor(){
        super();
        let today = new Date(),
            day = today.getDay();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        this.state ={
            day: weekday[day],
            date: monthNames[today.getMonth()] + " " + today.getDate() + "th",
        };
    }
    render(){
        return(
            <Title text={
                <div>
                    <p className="h-top">{this.state.day}</p>
                    <p className="h-sub">{this.state.date}</p>
                </div>
            }/>
        );
    }
}
export default DayTitle;