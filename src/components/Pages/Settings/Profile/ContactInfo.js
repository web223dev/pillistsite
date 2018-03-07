import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactInfo extends Component {
  render() {
    return (
      <div className="contactInfo">
        <p>Contact Information</p>
        <div className="contactInfo-detail">
          <div className="form-group contactInfo-phone">
            <label htmlFor="example-text-input" className="col-form-label">Phone:</label>
            <div className="row contactInfo-phone-row">
              <div className="col-md-5 ci-areaCode ci-d-content">
                <input className="form-control" type="text" placeholder="(Area Code)" id="example-text-input" />
              </div>
              <div className="col-md-7 ci-phoneNum ci-d-content">
                <input className="form-control" type="tel" placeholder="Phone Number" id="example-text-input" />
              </div>
            </div>
          </div>
          <div className="form-group contactInfo-Address">
            <label htmlFor="example-text-input" className="col-form-label">Address:</label>
            <div className="row contactInfo-Address-row">
              <div className="col-md-12 ci-d-content">
                <input className="form-control streetAddr1" type="text" placeholder="Street Address Line 01" id="example-text-input" />
              </div>
              <div className="col-md-12 ci-d-content">
                <input className="form-control streetAddr2" type="text" placeholder="Street Address Line 02" id="example-text-input" />
              </div>
              <div className="row cityState">
                <div className="col-md-5 ci-d-content">
                  <input className="form-control" type="text" placeholder="City" id="example-text-input" />
                </div>
                <div className="col-md-7 ci-d-content">
                  <div className="btn-group ci-state">
                    <button type="button" className="btn ci-stateBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      State
                      <span className="entypo-down-open-big"></span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Action</Link>
                      <Link className="dropdown-item" to="#">Another action</Link>
                      <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row zipCountry">
                <div className="col-md-5 ci-d-content">
                  <input className="form-control" type="text" placeholder="Zip" id="example-text-input" />
                </div>
                <div className="col-md-7 ci-d-content">
                  <div className="btn-group ci-state">
                    <button type="button" className="btn ci-stateBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Country
                    <span className="entypo-down-open-big"></span>
                  </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Action</Link>
                      <Link className="dropdown-item" to="#">Another action</Link>
                      <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;