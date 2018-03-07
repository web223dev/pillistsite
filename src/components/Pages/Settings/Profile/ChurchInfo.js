import React, { Component } from 'react';

class ChurchInfo extends Component {
  render() {
    return (
      <div className="ChurchInfo">
        <p>Church Information</p>
        <div className="row churchInfo-detail">
          <div className="col-md-6">
            <div className="form-group row churchInfo-email">
              <label htmlFor="example-text-input" className="col-md-3 col-form-label">Church Email:</label>
              <div className="col-md-9">
                <input className="form-control" type="email" placeholder="Type church email" id="example-text-input" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-3 col-form-label">Ministry:</label>
              <div className="col-md-9">
                <input className="form-control" type="text" placeholder="Type church name" id="example-text-input" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row churchInfo-website">
              <label htmlFor="example-text-input" className="col-md-3 col-form-label">Church Website:</label>
              <div className="col-md-9">
                <input className="form-control" type="url" placeholder="Type church's website URL" id="example-text-input" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-3 col-form-label">Pastor:</label>
              <div className="col-md-9">
                <input className="form-control" type="text" placeholder="Type pastors name" id="example-text-input" />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group churchInfo-desc">
              <label htmlFor="exampleTextarea" className="col-form-label">Description:</label>
              <textarea className="form-control" id="exampleTextarea" placeholder="Type some more information about your church" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChurchInfo;