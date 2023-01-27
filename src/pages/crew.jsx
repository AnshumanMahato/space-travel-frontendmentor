import React, { useState } from "react";
import CrewControl from "../components/CrewControl";
import CrewSlide from "../components/CrewSlide";
import { crew } from "../data";

const Crew = () => {
  const [currCrew, setCrew] = useState(0);

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
          <CrewSlide
            crewMember={crewMember}
            key={key}
            active={currCrew === key}
          />
        ))}
        <CrewControl handleClick={handleClick} currCrew={currCrew} />
      </div>
    </main>
  );
};

export default Crew;
