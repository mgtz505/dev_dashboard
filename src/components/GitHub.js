import React, { useState } from 'react';
import axios from "axios";

const URL = "https://api.github.com/users/mgtz505";

const GitHub = () => {
    const[ghData, setGhData] = useState()

    const getGitHubData = () => {
        axios.get(URL)
        .then((response => {
            console.log(response);
            setGhData(response.data)
        }))
    }

console.log(process.env.REACT_APP_GH_KEY)

    return (
        <div className="widgit">
            <h2>GitHub</h2>
            <button onClick={() => getGitHubData()}>Get GH Data</button>
        </div>
    );
};

export default GitHub;