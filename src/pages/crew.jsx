import React from "react";
import { crew } from "../data";

const test = crew[0];

const Crew = () => {
  return (
    <main className="page">
      <h5 className="page-heading heading-5">
        <span>02</span>&nbsp;&nbsp;MEET YOUR CREW
      </h5>

      <div className="crew">
        <div className="crew__description">
          <h4 className="heading-4 crew__role">{test.role}</h4>
          <h3 className="heading-3 crew__name">{test.name}</h3>
          <p className="crew__about">{test.bio}</p>
        </div>
        <div className="crew__image">
          <img src={test.images.webp} alt={test.name} />
        </div>
      </div>
    </main>
  );
};

export default Crew;
