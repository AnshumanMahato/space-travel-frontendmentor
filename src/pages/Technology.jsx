import React, { useState, useEffect, useRef } from "react";
import TechControl from "../components/TechControl";
import TechSlide from "../components/TechSlide";
import { technology } from "../data";

const Technology = () => {
  const [currSlide, setSlide] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setSlide((currSlide + 1) % technology.length),
      5000
    );

    return () => {};
  }, [currSlide]);

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
        {technology.map((tech, key) => (
          <TechSlide tech={tech} key={key} active={currSlide === key} />
        ))}
      </div>
    </main>
  );
};

export default Technology;
