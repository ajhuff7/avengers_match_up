import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title"> AVENGERS ASSEMBLE {props.children} &nbsp;&nbsp; Score: {props.score} &nbsp;&nbsp; High Score: {props.highScore}</h1>;
}

export default Title;
