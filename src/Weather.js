import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="row weatherMain">
          <h1 className="mb-0">New York</h1>
          <div className="weatherItem">Sunday 22:05</div>
          <div>Clear Sky</div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" />
            <span className="ms-1 temperature">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6 pt-3">
            <div>Humidity: 33%</div>
            <div>Wind: 8.05 km/h</div>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-start">
          This project was coded by <a href="">Lina Burkalo</a> and is
          <a href="">open-sourced on GitHub</a> and{" "}
          <a href="">hosted on Netlify</a>{" "}
        </p>
      </footer>
    </div>
  );
}
