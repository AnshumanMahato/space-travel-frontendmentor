import React from "react";
import ControlBtn from "./ControlBtn";
import { destinations } from "../data";

const DestControl = (props) => {
  const { handleClick, currSlide } = props;
  return (
    <div className="control" onClick={handleClick}>
      {destinations.map((destination, i) => (
        <ControlBtn
          key={i}
          id={i}
          active={currSlide === i}
          content={destination.name}
        />
      ))}
    </div>
  );
};

export default DestControl;
