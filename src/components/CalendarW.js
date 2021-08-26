import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/calendarw.css";
import Reminder from "./Reminder";


const CalendarW = () => {

    const [date, setDate] = useState("");

    const handleDate = (date) => {
         date = date.toString()
         date = date.slice(0,3) + ", " + date.slice(3,10) + ", " + date.slice(10,15)
         return date
    }

    return (
        <div className="widgit-tall">
            <div className="banner-container">
                <h2>Reminders</h2>
            </div>
            <div className="calendar-container">
                <Calendar className="calendar" onChange={setDate} value={date}/>
            </div>
            {date ? (
            <div>
            <h3>Selected Date: {handleDate(date)}</h3>
            <Reminder date={handleDate(date)} />
            </div>
            ) : null}

        </div>
    );
};

export default CalendarW;