import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "./DropDown";

const News = () => {
  //Global Variables
  const KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${KEY}`;

  //State
  const [stories, setStories] = useState([]);
  const [type, setType] = useState("");
  //Function to Call NYT API
  
  const selectType = (e) => setType(e.target.innerText);
  let selector = type.toLowerCase();
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
    <div>
      <h2>See Today's Top News from the NYT</h2>
        <DropDown selectType={selectType}/>
      {stories.map((story, index) => {
        return (
          <div key={index} className="story-container">
            <h3 className="story-title">{story.title}</h3>
            <h4 className="story-abstract">{story.abstract}</h4>
            <img alt="storyimage" src={story.multimedia[0].url}/>
            <a target="_blank" href={story.short_url}>View on NYT</a>
          </div>
        );
      })}
    </div>
  );
};

export default News;
