import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Modal from "react-responsive-modal";

import Churchico from '../../Images/Churchico_black.png';
import Giving from '../../Images/giving.png';
import Events from '../../Images/event.png';
import Groups from '../../Images/group.png';
import ChurchIcon from '../../Images/ChurchIcon.png';

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

export default class DSubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSubmenuModal: false,
      redirect_mychurch: null,
      redirect_giving: null,
      redirect_usermanagement: null,
      redirect_event: null,
      redirect_Groups: null,
      redirect_settings: null,
      redirect_prequest: null,
    }
  }

  onmychurch = () => {
    this.setState({
      redirect_mychurch: `/dashboard`
    })
  }
  ongiving = () => {
    this.setState({
      redirect_giving: `/dashboard/givinghistory`
    })
  }
  onumanagement = () => {
    this.setState({
      redirect_usermanagement: `/dashboard/user_mangement`
    })
  }
  onevent = () => {
    this.setState({
      redirect_event: `/dashboard`
    })
  }
  ongroups = () => {
    this.setState({
      redirect_Groups: `/dashboard`
    })
  }
  onsettings = () => {
    this.setState({
      redirect_settings: `/dashboard/settings/profile`
    })
  }
  onprequest = () => {
    this.setState({
      redirect_prequest: `/dashboard`
    })
  }
  
  onOpenSubmenuModal = () => {
    this.setState({ openSubmenuModal: true });
  };

  onCloseSubmenuModal = () => {
    this.setState({ openSubmenuModal: false });
  };

  onCloseModal = () => {
    this.setState({
      openSubmenuModal: false
    })
  }

  render() {
    const { openSubmenuModal, 
            redirect_mychurch,
            redirect_giving,
            redirect_usermanagement,
            redirect_event,
            redirect_Groups,
            redirect_settings,
            redirect_prequest } = this.state;
    const { currentUrl } = this.props;

    if( redirect_mychurch && redirect_mychurch !== currentUrl){
      return <Redirect to={redirect_mychurch} />;
    }
    if( redirect_giving && redirect_giving !== currentUrl){
      return <Redirect to={redirect_giving} />;
    }
    if( redirect_usermanagement && redirect_usermanagement !== currentUrl ){
      return <Redirect to={redirect_usermanagement} />;
    }
    if( redirect_event ){
      return <Redirect to={redirect_event} />;
    }
    if( redirect_Groups ){
      return <Redirect to={redirect_Groups} />;
    }
    if( redirect_settings && redirect_settings !== currentUrl ){
      return <Redirect to={redirect_settings} />;
    }
    if( redirect_prequest ){
      return <Redirect to={redirect_prequest} />;
    }
    
    return (
      <div className="d-subheader">
        <div className="row">
          <div className="col d-sub-left">
            <p className="name--church">Church Name</p>
            <div className="wrap--icon--notification">
              <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="icon--notification" style={{ verticalAlign: 'middle' }}>
                <g>
                  <path d="m30 26.6l3.4 3.4v1.6h-26.8v-1.6l3.4-3.4v-8.2c0-5.2 2.7-9.4 7.5-10.6v-1.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1.2c4.8 1.2 7.5 5.5 7.5 10.6v8.2z m-10 10c-1.9 0-3.4-1.4-3.4-3.2h6.8c0 1.8-1.6 3.2-3.4 3.2z"></path>
                </g>
              </svg>
              <span>3</span>
            </div>
          </div>
          <div className="col">
            <div className="d-sub-right" onClick={this.onOpenSubmenuModal}>
              <img src={ChurchIcon} alt="Church Icon" />
              <p>
                <span>My Church </span>
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="menu" style={{ verticalAlign: 'middle' }}>
                  <g>
                    <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"></path>
                  </g>
                </svg>
              </p>
            </div>
            <Modal
              open={openSubmenuModal}
              onClose={this.onCloseSubmenuModal}
              closeIconSvgPath={
                <path fill="#FFFFFF" d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
              }
              closeIconSize={32}
              styles={modalstyle} little>
              <div className="subprofile-modal">
                <nav>
                  <ul onClick={this.onCloseModal}>
                    {/* <li onClick={this.onmychurch}> */}
                    <li onClick={this.onmychurch}>
                      <div className="subp-img">
                        <img src={Churchico} alt="Churchico" />
                      </div>
                      <span>My Church</span>
                    </li>
                    <li onClick={this.ongiving}>
                      <div className="subp-img">
                        <img src={Giving} alt="Giving" />
                      </div>
                      <span>Giving</span>
                    </li>
                    <li onClick={this.onumanagement}>
                      <div className="subp-img">
                        <img src={Groups} alt="User Management" />
                      </div>
                      <span>User Management</span>
                    </li>
                    {/* <li onClick={this.onevent}> */}
                    <li onClick={this.onmychurch}>
                      <div className="subp-img">
                        <img src={Events} alt="Events" />
                      </div>
                      <span>Events</span>
                    </li>
                    {/* <li onClick={this.ongroups}> */}
                    <li onClick={this.onmychurch}>
                      <div className="subp-img">
                        <img src={Groups} alt="Groups" />
                      </div>
                      <span>Groups</span>
                    </li>
                    <li onClick={this.onsettings}>
                      <div className="subp-img">
                        <img src={Groups} alt="User Management" />
                      </div>
                      <span>Settings</span>
                    </li>
                    {/* <li onClick={this.onprequest}> */}
                    <li onClick={this.onmychurch}>
                      <div className="subp-img">
                        <img src={Groups} alt="User Management" />
                      </div>
                      <span>Prayer Request</span>
                    </li>
                  </ul>
                </nav>
                <div className="closeDiv"></div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}