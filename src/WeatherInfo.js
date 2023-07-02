import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";



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
                    <img className="weather-icon" src={props.data.iconUrl} alt="weather-icon" />
                </div>
                <div className="col-lg-6 col-12">
                    <WeatherTemperature celsius={props.data.temperature}/>
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

    