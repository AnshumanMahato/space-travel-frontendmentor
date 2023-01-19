import React from "react";

const CrewImage = (props) => {
  const { images, name } = props.crewMember;
  return (
    <div className={`crew__image ${props.active ? "active" : ""}`}>
      <img src={images.png} alt={name} />
    </div>
  );
};

export default CrewImage;
