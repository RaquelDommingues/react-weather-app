import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FaSearch } from "react-icons/fa";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      city: response.data.city,
    });
  }

  function handleForecastResponse(response) {
    setForecastData({
      ready: true,
      info: response.data.daily,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1059t88f30693a8921307c53o34fadfb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrlForecast).then(handleForecastResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Query">
          <form id="searchBar" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Location"
              autoComplete="off"
              className="form-control"
              id="city-input"
              onChange={handleCityChange}
            />
            <button className="glass-button-icon" type="submit">
              <FaSearch />
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <hr />
          {forecastData.ready && <WeatherForecast info={forecastData.info} />}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
