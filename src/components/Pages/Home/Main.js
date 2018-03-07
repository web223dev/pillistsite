import React from 'react';
import MainImg1 from '../../Images/main-image1.png';
import Available from './Available';
import Feature from './Feature';

const Main = () => {
  return (
    <div className="main">
      <div className="main-content1">
        <div className="main-title">
          <h1>Lorem ipsum amet FaithMo.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget felis hendrerit libero faucibus pharetra vitae non risus. Maecenas non tristique nulla,</p>
        </div>
        <div className="mainimg">
          <img className="img-fluid" src={MainImg1} alt="MainImg1"/>
        </div>
        <hr/>
        <div className="main-bottom">
          <h1>Sign up for a no-risk free trial today.</h1>
          <button className="button red button">try faithmo for free</button>
          <hr/>
          <p>What to know more?</p>
          <div className="contact">
            <div className="contact-block">
              <span className="contact-text">Give us a call at</span>
              <span className="contact-value">(123)-4561212</span>
            </div>
            <div className="contact-block">
              <span className="contact-text">Send your question to </span>
              <span className="contact-value">info@fathmo.com</span>
            </div>
          </div>
        </div>
      </div>
      <Available />
      <Feature />
    </div>
  );
};

export default Main;