import React, { useState, useEffect } from 'react';
import "../styles/pomodoro.css";
import ModalContainer from './ModalContainer';

const Pomodoro = () => {
const [minutes, setMinutes] = useState(25);
const [seconds, setSeconds] = useState(0);
const [message, setMessage] = useState(false);
const [paused, setPaused] = useState(false);

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

const description = "The Pomodoro method is a classic productivity hack. Buckle-in for a 25 minute focused sprint, then decompress for five minutes. Rinse and repeat."
const details = ["Clicking ⏯️ will also allow you to reset the timer by clicking 🔄", "The timer's font color will change to blue while paused"]

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
        <div className="widgit-tall">
          <ModalContainer title="Pomodoro Timer" header="For when time is of the essence!" description={description} details={details}/>
              <div className="banner-container">
                <h2>Pomodoro Timer</h2>
              </div>
            <div className="timer-body">
                <div className="message-body">
                    {message && <h3>Break!</h3>}
                </div>
                <div className="timer-body">
                    <h1 className="time-text" style={{color: paused ? "#577590" : null}}>{timerMinutes}:{timerSeconds}</h1>
                </div>
                    {paused ? <button
                    onClick={() => handleReset()}
                    className="function-button-reset" 
                    >🔄</button> : null}
                    <button className="function-button" onClick={() => setPaused(!paused)}>⏯️</button>
            </div>
        </div>
    );
};

export default Pomodoro