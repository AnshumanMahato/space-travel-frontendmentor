import React, { useState, useEffect, useRef } from "react";
import DestControl from "../components/DestControl";
import DestSlide from "../components/DestSlide";
import { destinations } from "../data";

const Destinations = () => {
  let [currSlide, setSlide] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setSlide((currSlide + 1) % destinations.length),
      10000
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
        <span>01</span>&nbsp;&nbsp;PICK YOUR DESTINATION
      </h5>
      <div className="destination">
        <DestControl handleClick={handleClick} currSlide={currSlide} />
        {destinations.map((dest, key) => (
          <DestSlide key={key} dest={dest} active={key === currSlide} />
        ))}
      </div>
    </main>
  );
};

export default Destinations;
