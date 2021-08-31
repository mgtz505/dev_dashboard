import React, { useState, useCallback } from 'react';
import axios from "axios";
import "../styles/motivation.css";
import ModalContainer from "./ModalContainer";

const Motivation = () => {
    const [photo, setPhoto] = useState();
    const [quote, setQuote] = useState([]);

const URL_PHOTO = "https://picsum.photos/300/200.jpg";
const URL_QUOTE = "https://type.fit/api/quotes";


const description = "Click the 🌟 to display a quote and photo pairing.";
const details = ["Quotes provided via type.fit; photos via picsum", "Bored of the current pairing? Click 🌟 again!"];


const handleRequest = useCallback(() => {
    setPhoto();
    getPhoto();
    setTimeout(() => {
    getQuote();
    }, 500);
}, []);

const getPhoto = () => {
    axios.get(URL_PHOTO)
    .then((response) => {
        setPhoto(response.config.url); 
    })
}
const getQuote = () => {
    setQuote([]);
    axios.get(URL_QUOTE)
    .then((response) => {
        let quoteArray = response.data;
        let randomNum = Math.floor(Math.random() * response.data.length);
        let text = quoteArray[randomNum].text;
        let author = quoteArray[randomNum].author;
        setQuote([text,author]);
    });
};

    return (
        <div className="widgit">
            <ModalContainer title="Let's Get Motivated!" header="For when the coffee just won't cut it..." description={description} details={details}/>
            <div className="banner-container">
            <h2>Get Motivated</h2>
            </div>
            <div className="content">
            <img className="motivation-image" onError={e => e.target.style.display = 'none'} src={photo}/>
            {quote.length > 1 ? (<div className="quote-container">
                <h4>{quote[0]}</h4>
                <h5>{quote[1]}</h5>
            </div>) : null }
            <button className="function-button" onClick={() => handleRequest()}>🌟</button> 
            </div>
        </div>
    );
};

export default Motivation;