import React from "react";

export default function SetWeekDay(props) {
     let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let day = days[props.day.getDay()];
    return (
      <div>
        {day}
      </div>
    );
}