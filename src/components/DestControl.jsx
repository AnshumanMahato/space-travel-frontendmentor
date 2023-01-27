import React from "react";
import ControlBtn from "./ControlBtn";

const DestControl = (props) => {
  const { handleClick, currSlide } = props;
  return (
    <div className="control" onClick={handleClick}>
      {["Moon", "Mars", "Europa", "Titan"].map((key, i) => (
        <ControlBtn key={i} id={key} active={currSlide === key} content={key} />
      ))}
    </div>
  );
};

export default DestControl;
