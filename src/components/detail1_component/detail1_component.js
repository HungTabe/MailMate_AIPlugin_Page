// src/components/DetailComponent.js
import React from 'react';
import './detail1_component.css';

const Detail1Component = () => {
  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="partners">
        <ul className="partner-list">
          <li className="partner-item">Netflix</li>
          <li className="partner-item">Brex</li>
          <li className="partner-item">Deel</li>
          <li className="partner-item">Compass</li>
          <li className="partner-item">Greenhouse</li>
          <li className="partner-item">A16Z</li>
          <li className="partner-item">Airtable</li>
          <li className="partner-item">VNG</li>
          <li className="partner-item">FPT</li>
          <li className="partner-item">TMA</li>
          <li className="partner-item">CocCoc</li>
          <li className="partner-item">Momo</li>
          <li className="partner-item">VNPay</li>
          <li className="partner-item">Viettel</li>
          <li className="partner-item">SAP</li>
          <li className="partner-item">Siemens</li>
          <li className="partner-item">Spotify</li>
          <li className="partner-item">Adyen</li>
          <li className="partner-item">Skype</li>
          <li className="partner-item">Revolut</li>
          <li className="partner-item">TransferWise</li>
          <li className="partner-item">King</li>
          <li className="partner-item">Delivery Hero</li>
          <li className="partner-item">Nokia</li>
        </ul>
        </div>
      </div>
      <div className="detail-content">
        <h1>MAILMate saves teams over <br/> <span className="highlight">15 million hours</span> every single year.</h1>
        <p className='p-title' >Email is the biggest problem <br/> <span className="highlight">hiding in plain sight</span></p>
        <p>We all spend hours on email. But we often reply late, and sometimes don’t even reply. We then end up losing deals, blocking our teams, and missing our goals.</p>
        <p>It’s not anybody’s fault. Email itself has not changed in decades. With MAILMate, this all changes.</p>
      </div>
      <div className="detail-footer">
        <div className="footer-buttons">
          <button>Recruiting</button>
          <button>Security</button>
          <button>Strategy</button>
          <button>Product</button>
          <button>People</button>
          <button>Design</button>
          <button>Sales</button>
          <button>Finance</button>
          <button>Customer Success</button>
          <button>Engineering</button>
        </div>
      </div>
    </div>
  );
};

export default Detail1Component;
