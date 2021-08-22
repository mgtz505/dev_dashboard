import React, { useState } from 'react';
import axios from "axios";
import "../styles/weather.css";

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
               <>
               <div className="weather-container">
                   <h3>Currently</h3>
                   <h4>Actual Temp: {weatherData.current_condition[0].temp_F}°F | {weatherData.current_condition[0].temp_C}°C</h4>
                   <h4>Humidity: {weatherData.current_condition[0].humidity}%</h4>
                   <h4>Feels like: {weatherData.current_condition[0].FeelsLikeF}°F | {weatherData.current_condition[0].FeelsLikeC}°C </h4>
               </div>
               <div className="weather-container">
                    <h3>Today</h3>
                    <h4>High: {weatherData.weather[0].maxtempF}°F | {weatherData.weather[0].maxtempC}°C </h4>
                    <h4>Average: {weatherData.weather[0].avgtempF}°F | {weatherData.weather[0].avgtempC}°C </h4>
                    <h4>Low: {weatherData.weather[0].mintempF}°F | {weatherData.weather[0].mintempC}°C </h4>
                </div>
                <div >
                    {weatherData.weather.map((days, index) => {
                        return (
                            <div className="forecast-container" key ={index}>
                            <h4>Forecast for {days.date.slice(5)}</h4>
                            <h4>High: {days.maxtempF}°F | {days.maxtempC}°C</h4>
                            <h4>Avg: {days.avgtempF}°F | {days.avgtempC}°C</h4>
                            <h4>Low: {days.mintempF}°F | {days.mintempC}°C</h4>
                            <h4>Forecast:</h4>
                            <div className="hour-container">
                                {days.hourly.map((hour) => {
                                    return (
                                        <>  
                                            <h5>{hour.time}</h5>
                                            <h5>{hour.FeelsLikeF}</h5>
                                        </>
                                    )
                                })}
                            </div>
                            </div>
                        )})}
                </div>

               </>
           )
            : null}
            
            <button className="control-button" onClick={() => getWeather()}>Get Weather</button>
        </div>
    );
};

export default Weather;