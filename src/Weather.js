import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div className="Weather">
            <div className="Query">
                <form id="searchBar" class="mb-5">
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="search"
                            placeholder="Location"
                            autocomplete="off"
                            class="form-control"
                            id="city-input"
                            />
                        </div>
                        <div className="col-3">
                            <button className="glass-button" type="submit">
                            Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <h1>Lisbon</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li id="current-min-temperature">Min</li>
                        <li>
                            <span id="current-min">3</span>
                            <sup class="current-units">
                                <span id="current-units-min">ºC</span>
                            </sup>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                    <li>
                        <span id="current-min">3</span>
                            <sup class="current-units">
                                <span id="current-units-min">ºC</span>
                            </sup>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li id="current-min-temperature">Min</li>
                        <li>
                            <span id="current-min">3</span>
                                <sup class="current-units">
                                    <span id="current-units-min">ºC</span>
                                </sup>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}