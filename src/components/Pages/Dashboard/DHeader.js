import React, { Component } from 'react';
import Modal from "react-responsive-modal";

import FaithmoIcon from '../../Images/Faithmo.png';
import UserImg from '../../Images/UserImg.png';
import JohnDoe_profile from '../../Images/JohnDoe_profile.png';

import './style/headerStyle.css';

const modalstyle = {
  overlay: {
    background: 'linear-gradient(180deg,rgba(255,140,102,.9) 0,rgba(255,140,102,.9) 0,rgba(255,241,216,.9) 52%,rgba(255,143,112,.9))',
    alignItems: 'flex-start',
    paddingTop: '70px'
  },
  modal: {
    padding: 0,
    borderRadius: '30px'
  },
  closeIcon: {
    transform: 'translateX(-50%)',
    left: '50%',
    top: 'inherit',
    bottom: '14px'
  }
};

export default class DHeader extends Component {

  state = {
    openProfileModal: false,
  }

  onOpenProfileModal = () => {
    this.setState({ openProfileModal: true });
  };

  onCloseProfileModal = () => {
    this.setState({ openProfileModal: false });
  };

  render() {
    const { openProfileModal } = this.state;
    return (
      <div className="d-header">
      <div className="row">
        <div className="col d-info">
          <p>Give, Pray and stay Connected.</p>
        </div>
        <div className="col d-logo">
          <img src={FaithmoIcon} alt="FaithmoIcon" />
        </div>
        <div className="col">
          <div className="d-usermenu" onClick={this.onOpenProfileModal}>
            <img src={UserImg} alt="UserImg" />
            <p className="name--user" >
              <span>John Doe</span>
              <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="arrow" style={{ verticalAlign: 'middle' }}>
                <g>
                  <path d="m12.3 13l7.7 7.7 7.7-7.7 2.3 2.4-10 10-10-10z"></path>
                </g>
              </svg>
            </p>
          </div>
          <Modal
            open={openProfileModal}
            onClose={this.onCloseProfileModal}
            closeIconSvgPath={
              <path fill="#FFFFFF" d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
            }
            closeIconSize={32}
            styles={modalstyle} little>
            <div className="profile-modal">
              <img src={JohnDoe_profile} alt="JohnDoe Profile" />
              <p className="user--name">John Doe</p>
              <button className="button gradient user--edit button--menu--user">Edit Profile</button>
              <button className="button neutral--red button--menu--user switch--view">Switch View</button>
              <div className="logout">
                <p>Logout</p>
              </div>
              <div className="closeDiv"></div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    );
  }
}