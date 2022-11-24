import React, { useState, useEffect } from "react";
import axios from "axios";
import SetForecastDay from "./SetForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
setReady(false);
  }, [props])

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-lg-2 col-4 day-box" key={index}>
                  <SetForecastDay forecast={forecastData[index]} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "39eb7f89bb3093a4f1fdtd405b8fao9b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.weatherDate.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
