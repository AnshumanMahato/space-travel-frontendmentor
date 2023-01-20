import React, { useState } from "react";
import TechSlide from "../components/TechSlide";
import { technology } from "../data";

const Technology = () => {
  const [currSlide, setSlide] = useState(1);

  const handleClick = (e) => {
    if (!e.target.classList.contains("control__btn")) return;
    const { key } = e.target.dataset;
    setSlide(Number(key));
  };
  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>03</span>&nbsp;&nbsp;Space launch 101
      </h5>
      <div className="technology-slides">
        <div className="control" onClick={handleClick}>
          <button
            className={`control__btn ${currSlide === 1 ? "active" : ""}`}
            data-key="1"
          >
            1
          </button>
          <button
            className={`control__btn ${currSlide === 2 ? "active" : ""}`}
            data-key="2"
          >
            2
          </button>
          <button
            className={`control__btn ${currSlide === 3 ? "active" : ""}`}
            data-key="3"
          >
            3
          </button>
        </div>
        {technology.map((tech, i) => (
          <TechSlide tech={tech} key={i + 1} active={currSlide === i + 1} />
        ))}
      </div>
    </main>
  );
};

export default Technology;
