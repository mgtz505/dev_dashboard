import React from 'react';
import "../styles/hq.css";
import News from "./News";
import Pomodoro from "./Pomodoro";
import List from "./List";
import Motivation from "./Motivation";
import Editor from "./Editor";
import Github from "./GitHub";
import Weather from "./Weather";
import CalendarW from "./CalendarW";


const HQ = () => {
    return (
        
        <div className="widgit-grid">
            <Pomodoro />
            <News />
            <Editor />
            <List />
            <CalendarW />
            <Github />
            <Motivation />
            <Weather />
        </div>
        
    );
};

export default HQ;