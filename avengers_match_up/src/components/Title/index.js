import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title"> AVENGERS ASSEMBLE {props.children} Score: {props.score} High Score: {props.highScore}</h1>;
}

export default Title;
