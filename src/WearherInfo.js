import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import SetDate from "./SetDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weatherMain">
        <h1 className="mb-0">{props.weatherDate.city}</h1>
        <div className="weatherItem">
          <SetDate date={props.weatherDate.date} />
        </div>
        <div className="description text-capitalize">
          {props.weatherDate.description}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <img
            src={props.weatherDate.iconUrl}
            alt={props.weatherDate.description}
          />
          <WeatherTemperature celsius={props.weatherDate.temperature} />
        </div>
        <div className="col-md-6 pt-4 col-sm-12">
          <div>Humidity: {props.weatherDate.humidity}%</div>
          <div>Wind: {props.weatherDate.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
