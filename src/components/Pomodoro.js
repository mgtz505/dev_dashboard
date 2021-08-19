import React, { useState, useEffect } from 'react';
import "../styles/pomodoro.css";

const Pomodoro = () => {
const [minutes, setMinutes] = useState(25);
const [seconds, setSeconds] = useState(0);
const [message, setMessage] = useState(false);

const [paused, setPaused] = useState(false);

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;



useEffect(() => {
    let interval = setInterval(() => {
        clearInterval(interval)
        if (!paused){

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = message ? 24 : 4
            let seconds = 59

            setSeconds(seconds);
            setMinutes(minutes);
            setMessage(!message);
          }
        } else {
         setSeconds(seconds - 1);
        }
        }
      }, 1000)
    }, );

    return (
        <div className="widgit">
            <div className="timer-body">
            <h2>Pomodoro Timer</h2>
                <div className="message-body">
                    {message && <h3>Break! Resume in:</h3>}
                </div>
                <div className="timer-body">
                    <h3 style={{color: paused ? "blue" : null}}>{timerMinutes}:{timerSeconds}</h3>
                </div>
                <div className="control-panel">
                    <button 
                    className="function-button">🔄</button>
                    <button onClick={() => setPaused(!paused)}className="function-button">⏯️</button>
                </div>
            </div>
        </div>
    );
};

export default Pomodoro