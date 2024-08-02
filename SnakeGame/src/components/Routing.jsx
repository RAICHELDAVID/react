import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./Home";
import Game from "./Game";

function Routing() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Game} />
    </BrowserRouter>
  );
}

export default Routing;
