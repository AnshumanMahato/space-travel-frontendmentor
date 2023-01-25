import React, { useState } from "react";
import DestSlide from "../components/DestSlide";
import { destinations } from "../data";

const Destinations = () => {
  let [destination, setDest] = useState("Moon");

  const handleClick = (e) => {
    if (!e.target.classList.contains("destination__navitem")) return;
    const { dest } = e.target.dataset;
    setDest(dest);
  };

  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>01</span>&nbsp;&nbsp;PICK YOUR DESTINATION
      </h5>
      <div className="destination">
        <nav className="destination__nav">
          <ul className="destination__navlist" onClick={handleClick}>
            <li
              className={`destination__navitem ${
                destination === "Moon" ? "active" : ""
              }`}
              data-dest="Moon"
            >
              MOON
            </li>
            <li
              className={`destination__navitem ${
                destination === "Mars" ? "active" : ""
              }`}
              data-dest="Mars"
            >
              MARS
            </li>
            <li
              className={`destination__navitem ${
                destination === "Europa" ? "active" : ""
              }`}
              data-dest="Europa"
            >
              EUROPA
            </li>
            <li
              className={`destination__navitem ${
                destination === "Titan" ? "active" : ""
              }`}
              data-dest="Titan"
            >
              TITAN
            </li>
          </ul>
        </nav>
        {destinations.map((dest, key) => (
          <DestSlide key={key} dest={dest} active={dest.name === destination} />
        ))}
      </div>
    </main>
  );
};

export default Destinations;
