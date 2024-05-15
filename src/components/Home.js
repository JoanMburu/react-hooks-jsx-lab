import React from "react";
import { name, city } from "../data/data.js";

const eleStyle = {color:'firebrick'};

function Home() {
  // update the JSX being returned!
  return (
      <div id = "home">
        <h1 style = {eleStyle}>{`${name} is a Web Developer from ${city}`}</h1>
      </div>)
}

export default Home;
