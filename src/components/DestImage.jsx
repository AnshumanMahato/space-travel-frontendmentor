import React from "react";

const DestImage = (props) => {
  return (
    <div className={`destination__img ${props.active ? "active" : ""}`}>
      <img src={props.path} alt={props.name} />
    </div>
  );
};

export default DestImage;
