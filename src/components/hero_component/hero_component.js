import React from 'react';
import './hero_component.css';
import foxImage from './fox.jpg';
import parrotImage from './parrot.jpg';



const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="left-panel">
        <div className="tabs">
          <div className="tab">Important</div>
          <div className="tab">Calendar</div>
          <div className="tab">Docs</div>
          <div className="tab">Asana</div>
          <div className="tab">Other</div>
        </div>
        <div className="fox-image-container">
        <img src={foxImage} alt="Fox" className="fox-image"/>
        </div>
      </div>
      <div className="right-panel">
        <div className="parrot-image-container">
          <img src={parrotImage} alt="Parrot" className="parrot-image"/>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
