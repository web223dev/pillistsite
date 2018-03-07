import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import { Redirect } from 'react-router-dom';

import JaneDoe from '../../Images/JaneDoe.png';
import userStar from '../../Images/groupstar.png';
import userStar_big from '../../Images/groupstar_big.png';
import leftArrow from '../../Images/arrows.svg';

const modalstyle = {
  overlay: {
    alignItems: 'flex-start',
    paddingTop: '70px'
  },
  modal: {
    padding: 0,
    borderRadius: '30px',
    width: 800
  },
  closeIcon: {
    transform: 'translateX(-50%)',
    left: '50%',
    top: 'inherit',
    bottom: '14px'
  }
};

class PrayerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPrayerModal: false,
      userPosition: false
    }
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handlePositionBack = this.handlePositionBack.bind(this);
  }

  handleStarClick() {
    this.setState({
      userPosition: true
    })
  }
  handlePositionBack() {
    this.setState({
      userPosition: false
    })
  }

  onOpenPrayerModal = () => {
    this.setState({ openPrayerModal: true });
  };

  onClosePrayerModal = () => {
    this.setState({ openPrayerModal: false });
  };

  render() {
    const { openPrayerModal, userPosition } = this.state;
    return (
      <div className="row">
        <div className="col-md-5 content--slide" onClick={this.onOpenPrayerModal}>
          <div className="slide-userImg">
            <img src={JaneDoe} alt="JaneDoe" />
          </div>
          <div className="wrap--user-info">
            <div className="wrap--user--top">
              <h6 className="name">Jane Doe</h6>
              <p className="date">05/02/17</p>
            </div>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        </div>
        <Modal
          open={openPrayerModal}
          onClose={this.onClosePrayerModal}
          closeIconSvgPath={
            <path fill="#FFFFFF" d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
          }
          closeIconSize={32}
          styles={modalstyle} little>
          <div className="prayer-modalWrapper">
            {
              userPosition === false ?
                <PrayerModal
                  handleStarClick={this.handleStarClick}
                /> :
                <PositionModal
                  handlePositionBack={this.handlePositionBack}
                />
            }
            <div className="closeDiv"></div>
          </div>
        </Modal>
        <div className="col-md-5 content--slide">
          <div className="slide-userImg">
            <img src={JaneDoe} alt="JaneDoe" />
          </div>
          <div className="wrap--user-info">
            <div className="wrap--user--top">
              <h6 className="name">Jane Doe</h6>
              <p className="date">05/02/17</p>
            </div>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        </div>
      </div>
    );
  }
}

class PrayerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect_uprofile: null
    };
  }
  uProfile = () => {
    this.setState({
      redirect_uprofile: `/dashboard/user_profile`
    })
  }
  render() {
    const { redirect_uprofile } = this.state;
    const { handleStarClick } = this.props;
    if (redirect_uprofile) {
      return <Redirect to={redirect_uprofile} />;
    }
    return (
      <div className="prayer-modal">
        <span className="id-text">ID# 1234567</span>
        <div className="prayer-img">
          <span>
            <img className="userStar" src={userStar} onClick={handleStarClick} alt="userStar" />
            <img className="userImg" src={JaneDoe} alt="userImg" />
          </span>
        </div>
        <div className="prayer-detail">
          <div className="prayer-detail-top">
            <div className="info">
              <h5 className="name">Jane Doe</h5>
              <span className="date">Member Since 05/02/17</span>
            </div>
            <div className="contact">
              <span>
                <i className="fa fa-mobile icon" aria-hidden="true"></i>
                (321)234-1212
              </span>
              <span>
                <i className="fa fa-phone icon" aria-hidden="true"></i>
                (234)888-2222
              </span>
              <span>
                <i className="fa fa-envelope icon" aria-hidden="true"></i>jdoe@gmail.com
              </span>
            </div>
          </div>
          <div className="prayer-detail-bottom">
            <div className="text">
              <p>Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus solicitudin urna finibus.</p>
            </div>
            <div className="learn-button">
              <button className="button neutral border--red" onClick={this.uProfile}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PositionModal extends Component {
  render() {
    const { handlePositionBack } = this.props;
    return (
      <div className="position-content">
        <div className="back-prayer" onClick={handlePositionBack}>
          <img src={leftArrow} alt="left arrow"/>
        </div>
        <div className="shield-icon">
          <img src={userStar_big} alt="UserStar Big" />
        </div>
        <div className="info">
          <h5 className="name">Position: Paster Deacon Elder</h5>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus solicitudin urna finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus sollicitudin</p>
        </div>
      </div>
    );
  }
}

export default PrayerDetail;