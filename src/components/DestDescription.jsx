import React from "react";

const DestDescription = (props) => {
  return (
    <div className={`destination__description ${props.active ? "active" : ""}`}>
      <h2 className="destination__name heading-2">{props.name}</h2>
      <p className="destination__about">{props.description}</p>
      <div className="destination__data">
        <div className="destination__distance">
          <span className="subheading-2">AVG. DISTANCE</span>
          <span className="subheading-1">{props.distance}</span>
        </div>
        <div className="destination__time">
          <span className="subheading-2">EST. TRAVEL TIME</span>
          <span className="subheading-1">{props.travel}</span>
        </div>
      </div>
    </div>
  );
};

export default DestDescription;
