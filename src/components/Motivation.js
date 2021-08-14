import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
// import { set } from 'immer/dist/internal';

const Motivation = () => {
    const [photo, setPhoto] = useState();

const URL = "https://picsum.photos/300/200.jpg";

const handleRequest = useCallback(() => {
    setPhoto();
    getPhoto();
},[photo])

const getPhoto = () => {
    axios.get(URL)
    .then((response) => {
        console.log(response.config.url);
        setPhoto(response.config.url);
        
    })
}


console.log(photo)
    return (
        <div className="widgit">
            <h2>Get Motivated</h2>
            <button onClick={() => handleRequest()}>X</button> 
            <img className="motivation-image" alt="motivationalPhoto" src={photo}/>
        </div>
    );
};

export default Motivation;