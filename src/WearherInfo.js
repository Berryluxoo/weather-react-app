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
        <div className="col-6">
          <img src={props.weatherDate.iconUrl} />
          <WeatherTemperature celsius={props.weatherDate.temperature} />
        </div>
        <div className="col-6 pt-4">
          <div>Humidity: {props.weatherDate.humidity}%</div>
          <div>Wind: {props.weatherDate.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
