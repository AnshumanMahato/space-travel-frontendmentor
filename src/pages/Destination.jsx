import React, { useState } from "react";
import DestDescription from "../components/DestDescription";
import DestImage from "../components/DestImage";
import { destinations } from "../data";

const Destinations = () => {
  let [destination, setDest] = useState("Moon");

  const handleClick = (e) => {
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
          <ul className="destination__navlist">
            <li
              className={`destination__navitem ${
                destination === "Moon" ? "active" : ""
              }`}
              data-dest="Moon"
              onClick={handleClick}
            >
              MOON
            </li>
            <li
              className={`destination__navitem ${
                destination === "Mars" ? "active" : ""
              }`}
              data-dest="Mars"
              onClick={handleClick}
            >
              MARS
            </li>
            <li
              className={`destination__navitem ${
                destination === "Europa" ? "active" : ""
              }`}
              data-dest="Europa"
              onClick={handleClick}
            >
              EUROPA
            </li>
            <li
              className={`destination__navitem ${
                destination === "Titan" ? "active" : ""
              }`}
              data-dest="Titan"
              onClick={handleClick}
            >
              TITAN
            </li>
          </ul>
        </nav>

        {destinations.map((dest) => (
          <DestImage
            name={dest.name}
            path={dest.images.webp.slice(1)}
            active={dest.name === destination}
          />
        ))}

        {destinations.map((dest) => (
          <DestDescription
            name={dest.name}
            description={dest.description}
            distance={dest.distance}
            travel={dest.travel}
            active={dest.name === destination}
          />
        ))}
      </div>
    </main>
  );
};

export default Destinations;
