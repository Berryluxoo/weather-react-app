import React from "react";
import SetWeekDay from "./SetWeekDay";

import "./WeatherForecast.css";

export default function SetForecastDay(props) {
   
  let forecast = {
    tempMax: Math.round(props.forecast.temperature.maximum),
    tempMin: Math.round(props.forecast.temperature.minimum),
    iconUrl: props.forecast.condition.icon_url,
    description: props.forecast.condition.description,
    weekDay: new Date(props.forecast.time * 1000),
  };

  return (
    <div className="SetForecastDay">
      <div className="week-day">
        <SetWeekDay day={forecast.weekDay} />
      </div>
      <img src={forecast.iconUrl} alt={forecast.description} />
      <div>
        <span className="max-temperature">{forecast.tempMax}°</span>
        <span className="min-temperature">{forecast.tempMin}°</span>
      </div>
    </div>
  );
}
