import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/weather.css";
import formatTime from './formatTime';

const Weather = () => {

const [weatherData, setWeatherData] = useState();
const [seeForecast, setSeeForecast] = useState(false);
const [city, setCity] = useState("");
const [value, setValue] = useState("");
const [callAPI, setCallAPI] = useState(false);

useEffect(() => {
    const URL = `http://wttr.in/${city}?format=j1`
    axios.get(URL).then((response) => {
        setWeatherData(response.data)
    })
    
}, [callAPI, city])


    const handleSubmit = (e) => {
        e.preventDefault();
        setCallAPI(true)
        setCity(value);
        setCallAPI(false);
        setSeeForecast(false);
    }

    return (
        <div className="widgit-long">
            <div className="banner-container">
            {city.length > 1 ?<h2> Current Weather for {city}</h2> : <h2>Your Local Weather</h2>}
            </div>
            <div className="city-form">
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="City Name..."
                    city={city}
                    onChange={(e) => setValue(e.target.value)}>
                    </input>
                </form>
            </div>
           {weatherData ? (
               <>
               <div className="weather-container">
                        <h3 className="container-header">Currently: {weatherData.current_condition[0].weatherDesc[0].value}</h3>
                   <div className="grouping">
                   <h4>Actual Temp: {weatherData.current_condition[0].temp_F}°F | {weatherData.current_condition[0].temp_C}°C</h4>
                   <h4>Feels like: {weatherData.current_condition[0].FeelsLikeF}°F | {weatherData.current_condition[0].FeelsLikeC}°C </h4>
                   <h4>Humidity: {weatherData.current_condition[0].humidity}%</h4>
                   <h4>Wind Speed: {weatherData.current_condition[0].windspeedMiles} mph</h4>
                   </div>
               </div>
               <div className="weather-container">
                    <h3 className="container-header">Today</h3>
                    <div className="grouping">
                        <h4>High: {weatherData.weather[0].maxtempF}°F | {weatherData.weather[0].maxtempC}°C </h4>
                        <h4>Low: {weatherData.weather[0].mintempF}°F | {weatherData.weather[0].mintempC}°C </h4>
                    </div>
                </div>
                <button className="forecast-toggle" onClick={() => setSeeForecast(!seeForecast)}>{seeForecast ? "Hide" : "See"} Detailed Forecast</button>
                { seeForecast ? (
                <div>
                    {weatherData.weather.map((days, index) => {
                        return (
                            <div className="weather-container" key ={index}>
                                <h3 className="container-header">Summary for {days.date.slice(5)}</h3>
                                <div className="grouping">
                                    <h4>High: {days.maxtempF}°F | {days.maxtempC}°C</h4>
                                    <h4>Low: {days.mintempF}°F | {days.mintempC}°C</h4>
                                </div>
                                <div className="forecast-container">
                                    {days.hourly.map((hour) => {
                                        return (
                                                <div className="hour-container">
                                                    <h3 className="container-header">{formatTime(hour.time)}</h3>
                                                    <div className="grouping-details">
                                                            <h5 className="datum">{hour.weatherDesc[0].value} </h5>
                                                            <h5 className="datum">Feels Like: {hour.FeelsLikeF}°F | {hour.FeelsLikeC}°C</h5>
                                                            <h5 className="datum">Gusts: {hour.WindGustMiles} mph </h5>
                                                            <h5 className="datum">Chance of Rain: {hour.chanceofrain}% </h5>
                                                    </div>
                                                </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )})}
                </div>
                ) : null }

               </>
           )
            : null}
            {/* <button className="control-button" onClick={() => getWeather()}>Get Weather</button> */}
        </div>
    );
};

export default Weather;