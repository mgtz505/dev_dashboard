import React, { useState } from 'react';
import "../styles/reminder.css";

const Reminder = ({date}) => {
    const [reminders, setReminders] = useState([]);
    const [value, setValue] = useState("");

    const addReminder = (date,text) => {
        const newReminders = [...reminders, {date, text}];
        setReminders(newReminders);
        setValue("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addReminder(date, value);
    }

    const handleDelete = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index,1);
        setReminders(newReminders);
    }
  
return (
    <>
        <div className="reminder-form-container">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={value}
                placeholder="Enter a reminder..."
                onChange={(e) => setValue(e.target.value)}>
                </input>
            </form>
        </div>
            <div>
                {reminders.map((reminder, index) => {
                    return (
                        <div className="reminder-container">
                            <h4>{reminder.date}<h4>
                            </h4>{reminder.text}</h4>
                            <button className="button-reminder" onClick={() => handleDelete(index)}>🗑</button> 
                        </div>
                    )
                })}
            </div>
        
        </>
    );
};

export default Reminder;