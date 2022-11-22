import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFar(event) {
    event.preventDefault();
    setUnit("farengheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFar() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="ms-1 temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFar}>
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="ms-1 temperature">{calculateFar()}</span>
        <span className="unit">
          <a href="/" onClick={showCel}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
