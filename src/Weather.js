import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import { FaSearch } from 'react-icons/fa';
import sun from './img/sun.png';

export default function Weather() {
    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            date: new Date(response.data.time * 1000),
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            city: response.data.city
        }
        );
    }

    if(weatherData.ready){
        return(
            <div className="Weather">
                <div className="Query">
                    <form id="searchBar">
                        <input
                            type="search"
                            placeholder="Location"
                            autocomplete="off"
                            class="form-control"
                            id="city-input"
                            />
                        <button className="glass-button-icon" type="submit">
                            <FaSearch/>
                        </button>
                    </form>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li className="location-time"><h1>{weatherData.city}</h1></li>
                                <li className="location-time">
                                    <FormattedDate date={weatherData.date}/></li>
                                <br />
                                <li className="weather-conditions text-capitalize">{weatherData.condition}</li>
                                <li className="weather-conditions">Humidity: {weatherData.humidity}%</li>
                                <li className="weather-conditions">Wind: {Math.round(weatherData.wind)} km/h</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                                <div className="row">
                                    <div className="col-12 mb-6">
                                        <img className="weather-icon" src={sun} alt="weather-icon"/>
                                    </div>
                                    <div className="col-6 c-temp">
                                        <div className="current-temp">{Math.round(weatherData.temperature)}<sup className="current-units">ºC</sup></div>
                                    </div>
                                    <div className="col-6 mb-6">
                                        <div className="max-temp">30<sup className="units">ºC</sup></div>
                                        <div className="min-temp">10<sup className="units">ºC</sup></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
    const apiKey = "1059t88f30693a8921307c53o34fadfb";
    let city = "London"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    }
}