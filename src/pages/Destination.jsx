import React, { useState } from "react";
import DestSlide from "../components/DestSlide";
import { destinations } from "../data";

const Destinations = () => {
  let [destination, setDest] = useState("Moon");

  const handleClick = (e) => {
    if (!e.target.classList.contains("control__btn")) return;
    const { dest } = e.target.dataset;
    setDest(dest);
  };

  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>01</span>&nbsp;&nbsp;PICK YOUR DESTINATION
      </h5>
      <div className="destination">
        <div className="control" onClick={handleClick}>
          <button
            className={`control__btn nav-text ${
              destination === "Moon" ? "active" : ""
            }`}
            data-dest="Moon"
          >
            MOON
          </button>
          <button
            className={`control__btn nav-text ${
              destination === "Mars" ? "active" : ""
            }`}
            data-dest="Mars"
          >
            MARS
          </button>
          <button
            className={`control__btn nav-text ${
              destination === "Europa" ? "active" : ""
            }`}
            data-dest="Europa"
          >
            EUROPA
          </button>
          <button
            className={`control__btn nav-text ${
              destination === "Titan" ? "active" : ""
            }`}
            data-dest="Titan"
          >
            TITAN
          </button>
        </div>
        {destinations.map((dest, key) => (
          <DestSlide key={key} dest={dest} active={dest.name === destination} />
        ))}
      </div>
    </main>
  );
};

export default Destinations;
