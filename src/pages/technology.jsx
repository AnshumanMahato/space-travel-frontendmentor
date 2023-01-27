import React, { useState } from "react";
import TechControl from "../components/TechControl";
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
        <TechControl handleClick={handleClick} currSlide={currSlide} />
        {technology.map((tech, i) => (
          <TechSlide tech={tech} key={i + 1} active={currSlide === i + 1} />
        ))}
      </div>
    </main>
  );
};

export default Technology;
