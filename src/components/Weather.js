import React, { useState } from 'react';
import axios from "axios";

const Weather = () => {

const [weatherData, setWeatherData] = useState();

const URL = "http://wttr.in/London?format=j1"

const getWeather = () => {
    axios.get(URL).then((response) => {
        console.log(response.data)
        console.log(response.data.current_condition[0].FeelsLikeF)
        setWeatherData(response.data)
    })
}
console.log(weatherData);

    return (
        <div className="widgit">
            <h2>See Weather</h2>
           {weatherData ? (
               <div className="weather-data">
                   <h3>{weatherData.current_condition[0].FeelsLikeF}</h3>
               </div>
           )
            : null}
            
            <button className="control-button" onClick={() => getWeather()}>Get Weather</button>
        </div>
    );
};

export default Weather;