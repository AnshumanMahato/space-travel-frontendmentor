import React, { useState } from "react";
import CrewDescription from "../components/CrewDescription";
import CrewImage from "../components/CrewImage";
import { crew } from "../data";

const Crew = () => {
  const [currCrew, setCrew] = useState(2);

  const handleClick = (e) => {
    if (!e.target.classList.contains("control__btn")) return;
    const currKey = Number(e.target.dataset.key);
    setCrew(currKey);
  };

  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>02</span>&nbsp;&nbsp;MEET YOUR CREW
      </h5>

      <div className="crew">
        {crew.map((crewMember, key) => (
          <CrewDescription
            crewMember={crewMember}
            key={key}
            active={currCrew === key}
          />
        ))}
        {crew.map((crewMember, key) => (
          <CrewImage
            key={key}
            crewMember={crewMember}
            active={currCrew === key}
          />
        ))}
        <div className="control" onClick={handleClick}>
          <button
            className={`control__btn ${currCrew === 0 ? "active" : ""}`}
            data-key="0"
          ></button>
          <button
            className={`control__btn ${currCrew === 1 ? "active" : ""}`}
            data-key="1"
          ></button>
          <button
            className={`control__btn ${currCrew === 2 ? "active" : ""}`}
            data-key="2"
          ></button>
          <button
            className={`control__btn ${currCrew === 3 ? "active" : ""}`}
            data-key="3"
          ></button>
        </div>
      </div>
    </main>
  );
};

export default Crew;
