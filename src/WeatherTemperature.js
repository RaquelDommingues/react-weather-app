import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return (
            <div className="current-temp">{Math.round(props.celsius)}<sup className="current-units">ºC | <a href="#" onClick = {convertToFahrenheit}>ºF</a></sup></div>
            );
        } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <div className="current-temp">{Math.round(fahrenheit)}<sup className="current-units"><a href="#" onClick = {convertToCelsius}>ºC</a> | ºF</sup></div>
        );
    }
}