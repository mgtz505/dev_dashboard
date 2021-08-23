import React, { useState } from 'react';
import axios from "axios";

const Loripsum = () => {

    
    const generateText = () => {
    const URL = "https://loripsum.net/api";

    axios.get(URL).then((response) => {
        console.log(response)
    })
    
}

    return (
        <div className="widgit">
            <h2>Loripsum Generator</h2>

            <button onClick={() => generateText()}>Get Data</button>
        </div>
    );
};

export default Loripsum;