import React from "react";
import FormattedDate from "./FormattedDate";
import sun from './img/sun.png';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ul>
                        <li className="city">{props.data.city}</li>
                        <li className="location-time">
                            <FormattedDate date={props.data.date} />
                        </li>
                    </ul>
                    <div className="current-temp">{Math.round(props.data.temperature)}<sup className="current-units">ºC</sup></div>
                </div>
                <div className="col-lg-6 col-12">
                    <img className="weather-icon" src={sun} alt="weather-icon" />
                    <div className="weather-conditions">
                        <ul>
                            <li >Humidity: {props.data.humidity}%</li>
                            <li >Wind: {Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );}