import React from "react";

const TechSlide = (props) => {
  return (
    <>
      <div
        className={`technology__description ${props.active ? "active" : ""}`}
      >
        <span className="subheading-2">The terminology...</span>
        <h3 className="heading-3 technology__name">{props.tech.name}</h3>
        <p className="technology__about">{props.tech.description}</p>
      </div>
      <div className={`technology__image ${props.active ? "active" : ""}`}>
        <img src={props.tech.images.portrait} alt="test" />
      </div>
    </>
  );
};

export default TechSlide;