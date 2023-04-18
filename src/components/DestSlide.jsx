import React from "react";

const DestSlide = (props) => {
  const { name, description, distance, travel, images } = props.dest;

  return (
    <>
      <div className={`destination__img ${props.active ? "active" : ""}`}>
        <img src={images.webp.slice(1)} alt={name} />
      </div>
      <div
        className={`destination__description ${props.active ? "active" : ""}`}
      >
        <h2 className="destination__name heading-2">{name}</h2>
        <p className="destination__about">{description}</p>
        <div className="destination__data">
          <div className="destination__distance">
            <span className="subheading-2">AVG. DISTANCE</span>
            <span className="subheading-1">{distance}</span>
          </div>
          <div className="destination__time">
            <span className="subheading-2">EST. TRAVEL TIME</span>
            <span className="subheading-1">{travel}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestSlide;
