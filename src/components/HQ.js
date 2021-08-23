import React from 'react';
import "../styles/hq.css";
import News from "./News";
import Pomodoro from "./Pomodoro";
import List from "./List";
import Motivation from "./Motivation";
import Editor from "./Editor";
import Github from "./GitHub";
import Weather from "./Weather";
import Loripsum from './Loripsum';


const HQ = () => {
    return (
        <>
        <h2>What are we going to build Today?</h2>
        <div className="widgit-grid">
            <Pomodoro />
            <News />
            <List />
            <Motivation />
            <Editor />
            <Github />
            <Weather />
            <Loripsum />
        </div>
        </>
    );
};

export default HQ;