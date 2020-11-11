import React from "react";
import "./style.css";

function AvengerCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>

      <span onClick={() => props.chooseAvenger(props.id)} className="choose"></span>
    </div>
  );
}

export default AvengerCard;