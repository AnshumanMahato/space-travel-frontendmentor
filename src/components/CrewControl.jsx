import React from "react";
import ControlBtn from "./ControlBtn";

const CrewControl = (props) => {
  const { handleClick, currSlide } = props;
  return (
    <div className="control" onClick={handleClick}>
      {[0, 1, 2, 3].map((key) => (
        <ControlBtn active={currSlide === key} id={key} key={key} />
      ))}
    </div>
  );
};

export default CrewControl;
