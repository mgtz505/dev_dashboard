import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
// import { set } from 'immer/dist/internal';

const Motivation = () => {
    const [photo, setPhoto] = useState();
    const [quote, setQuote] = useState([]);

const URL_PHOTO = "https://picsum.photos/300/200.jpg";
const URL_QUOTE = "https://quote-garden.herokuapp.com/api/v3/quotes";

const handleRequest = useCallback(() => {
    setPhoto();
    getPhoto();
    // setQuote();
    getQuote();
},[photo, quote])

const getPhoto = () => {
    axios.get(URL_PHOTO)
    .then((response) => {
        console.log(response.config.url);
        setPhoto(response.config.url); 
    })
}
const getQuote = () => {
    axios.get(URL_QUOTE)
    .then((response) => {
        let text = (response.data.data[0].quoteText);
        let author = (response.data.data[0].quoteAuthor);
        setQuote([text,author])
    })
}

console.log(quote)

    return (
        <div className="widgit">
            <h2>Get Motivated</h2>
            <button onClick={() => handleRequest()}>X</button> 
            <img className="motivation-image" alt="motivationalPhoto" src={photo}/>
            <h3>{quote[0]}</h3>
            <h4>-{quote[1]}</h4>
        </div>
    );
};

export default Motivation;