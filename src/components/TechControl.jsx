import React from "react";
import ControlBtn from "./ControlBtn";

const TechControl = (props) => {
  const { handleClick, currSlide } = props;
  return (
    <div className="control" onClick={handleClick}>
      {[1, 2, 3].map((key) => (
        <ControlBtn
          key={key}
          id={key}
          active={currSlide === key}
          content={key}
        />
      ))}
    </div>
  );
};

export default TechControl;
