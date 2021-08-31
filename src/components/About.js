import React from 'react';
import "../styles/about.css";
import about from "../styles/images/about.jpg"

const About = () => {
    return (
        <div className="aboutPage">
            <br></br>
        <div className="about-container">
            <div className="about-text-container">
            <h2 className="about-header">Dev Dasboard keeps you <span style={{textDecoration: "underline"}}>focused and productive</span> while you code</h2>
                <ul>
                    <li>✔️ Easily Distracted? Focus with built-in productivity widgets, including a handy pomodoro timer and scratchpad</li>
                    <li>✔️ Taking a quick break? Browse the news via the integrated NYT news feed</li>
                    <li>✔️ Keep track of all your commits in one handy widget via the GitHub Commit Buddy </li>
                    <li>✔️ Stay atop your workflow with dated reminders and a dynamic to-do list</li>
                    <li>✔️ Stepping outside for lunch? Check the weather before you go!</li>
                </ul>
            </div>
            <img className="about-image" src={about} />            
            </div>
        </div>
    );
};

export default About;