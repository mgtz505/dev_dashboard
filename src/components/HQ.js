import React from 'react';
import News from "./News";
import Pomodoro from "./Pomodoro";
import List from "./List";


const HQ = () => {
    return (
        <div className="widgit-grid">
            <h2>What are we going to build Today?</h2>
            <Pomodoro />
            <News />
            <List />
        </div>
    );
};

export default HQ;