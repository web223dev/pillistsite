import React from 'react';
import Availablemobile from '../../Images/availablemobile.png';

const Available = () => {
  return (
    <div className="Available row">            
      <div className="col-md-6 col-12 discription-part">
        <h2>Available for:</h2>
        <div className="icons-style">
          <i className="fab fa-apple"></i>
          <span className="and-sign">&amp;</span>
          <i className="fab fa-android"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget felis hendrerit lebiro fausibus pharetra vitae non rirus. Maecenas non tristique nulla,</p>
      </div>
      <div className="col-md-6 col-12 available-mobile">
        <img className="img-fluid" src={Availablemobile} alt="AvailableMobile"/>  
      </div>
    </div>
  );
};

export default Available;