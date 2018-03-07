import React from 'react';
import FeatureMobile from '../../Images/featuremobile.png';
import FeatureIcon from '../../Images/featureIcon.png';

const Feature = () => {
  return (
    <div className="Feature">
      <div className="row">
        <div className="col-md-6">
          <div className="feature-mobile">
            <img className="img-fluid" src={FeatureMobile} alt="Feature Mobile"/>
          </div>          
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 feature-main">
          <h2>FEATURES</h2>
          <ul>
            <li>
              <img src={FeatureIcon} alt="FeatureIcon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque leo eget lorem iaculis imperdiet.</p>
            </li>
            <li>
              <img src={FeatureIcon} alt="FeatureIcon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque leo eget lorem iaculis imperdiet.</p>
            </li>
            <li>
              <img src={FeatureIcon} alt="FeatureIcon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque leo eget lorem iaculis imperdiet.</p>
            </li>
            <li>
              <img src={FeatureIcon} alt="FeatureIcon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque leo eget lorem iaculis imperdiet.</p>
            </li>            
          </ul>
        </div>
      </div>      
    </div>
  );
};

export default Feature;