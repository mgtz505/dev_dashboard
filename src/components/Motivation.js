import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import "../styles/motivation.css"

const Motivation = () => {
    const [photo, setPhoto] = useState();
    const [quote, setQuote] = useState([]);

const URL_PHOTO = "https://picsum.photos/300/200.jpg";
const URL_QUOTE = "https://type.fit/api/quotes";

const handleRequest = useCallback(() => {
    setPhoto();
    getPhoto();
    setTimeout(() => {
    getQuote();
    }, 500)
}, [])

const getPhoto = () => {
    axios.get(URL_PHOTO)
    .then((response) => {
        console.log(response)
        setPhoto(response.config.url); 
    })
}
const getQuote = () => {
    setQuote([])
    axios.get(URL_QUOTE)
    .then((response) => {
        console.log(response)
        let quoteArray = response.data
        let randomNum = Math.floor(Math.random() * response.data.length)
        let text = quoteArray[randomNum].text
        let author = quoteArray[randomNum].author
        setQuote([text,author]);
    })
}

console.log(quote)

    return (
        <div className="widgit">
            <h2>Get Motivated</h2>
            <img className="motivation-image" onError={e => e.target.style.display = 'none'} src={photo}/>
            {quote.length > 1 ? (<div className="quote-container">
                <h3>{quote[0]}</h3>
                <h4>-{quote[1]}</h4>
            </div>) : null }
            <button className="function-button" onClick={() => handleRequest()}>🌟</button> 
        </div>
    );
};

export default Motivation;