import React from 'react';
import axios from "axios"

//Global Variables
const KEY = process.env.REACT_APP_API_KEY
const URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${KEY}`


const getNews = () => {
   
     axios.get(URL).then((response) => {
         console.log(response)
     })
     .catch(console.error)
}
getNews()

const News = () => {
    return (
        <div>
            <h2>See Today's Top News from the NYT</h2>
        </div>
    );
};

export default News;