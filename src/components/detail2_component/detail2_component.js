// src/components/Detail2Component.js
import React from 'react';
import './detail2_component.css';

const Detail2Component = () => {
  return (
    <div className="detail2-container">
      <div className="detail2-header">
        <h1 className="main-heading">
          Type less and <span className="highlight-text">accelerate your team</span>
        </h1>
        <p className="subheading">
          Automate phrases and entire emails
        </p>
        <p className="info-text">
          No matter how fast we are, we all hit the same limit: the sheer time it takes to type.
        </p>
        <p className="info-text">
          With Snippets, you can automate typing and push past this limit. Insert phrases, paragraphs, or whole emails. You can even include attachments, add people to CC, or BCC internal systems.
        </p>
        <p className="info-text">
          You can also share Snippets with your team. Share common responses, recurring emails, and the most effective outreach. Your team will move faster, with consistent, up-to-date, and high-performing messaging.
        </p>
      </div>
      <div className="team-snippets">
        <div className="team-header">
          <div className="team-avatar">
            <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="Avatar" />
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Avatar" />
            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Avatar" />
          </div>
          <span className="team-name">Team Snippets</span>
          <span className="new-items-count">+22</span>
        </div>
        <ul className="snippet-list">
          <li className="snippet-item">
            <span className="snippet-name">Schedule</span>
            <span className="snippet-text">Please schedule a time to meet with me using the link below.</span>
          </li>
          <li className="snippet-item">
            <span className="snippet-name">Decline</span>
            <span className="snippet-text">Hi {`{first_name}`}, thanks for the note! I'm not interested.</span>
          </li>
          <li className="snippet-item">
            <span className="snippet-name">Call follow-up</span>
            <span className="snippet-text">Hi {`{first_name}`}, it was so great talking today! A follow-up.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail2Component;
