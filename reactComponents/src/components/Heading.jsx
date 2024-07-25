import React from "react";

function Heading() {
  const date = new Date();
  const currentHour = date.getHours();
  let greeting;
  const customColor = {
    color: "",
  };
  if (currentHour <= 12) {
    greeting = "GOOD MORNING";
    customColor.color = "red";
  } else if (currentHour > 12 && currentHour <= 18) {
    greeting = "GOOD AFTERNOON";
    customColor.color = "green";
  } else {
    greeting = "GOOD EVENING";
    customColor.color = "blue";
  }
  return <h1 style={customColor}>{greeting}</h1>;
}

export default Heading;
