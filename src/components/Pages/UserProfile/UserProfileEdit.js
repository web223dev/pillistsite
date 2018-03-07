import React, { Component } from 'react';
import GStar from '../../Images/groupstar.png';

class UserProfileEdit extends Component {
  render() {
    const desc_detail = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus sollicitudin urna finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus sollicitudin';
    return (
      <div className="u-profile-edit">
        <div className="row upe-prop">
          <div className="col-lg-6 upe-prop-left">
            <div className="form-group row">
              <label htmlFor="upe-firstname" className="col-md-5 col-form-label">Firstname:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="Jane" id="upe-firstname" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-lastname" className="col-md-5 col-form-label">Lastname:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="Doe" id="upe-lastname" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-id" className="col-md-5 col-form-label">ID#:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="123456789" id="upe-id" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-occupation" className="col-md-5 col-form-label">Occupation:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="Manager" id="upe-occupation" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-email" className="col-md-5 col-form-label">Email Address:</label>
              <div className="col-md-7">
                <input className="form-control" type="email" defaultValue="jdoe@gmail.com" id="upe-email" />
              </div>
            </div>
            <div className="form-group row upe-homePhone-Wrapper">
              <label htmlFor="upe-homePhone" className="col-md-5 col-form-label">Home Phone Number:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="+1(123)1234567" id="upe-homePhone" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-cellPhone" className="col-md-5 col-form-label">Cell Phone Number:</label>
              <div className="col-md-7">
                <input className="form-control" type="text" defaultValue="+1(123)1234567" id="upe-cellPhone" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 upe-prop-right">
            <div className="form-group">
              <label htmlFor="Address1">Address:</label>
              <input type="text" className="form-control" id="Address1" placeholder="Street Address Line 01" />

              <input type="text" className="form-control" id="Address2" placeholder="Street Address Line 02" />
              <input type="text" className="form-control" id="city" placeholder="City" />
              <div className="btn-group upe-state">
                <button type="button" className="btn upe-stateBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  State
                  <span className="entypo-down-open-big"></span>
                </button>
                <div className="dropdown-menu">
                  <p className="dropdown-item" to="#">Action</p>
                  <p className="dropdown-item" to="#">Another action</p>
                  <p className="dropdown-item" to="#">Something else here</p>
                </div>
              </div>
              <input type="text" className="form-control" id="country" placeholder="Country" />
              <input type="text" className="form-control" id="zip" placeholder="Zip" />
            </div>
          </div>
        </div>
        <div className="upe-prop-bottom">
          <div className="upe-b-title">
            <div className="upe-b-ques">
              <p>Is This Member a Honored Member? <img src={GStar} alt="GroupStar" /></p>              
            </div>
            <div className="upe-b-check">
              <div className="upe-b-opt-yes">
                <input type="radio" id="check-yes" name="radio-group" defaultChecked />
                <label htmlFor="check-yes">Yes</label>
              </div>
              <div className="upe-b-opt-no">
                <input type="radio" id="check-no" name="radio-group" />
                <label htmlFor="check-no">No</label>
              </div>
            </div>
          </div>
          <div className="upe-b-info">
            <div className="form-group row">
              <label htmlFor="upe-position" className="col-md-2 col-form-label">Position:</label>
              <div className="col-md-10">
                <input className="form-control" type="text" defaultValue="Pastor Deacon elder" id="upe-position" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upe-desc" className="col-md-2 col-form-label">Description:</label>
              <div className="col-md-10">
                <textarea className="form-control" id="upe-position" rows="3" defaultValue={desc_detail}></textarea>
              </div>
            </div>
            <div className="form-group row upe-b-notes">
              <label htmlFor="upe-notes" className="col-md-2 col-form-label">Notes:</label>
              <textarea className="form-notes" id="upe-notes" rows="3" defaultValue={desc_detail}></textarea>
            </div>
            <div className="upe-b-savebtn">
              <button className="button neutral border--red">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileEdit;