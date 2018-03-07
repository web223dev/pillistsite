import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DHeader from '../../Dashboard/DHeader';
import DSubHeader from '../../Dashboard/DSubHeader';
import Cards from '../../../Images/cards.png';

class MembershipEdit extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.push('/dashboard/settings/membership');
  }
  render() {
    return (
      <div className="MembershipEdit customBackground">
        <DHeader />
        <DSubHeader />
        <div className="card-wrapper">
          <div className="me-payment allcard customWidth">
            <div className="back">
              <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <p>Membership Payment</p>
                </div>
              </div>
              <div className="card-block">
                <div className="card-choose">
                  <ul>
                    <li>
                      <div className="currentCard-opt">
                        <input type="radio" id="currentCard" name="radio-group" defaultChecked />
                        <label htmlFor="currentCard">Current Card</label>
                      </div>
                      <p>Phil's Card (VISA Ending 5332)</p>
                    </li>
                    <li>
                      <input type="radio" id="newCard" name="radio-group" />
                      <label htmlFor="newCard">Use A New Card</label>
                    </li>
                  </ul>
                </div>
                <div className="row card-detail">
                  <div className="col-lg-7 bankCardInfo">
                    <p className="title">Bank Card Information</p>
                    <div className="form-group">
                      <label htmlFor="firstname">Cardholder name:</label>
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputNicknames">Card Nickname:</label>
                      <input type="text" className="form-control" id="InputNickname" placeholder="Type a nickname for the new card" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputselectType">Card Type:</label>
                      <div className="btn-group me-selectType">
                        <button type="button" className="btn me-typeBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Select the card type
                          <span className="entypo-down-open-big"></span>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">Visa</Link>
                          <Link className="dropdown-item" to="#">MasterCard</Link>
                          <Link className="dropdown-item" to="#">Discover Card</Link>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputCardNumber">Card Number</label>
                      <input type="text" className="form-control" id="InputCardNumber" placeholder="Type the card number" />
                    </div>
                    <img src={Cards} alt="Cards" />
                    <div className="form-group">
                      <label htmlFor="selectMonth">Expiration Date:</label>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="btn-group me-selectMonth">
                              <button type="button" className="btn me-selectMonthBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MM
                                <span className="entypo-down-open-big"></span>
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">1</Link>
                                <Link className="dropdown-item" to="#">2</Link>
                                <Link className="dropdown-item" to="#">3</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="btn-group me-selectYear">
                              <button type="button" className="btn me-selectYearBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                YY
                                <span className="entypo-down-open-big"></span>
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">1</Link>
                                <Link className="dropdown-item" to="#">2</Link>
                                <Link className="dropdown-item" to="#">3</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="securityCode">Security Code:</label>
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="securityCode" />
                        </div>
                        <div className="col-md-6">
                          <Link className="securityCode" to="#">What is this?</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 billingCardInfo">
                    <p className="title">Billing Information</p>
                    <div className="form-group">
                      <label htmlFor="selectCountry">Address:</label>
                      <div className="form-group">
                        <div className="btn-group me-selectCountry">
                          <button type="button" className="btn me-selectCountryBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Country
                                <span className="entypo-down-open-big"></span>
                          </button>
                          <div className="dropdown-menu">
                            <Link className="dropdown-item" to="#">Country</Link>
                            <Link className="dropdown-item" to="#">Country1</Link>
                            <Link className="dropdown-item" to="#">Country2</Link>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="streetaddress1" placeholder="Street Address 01" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="streetaddress2" placeholder="Street Address 02" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="city" placeholder="City" /> 
                      </div>
                      <div className="form-group">
                        <div className="btn-group me-selectState">
                          <button type="button" className="btn me-selectStateBtn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            State
                            <span className="entypo-down-open-big"></span>
                          </button>
                          <div className="dropdown-menu">
                            <Link className="dropdown-item" to="#">state</Link>
                            <Link className="dropdown-item" to="#">state1</Link>
                            <Link className="dropdown-item" to="#">state2</Link>
                          </div>
                        </div>
                      </div>
                      <input type="text" className="form-control" id="zipcode" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>
                <div className="ms-btn">
                  <button className="mse-edit ms-edit" onClick={this.me_redirect}>Save</button>
                  <button className="mse-cancel ms-cancel">Cancel</button>
                  <p><span>Terms & Conditions</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MembershipEdit;