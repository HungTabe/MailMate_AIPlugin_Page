// src/components/pagein.js
import React, { useEffect } from 'react';
import Header from './Header';  // Import Header component
import HeroComponent from './hero_component/hero_component';  // Import Header component
import Detail1Component from './detail1_component/detail1_component';
import Detail2Component from './detail2_component/detail2_component';
import Detail3Component from './detail3_component/detail3_component';
import Detail4Component from './detail4_component/detail4_component';







const pagein = () => {

  return (
    <div className="dashboard-container">
      <Header />

      <section className="content">
        <h1 className="headline">Save 4 hours per person every single week</h1>
        <p className="subheadline">
          MAILMate is the most productive email app ever made. Collaborate
          faster and get more done with AI-powered email.
        </p>
        <button className="get-started-btn-hero">Get Started</button>
      </section>
      <footer className="footer">
        <p>&copy; 2025 MAILMate. All Rights Reserved.</p>
      </footer>
      <div>
      <HeroComponent/>
      </div>
      <div>
      <Detail1Component />
      </div>
      <div>
      <Detail2Component />
      </div>
      <div>
      <Detail3Component />
      </div>
      <div>
      <Detail4Component />
      </div>
      <div className='addlast'>
      <footer className="footer">
        <p>&copy; 2025 MAILMate. All Rights Reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default pagein;
