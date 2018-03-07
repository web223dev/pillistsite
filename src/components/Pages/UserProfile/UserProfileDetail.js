import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import GroupLogo from '../../Images/Usermanagement.png';
import Gifts from '../../Images/TotalGiftIcon.png';
import PrayerReq from '../../Images/PrayerReqIcon.png';
import HonoredMemberStar from '../../Images/groupstar_medium.png';

class UserProfileDetail extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      renderCustomPrevButton: () =>
        <div className="swiper-button-prev">
          <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="left-arrow" style={{ verticalAlign: 'middle' }}>
            <g>
              <path d="m25.7 26.8l-2.3 2.3-10-10 10-10 2.3 2.4-7.7 7.6z"></path>
            </g>
          </svg>
        </div>,
      renderCustomNextButton: () =>
        <div className="swiper-button-next">
          <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="right-arrow" style={{ verticalAlign: 'middle' }}>
            <g>
              <path d="m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"></path>
            </g>
          </svg>
        </div>
    };
    const { handleEPClick } = this.props
    return (
      <div className="u-profile">
        <div className="row up-prop">
          <div className="col-lg-6 up-prop-left">
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Firstname:</label>
              <div className="col-md-8">
                <p className="form-control">Jane</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Lastname:</label>
              <div className="col-md-8">
                <p className="form-control">Doe</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">ID#:</label>
              <div className="col-md-8">
                <p className="form-control">1234567889</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Occupation:</label>
              <div className="col-md-8">
                <p className="form-control">Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 up-prop-right">
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Email Address:</label>
              <div className="col-md-8 emailhome emailaddr">
                <p className="form-control">jdoe@gmail.com</p>
              </div>
            </div>
            <div className="form-group row homeaddr">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Home Address:</label>
              <div className="col-md-8 emailhome">
                <p className="form-control">123 Main St, Lorem Ipsum, XY, 60611</p>
              </div>
            </div>
            <div className="form-group row homephone">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Home Phone Number:</label>
              <div className="col-md-8 Phone">
                <p className="form-control">+1(123)1234567</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-md-4 col-form-label">Cell Phone Number:</label>
              <div className="col-md-8 Phone cellphone">
                <p className="form-control">+1(123)1234567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row honored_member">
          <div className="honored_member_logo">
            <img src={HonoredMemberStar} alt="HonoredMember Star" />
          </div>
          <div className="honored_member_detail">
            <p className="hm-title">Honored Member</p>
            <p className="hm-subtitle">Position: Pastor Deacon Elder</p>
            <p className="hm-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique tristique elit. Vivamus semper purus sollicitudin urna finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus sollicitudin</p>
          </div>
        </div>
        <div className="row up-notes">
          <p className="notes">Notes:</p>
          <p className="notes-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique tristique elit. Vivamus semper purus sollicitudin urna finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor risus, tristique tristique elit. Vivamus semper purus sollicitudin</p>
        </div>
        <div className="row up-editprofilebtn">
          <button className="button neutral border--red" onClick={handleEPClick}>Edit Profile</button>
        </div>
        <div className="row up-groups">
          <div className="card">
            <div className="card-header">
              <div className="title">
                <img src={GroupLogo} alt="GroupLogo" />
                <p>Groups (15)</p>
              </div>
            </div>
            <div className="card-block">
              <Swiper {...params}>
                <div><GroupsDetail /></div>
                <div><GroupsDetail /></div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row up-bottomCard">
          <div className="col-md-6 up-gifts">
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <img src={Gifts} alt="GroupLogo" />
                  <p>Gifts (2)</p>
                </div>
              </div>
              <div className="card-block">
                <Swiper {...params}>
                  <div><GiftsDetail /></div>
                  <div><GiftsDetail /></div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-6 up-prayer">
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <img src={PrayerReq} alt="GroupLogo" />
                  <p>Prayer Requests (4)</p>
                </div>
              </div>
              <div className="card-block">
                <Swiper {...params}>
                  <div><PrayersDetail /></div>
                  <div><PrayersDetail /></div>
                  <div><PrayersDetail /></div>
                  <div><PrayersDetail /></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class GroupsDetail extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number}>
        <div className="groups-item">
          <p className="name">Group Name 0{number}</p>
          <p className="role">Role: ADMIN</p>
        </div>
      </li>
    );
    return (
      <div className="up-groupsDetail">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

class GiftsDetail extends Component {
  render() {
    return (
      <div className="up-giftsInfo">
        <p className="up-giftsName">Gift Name 01</p>
        <p className="price">$120</p>        
      </div>
    );
  }
}

class PrayersDetail extends Component {
  render() {
    return (
      <div className="up-prayerItem">
        <p>05/02/17</p>
        <p className="up-Pdetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt</p>        
      </div>
    );
  }
}

export default UserProfileDetail;