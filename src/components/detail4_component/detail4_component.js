// src/components/Detail4Component.js
import React from 'react';
import './detail4_component.css';

const Detail4Component = () => {
  return (
    <div className="detail4-container">
      <div className="detail4-header">
        <h1 className="main-heading">
          Check your calendar <span className="highlight-text">without losing flow</span>
        </h1>
        <p className="subheading">
          We'll even update your email for you
        </p>
        <p className="info-text">
          When you have a busy schedule, you can't waste time looking it up.
        </p>
        <p className="info-text">
          Whenever you suggest a date, we'll show your calendar for that day. Looking busy? Just hit a shortcut, and we'll show the next day. We'll even update your email automatically, so you don't have to.
        </p>
      </div>

      <div className="email-preview">
        <div className="email-header">
          <span className="emoji">🍔</span> 
          <span className="email-subject">Lunch</span>
        </div>
        <div className="email-body">
          <p>Hi Perry,</p>
          <p>I’ll be in town July 10th.</p>
        </div>

        <div className="calendar-navigation">
          <button className="calendar-button">Previous Day ⬅️</button>
          <button className="calendar-button">Next Day ➡️</button>
        </div>

        <div className="calendar-view">
          <div className="calendar-day">
            <span className="calendar-date">Mon, Jul 10</span>
            <div className="event">
              <span className="event-time">8:00 am</span> - <span className="event-name">Workout 💪</span>
            </div>
            <div className="event">
              <span className="event-time">9:00 am</span> - <span className="event-name">Leadership Coaching</span>
            </div>
            <div className="event">
              <span className="event-time">1:30 pm</span> - <span className="event-name">Onboarding Call</span>
            </div>
          </div>
        </div>

        <div className="email-actions">
          <button className="email-action">Send</button>
          <button className="email-action">Send later</button>
          <button className="email-action">Remind me</button>
        </div>
      </div>
    </div>
  );
};

export default Detail4Component;
