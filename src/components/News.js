import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "./DropDown";
import "../styles/news.css";
import ModalContainer from "./ModalContainer";

const News = () => {
    //State
    const [stories, setStories] = useState([]);
    const [type, setType] = useState("");
    const selectType = (e) => setType(e.target.innerText);
    let selector = type.toLowerCase();
  //Global Variables
  const KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.nytimes.com/svc/topstories/v2/${selector}.json?api-key=${KEY}`;

const description = "See today's top stories from the NYT. Click 📰 to see a list of news and entertainment categories for you to browse"
const details = ["All content via the New York Times API", "Clicking a link will open a new broswer window", "Once your stories are displayed, click 🚫 to hide all displayed news stories"]

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
      <ModalContainer title={"News via the New York Times"} header="Stay Informed!" description={description} details={details}/>
        <div className="banner-container">
          <h2>Top News from the NYT</h2>
        </div>
        <DropDown selectType={selectType}/>
    {type ? <button className = "function-button" onClick={() => setStories([]) }>🚫</button> : null}
    </div>
    <div className="rendered-stories-container">

      {stories.map((story, index) => {
        return (
          <div key={index} className="story-container">
            <h3 className="story-title">{story.title}</h3>
            {/* <img alt="story-image" src={story.multimedia[2].url}/> */}
            <h4 className="story-abstract">{story.abstract}</h4>
            <a className="story-link grow" target="_blank" rel="noreferrer" href={story.short_url}>View on NYT</a>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default News;
