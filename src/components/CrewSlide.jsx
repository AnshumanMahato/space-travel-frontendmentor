import React from "react";

const CrewSlide = (props) => {
  const { name, role, bio, images } = props.crewMember;
  return (
    <>
      <div className={`crew__description ${props.active ? "active" : ""}`}>
        <h4 className="heading-4 crew__role">{role}</h4>
        <h3 className="heading-3 crew__name">{name}</h3>
        <p className="crew__about">{bio}</p>
      </div>
      <div className={`crew__image ${props.active ? "active" : ""}`}>
        <img src={images.png} alt={name} />
      </div>
    </>
  );
};

export default CrewSlide;
