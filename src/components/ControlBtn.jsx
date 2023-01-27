import React from "react";

const ControlBtn = (props) => {
  return (
    <button
      className={`control__btn ${props.active ? "active" : ""}`}
      data-key={props.id}
    >
      {props.content || ""}
    </button>
  );
};

export default ControlBtn;
