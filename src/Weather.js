import React from "react";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from 'react-icons/fa';
import sun from './img/sun.png';

export default function Weather() {
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
                    <div className="row ">
                        <div className="col-md-6">
                            <ul>
                                <li className="location-time"><h1>Lisbon</h1></li>
                                <li className="location-time">Wednesday 07:00</li>
                                <br />
                                <li className="weather-conditions">Precipitation: 15%</li>
                                <li className="weather-conditions">Humidity: 5%</li>
                                <li className="weather-conditions">Wind: 12 km/h</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <img className="weather-icon" src={sun} alt="weather-icon"/>
                                </div>
                                <div className="col-6 c-temp">
                                <div className="current-temp">20ºC</div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="max-temp">30ºC</div>
                                    <div className="min-temp">10ºC</div>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
        </div>
    );
}