// src/components/Detai3Component.js
import React from 'react';
import './detail3_component.css';

const Detail3Component = () => {
  return (
    <div className="detail2-container">
      <div className="detail2-header">
        <h1 className="main-heading">
          Fix errors as you go
        </h1>
        <p className="subheading">
          Speed up your typing by 30-50%
        </p>
        <p className="info-text">
          Autocorrect fixes errors as you go — extra characters, missing characters, transposed characters, missing punctuation, incorrect capitalization — to name just a few. It beats the autocorrect in Gmail and Outlook across multiple benchmarks.
        </p>
        <p className="info-text">
          Most importantly, you go faster. Autocorrect increases typing speed by 30-50%.
        </p>
      </div>
      
      <div className="email-preview">
        <h3 className="email-subject">Tomorrow's All Hands</h3>
        <div className="email-body">
          <p>Hi Team,</p>
          <p>I am thrilled to share some exciting news with you about tomorrow's All Hands meeting. I won't give away too much just yet, but I <span className="highlight-text">canpromse</span> it's going to be great!</p>
        </div>
        <div className="autocorrect-info">
          <span className="error-count">4 errors fixed by Autocorrect</span>
        </div>
      </div>
    </div>
  );
};

export default Detail3Component;
