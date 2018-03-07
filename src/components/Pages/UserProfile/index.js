import React, { Component } from 'react';
import DHeader from '../Dashboard/DHeader';
import DSubHeader from '../Dashboard/DSubHeader';
import UserProfileDetail from './UserProfileDetail';
import UserProfileEdit from './UserProfileEdit';
import Modal from "react-responsive-modal";

import JaneDoe_PF from '../../Images/JaneDoe_PF.png';
import check from '../../Images/checkmark.png';
import './style/styles.css';

const modalstyle = {
  overlay: {
    background: 'linear-gradient(180deg,rgba(255,140,102,.9) 0,rgba(255,140,102,.9) 0,rgba(255,241,216,.9) 52%,rgba(255,143,112,.9))',
    alignItems: 'flex-start',
    paddingTop: '158px'
  },
  modal: {
    padding: '50px 0px',
    borderRadius: '30px',
    width: '504px',
    textAlign: 'center'
  }
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      editProfile: false
    }
    this.goBack = this.goBack.bind(this);
    this.handleEPClick = this.handleEPClick.bind(this);
    this.handleEPCancel = this.handleEPCancel.bind(this);
  }

  handleEPClick() {
    this.setState({
      editProfile: true
    })
  }
  handleEPCancel() {
    this.setState({
      editProfile: false
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  goBack() {
    this.props.history.push('/dashboard');
  }
  render() {
    const { editProfile, open } = this.state;
    return (
      <div className="userProfile customBackground">
        <DHeader />
        <DSubHeader />
        <div className="up-wrapper allcard customWidth">
          <div className="up-detail card-wrapper">
            <div className="back">
              {
                editProfile === false ?
                <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button> :
                <button onClick={this.handleEPCancel}><i className="fa fa-angle-left" aria-hidden="true"></i> Cancel</button>
              }
              
            </div>
            <div className="unsubscribe">
              <p onClick={this.onOpenModal}>unsubscribe</p>
              <Modal 
                  open={open} 
                  onClose={this.onCloseModal} 
                  styles={modalstyle} 
                  showCloseIcon={false}
                  little>
                  <div className="um-vault-modal">
                    <p>Are you sure you want to unsubscribe?</p>
                    <button className="button border--red neutral um-yesbtn um-btns">Yes</button>
                    <button className="button border--red neutral um-nobtn um-btns" onClick={this.onCloseModal}>No</button>
                  </div>
                </Modal>
            </div>
            <div className="avatar">
              <img src={JaneDoe_PF} alt="Jane Doe" />
              <p>
                <span>
                  <img className="check" src={check} alt="Check" />
                  Member since 03/07/16
                </span>
              </p>
            </div>
            {
              editProfile === false ?
                <UserProfileDetail
                  handleEPClick={this.handleEPClick}
                /> :
                <UserProfileEdit />
            }

          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;