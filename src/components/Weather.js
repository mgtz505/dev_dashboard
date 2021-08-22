import React, { useState } from 'react';
import axios from "axios";
import "../styles/weather.css";
import formatTime from './formatTime';

const Weather = () => {

const [weatherData, setWeatherData] = useState();
const [seeForecast, setSeeForecast] = useState(false);
const [city, setCity] = useState("");
const [callAPI, setCallAPI] = useState(false);

const URL = "http://wttr.in/London?format=j1"

const getWeather = () => {
    axios.get(URL).then((response) => {
        setWeatherData(response.data)
    })
}
console.log(weatherData);

console.log(city)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!city) return;
        setCallAPI(true)
        setCity("");
    }

    return (
        <div className="widgit">
            <h2>See Weather</h2>
            <div className="city-form">
                <form>
                    <input
                    type="text"
                    placeholder="City Name..."
                    city={city}
                    onChange={(e) => setCity(e.target.value)}>
                    </input>
                </form>
            </div>
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
                <button 
                className="control-button" 
                onClick={() => setSeeForecast(!seeForecast)}>{seeForecast ? "Hide" : "See"} Detailed Forecast</button>
                { seeForecast ? (
                <div>
                    {weatherData.weather.map((days, index) => {
                        return (
                            <div className="forecast-container" key ={index}>
                            <h4>Summary for {days.date.slice(5)}</h4>
                            <h4>High: {days.maxtempF}°F | {days.maxtempC}°C</h4>
                            <h4>Avg: {days.avgtempF}°F | {days.avgtempC}°C</h4>
                            <h4>Low: {days.mintempF}°F | {days.mintempC}°C</h4>
                            <h4>Hourly Forecast:</h4>
                                <div>
                                    {days.hourly.map((hour) => {
                                        return (
                                                <div className="hour-container">
                                                    <h3>{formatTime(hour.time)}</h3>
                                                    <h4>{hour.weatherDesc[0].value} {hour.tempF}°F | {hour.tempC}°C</h4>
                                                    <h5>Feels like: {hour.FeelsLikeF}°F | {hour.FeelsLikeC}°C</h5>
                                                    <h5>Gusts: {hour.WindGustMiles} mph | WindChill: {hour.WindChillF}°F | {hour.WindChillC}°C</h5>
                                                    <h5>Chance of Rain: {hour.chanceofrain}% | Precipitation: {hour.precipInches} in. </h5>
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
            <button className="control-button" onClick={() => getWeather()}>Get Weather</button>
        </div>
    );
};

export default Weather;