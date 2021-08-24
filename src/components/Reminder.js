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

    const handleDelete = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index,1);
        setReminders(newReminders);
    }
  
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
                {reminders.map((reminder, index) => {
                    return (
                        <div className="reminder-container">
                            <h4>{reminder.date} - {reminder.text}</h4>
                            <button className="function-button" onClick={() => handleDelete(index)}>🗑</button> 
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Reminder;