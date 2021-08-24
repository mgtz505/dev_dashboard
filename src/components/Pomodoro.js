import React, { useState, useEffect } from 'react';
import "../styles/pomodoro.css";

const Pomodoro = () => {
const [minutes, setMinutes] = useState(25);
const [seconds, setSeconds] = useState(0);
const [message, setMessage] = useState(false);

const [paused, setPaused] = useState(false);

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

const handleReset = () => {
  setMinutes(currMin => currMin = 25);
  setSeconds(currSec => currSec = 0);
}

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
              <div className="banner-container">
                <h2>Pomodoro Timer</h2>
              </div>
            <div className="timer-body">
                <div className="message-body">
                    {message && <h3>Break! Resume in:</h3>}
                </div>
                <div className="timer-body">
                    <h1 className="time-text" style={{color: paused ? "#577590" : null}}>{timerMinutes}:{timerSeconds}</h1>
                </div>
                    {paused ? <button
                    onClick={() => handleReset()} 
                    >🔄</button> : null}
                    <button onClick={() => setPaused(!paused)}>⏯️</button>
            </div>
        </div>
    );
};

export default Pomodoro