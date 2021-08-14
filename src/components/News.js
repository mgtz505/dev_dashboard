import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "./DropDown";
import "../styles/news.css";

const News = () => {
    //State
    const [stories, setStories] = useState([]);
    const [type, setType] = useState("");
    //Function to Call NYT API
    
    const selectType = (e) => setType(e.target.innerText);
    let selector = type.toLowerCase();
  //Global Variables
  const KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.nytimes.com/svc/topstories/v2/${selector}.json?api-key=${KEY}`;

  const getNews = () => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data.results);
        setStories(response.data.results);
      })
      .catch(console.error);
  };
  useEffect(() => {
    getNews();
  }, [type]);

  return (
      <>
    <div className = "widgit">
      <h2>See Today's Top News from the NYT</h2>
        <DropDown selectType={selectType}/>
    <button className = "hide-button" onClick={() => setStories([]) }>Hide Content</button>
    </div>
      {stories.map((story, index) => {
        return (
          <div key={index} className="story-container">
            <h3 className="story-title">{story.title}</h3>
            {/* <img alt="story-image" src={story.multimedia[2].url}/> */}
            <h4 className="story-abstract">{story.abstract}</h4>
            <a className="story-link grow" target="_blank" href={story.short_url}>View on NYT</a>
          </div>
        );
      })}
    </>
  );
};

export default News;
