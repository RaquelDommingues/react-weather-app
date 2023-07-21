import React, { useEffect } from "react";

export default function WeatherForecastDay(props) {
  useEffect(() => {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }, []);

  return (
    <div className="wrap">
      <div className="item">
        <img
          className="forecast-icon"
          src={props.data.condition.icon_url}
          alt="forecast-icon"
        />
        <div>
          <span className="forecast-max">
            {Math.round(props.data.temperature.maximum)}
          </span>
          /
          <span className="forecast-min">
            {Math.round(props.data.temperature.minimum)}
          </span>
        </div>
      </div>
    </div>
  );
}
