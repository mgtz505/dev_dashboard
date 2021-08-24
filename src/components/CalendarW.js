import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/calendarw.css";


const CalendarW = () => {

    const [date, setDate] = useState("");

    return (
        <div className="widgit">
            <div className="banner-container">
                <h2>Calendar</h2>
            </div>
            <div className="calendar-container">
                <Calendar className="calendar" onChange={setDate} value={date}/>
            </div>
            {date ? <h3>Selected Date: {date.toString().slice(0,15)}</h3> : null}

        </div>
    );
};

export default CalendarW;