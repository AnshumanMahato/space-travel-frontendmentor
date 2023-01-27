import React, { useState } from "react";
import DestControl from "../components/DestControl";
import DestSlide from "../components/DestSlide";
import { destinations } from "../data";

const Destinations = () => {
  let [currSlide, setDest] = useState("Moon");

  const handleClick = (e) => {
    if (!e.target.classList.contains("control__btn")) return;
    const { key } = e.target.dataset;
    setDest(key);
  };

  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>01</span>&nbsp;&nbsp;PICK YOUR DESTINATION
      </h5>
      <div className="destination">
        <DestControl handleClick={handleClick} currSlide={currSlide} />
        {destinations.map((dest, key) => (
          <DestSlide key={key} dest={dest} active={dest.name === currSlide} />
        ))}
      </div>
    </main>
  );
};

export default Destinations;
