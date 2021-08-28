import React from 'react';
import "../styles/me.css";
import "../styles/about.css";
import nyc from "../styles/images/nyc.jpg"


const Me = () => {
    return (
        <div className="aboutPage">
            <div className="aboutPage">

<br></br>
<div className="about-container">
<div className="about-text-container">
<h2 className="about-header">Thanks for checking out Dev Dashboard!</h2>
    <h3>I'm Marcus Gutierrez | A little about me:</h3>
    <ul>
        <li>✔️ I'm an aspiring software engineer with a passion for the Front End</li>
        <li>✔️ I made a career shift from finance after nearly four years as a proprietary trader</li>
        <li>✔️ I graduated from Harvard in 2017, concentrating in Economics with a secondary in Global Health & Health Policy </li>
        <li>✔️ I'm looking to kickstart my SWE career in the NYC metro area, or perhaps working for a remote team</li>
        <li>✔️ I love to learn in public! Follow the link below to see what I've been working on</li>
        <a href="https://github.com/mgtz505" target="_blank" rel="noreferrer">My GitHub Profile</a>
       
    </ul>
</div>
<img className="about-image" src={nyc} />  
</div>
</div>
        </div>
    );
};

export default Me;