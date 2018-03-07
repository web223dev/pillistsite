import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from "react-responsive-modal";

import '../style/Membership.css';

const modalstyle = {
  overlay: {
    background: 'linear-gradient(180deg,rgba(255,140,102,.9) 0,rgba(255,140,102,.9) 0,rgba(255,241,216,.9) 52%,rgba(255,143,112,.9))',
    alignItems: 'flex-start',
    paddingTop: '158px'
  },
  modal: {
    padding: '36px 0px 26px',
    borderRadius: '30px',
    width: '504px',
    textAlign: 'center'
  }
};

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      membership_edit: null
    };
  }
  me_redirect = () => {
    this.setState({
      membership_edit: `/dashboard/settings/membership/edit`
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { membership_edit, open } = this.state;
    if (membership_edit) {
      return <Redirect to={membership_edit} />;
    }
    return (
      <div className="membership_wrapper">
        <div className="membership_detail">
          <ul>
            <li>
              <p className="subPackage">Subscription Package</p>
              <p>Monthly Package</p>
            </li>
            <li>
              <p>Start Date</p>
              <p>May 5, 2017</p>
            </li>
            <li>
              <p className="autoRD">Auto Renewal Date</p>
              <p>June 12, 2017</p>
            </li>
            <li>
              <p className="currentpm">Current Payment Method</p>
              <p>Phil's Card</p>
            </li>
          </ul>
        </div>
        <div className="ms-btn">
          <button className="ms-edit" onClick={this.me_redirect}>Edit</button>
          <button className="ms-cancel">Cancel</button>
          <p><span onClick={this.onOpenModal}>Cancel Plan</span></p>
          <Modal
            open={open}
            onClose={this.onCloseModal}
            styles={modalstyle}
            showCloseIcon={false}
            little>
            <div className="ms-cplan-modal">
              <p>If you are having any issues, trying calling FaithMo at (555)123-4567</p>
              <p>Are you sure you want to cancel your membership?</p>
              <button className="button border--red neutral ms-cplan-yes">Yes</button>
              <button className="button border--red neutral ms-cplan-cancel" onClick={this.onCloseModal}>No</button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Membership;