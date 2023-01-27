import React from "react";
import ControlBtn from "./ControlBtn";

const CrewControl = (props) => {
  const { handleClick, currCrew } = props;
  return (
    <div className="control" onClick={handleClick}>
      {[0, 1, 2, 3].map((key) => (
        <ControlBtn active={currCrew === key} id={key} key={key} />
      ))}
    </div>
  );
};

export default CrewControl;
