import React, { Component } from 'react';
import Logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';
import Modal from "react-responsive-modal";
import { Redirect } from 'react-router-dom';

const modalstyle = {
  overlay: {
    background: 'linear-gradient(180deg,rgba(255,140,102,.9) 0, #fa916be3 0px, #fa916b 52%, #fa916bdb)',
    alignItems: 'flex-start',
    paddingTop: '158px'
  },
  modal: {
    padding: 0,
    borderRadius: '50px',
    height: '372px',
    width: '770px',
    textAlign: 'center',
    boxShadow: 'none'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      redirect_signup: null
    }
  }

  rsignup = () => {
    this.setState({
      redirect_signup: `/signup`
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, redirect_signup } = this.state;
    if( redirect_signup ){
      return <Redirect to={redirect_signup} />;
    }
    return (
      <div className="header">
        <div className="header-content-top">
          <img className="logo" src={Logo} alt="Logo" />
          <div className="button login-btn">
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="header-content-main">
          <h1 className="title--main">Pray, Give</h1>
          <p className="title-info--main">and  stay up to date<span>!</span></p>
        </div>
        <div className="header-content-bottom">
          <button className="button green margin--r">User signup</button>
          <button className="button red link undefined" onClick={this.onOpenModal}>Church signup</button>
          <Modal
              open={open}
              onClose={this.onCloseModal}
              styles={modalstyle}
              showCloseIcon={false}
              little>
              <div className="header-signup-modal">
                <div className="layer--dark"></div>
                <h6 className="step-one--title">Let's sign you up! Please complete all 3 steps.</h6>
                <div className="wrap--signup-button">
                  <Link to="/signup" className="button--signup--intro button">Get started</Link>
                  {/* <button className="button neutral button--signup--intro" onClick={this.rsignup}>Get started</button> */}
                </div>                
              </div>
            </Modal>
        </div>
      </div>
    );
  }
}

export default Header;