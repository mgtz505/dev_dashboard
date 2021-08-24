import React, { useState } from 'react';
import "../styles/reminder.css";

const Reminder = ({date}) => {
    const [reminders, setReminders] = useState([]);
    const [value, setValue] = useState("");

    // console.log(date, value)

    const addReminder = (date,text) => {
        const newReminders = [...reminders, {date, text}];
        setReminders(newReminders);
        setValue("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, value)
        addReminder(date, value);
    }

console.log(reminders)
  
return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={value}
                placeholder="Enter a reminder..."
                onChange={(e) => setValue(e.target.value)}>
                </input>
            </form>
            <div>
                {reminders.map((reminder) => {
                    return (
                        <div className="reminder-container">
                        <h4>{reminder.date} - {reminder.text}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Reminder;