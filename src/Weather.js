import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WearherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherDate, setWetherDate] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWetherDate({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "39eb7f89bb3093a4f1fdtd405b8fao9b";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherDate.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control input-color"
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleChangeCity}
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary w-100 button-color"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherInfo weatherDate={weatherDate} />
        </div>
        <footer>
          <p className="text-start">
            This project was coded by{" "}
            <a href="https://www.instagram.com/berryluxo/">Lina Burkalo</a> and
            is{" "}
            <a href="https://github.com/Berryluxoo/weather-react-app">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://friendly-crisp-b14267.netlify.app/">
              hosted on Netlify
            </a>{" "}
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
