import React from "react";

const Destinations = () => {
  return (
    <main className="page">
      <h5 className="page-header heading-5">
        <span>01</span>&nbsp;&nbsp;DESTINATION
      </h5>
      <div className="destination">
        <nav className="destination__nav">
          <ul className="destination__navlist">
            <li className="destination__navitem">MOON</li>
            <li className="destination__navitem">MARS</li>
            <li className="destination__navitem">EUROPA</li>
            <li className="destination__navitem">TITAN</li>
          </ul>
        </nav>
        <div className="destination__img">
          <img src="/assets/destination/image-moon.webp" alt="moon" />
        </div>
        <div className="destination__description">
          <h2 className="destination__name heading-2">MOON</h2>
          <p className="destination__about">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="destination__data">
            <div className="destination__distance">
              <span className="subheading-2">AVG. DISTANCE</span>
              <span className="subheading-1">384,400 KM</span>
            </div>
            <div className="destination__time">
              <span className="subheading-2">EST. TRAVEL TIME</span>
              <span className="subheading-1">3 DAYS</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;
