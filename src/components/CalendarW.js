import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/calendarw.css";
import Reminder from "./Reminder";
import ModalContainer from "./ModalContainer";


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
            <ModalContainer />
            <div className="calendar-container">
                <Calendar className="calendar" onChange={setDate} value={date}/>
            </div>
            <div className="reminder-body-start">
            {date ? <h3>Selected: {handleDate(date)}</h3> : null}
            <Reminder date={handleDate(date)} />
            </div>
        </div>
    );
};

export default CalendarW;