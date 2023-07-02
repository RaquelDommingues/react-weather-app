import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return(
        <div className="WeatherForecast">
            <div className="wrap">
                <div className="grid-container">
                    <div className="item"> 
                    <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>
                    <div className="item"> 
                    <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>
                    <div className="item"> 
                        <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>
                    <div className="item"> 
                    <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>
                    <div className="item"> 
                    <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>
                    <div className="item"> 
                    <div>Mon</div>
                        <div>⭐</div>
                        <div>
                            <span className="forecast-max">19</span>/<span className="forecast-min">10</span>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    );
}