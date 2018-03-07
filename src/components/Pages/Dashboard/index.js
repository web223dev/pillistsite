import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import { Redirect } from 'react-router-dom';
import Calendar from 'react-calendar/dist/entry.nostyle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import TotalGiftIcon from '../../Images/TotalGiftIcon.png';
import PrayerReqIcon from '../../Images/PrayerReqIcon.png';
import CalendarIcon from '../../Images/CalendarIcon.png';
import MelJone from '../../Images/MelJone.png';
import JimSmith from '../../Images/JimSmith.png';
import JohnDoe from '../../Images/JohnDoe.png';
import JessSam from '../../Images/JessSam.png';
import AddIcon from '../../Images/add.png';


import PrayerDetail from './PrayerDetail';
import EventCalendarDetail from './EventCalendarDetail';
import DHeader from './DHeader';
import DSubHeader from './DSubHeader';
import './style/styles.css';
import styles from '../../../dropdownstyle';

const dropdownIcon = (
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    <path d="M0-.75h24v24H0z" fill="none" />
  </svg>
)

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      redirect_nSub: null,
      redirect_gift: null,
      hasError: false,
      value: 1
    };
  }

  onChange = date => this.setState({ date });

  nsubscribe = (match) => {
    this.setState({
      // redirect_nSub: `/dashboard/new_subscribe`
      redirect_nSub: `/dashboard/user_mangement`
    })
  }
  ngiftHistory = () => {
    this.setState({
      redirect_gift: '/dashboard/givinghistory'
    })
  }

  handleChange = (event, index, value) => this.setState({ value });

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
    const { redirect_nSub, redirect_gift } = this.state;
    if (redirect_nSub) {
      return <Redirect to={redirect_nSub} />;
    }
    if (redirect_gift) {
      return <Redirect to={redirect_gift} />;
    }
    const currentUrl = this.props.location.pathname;
    return (
      <div className="Dashboard customBackground">
        <DHeader />
        <DSubHeader currentUrl={currentUrl} />
        <div className="d-main">
          <div className="d-main-top">
            <div className="row">
              <div className="col-md-8 left">
                <div className="total-gift">

                  {/* --------------------------------- */}
                  <div className="card">
                    <div className="card-header">
                      <div className="title">
                        <img src={TotalGiftIcon} alt="TotalGift Icon" />
                        <p>Total Gifts</p>
                      </div>
                      <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoWidth={false}
                        className="su-ques steps_input"
                        style={styles.dropdownStyle}
                        labelStyle={styles.labelStyle}
                        iconStyle={styles.btnStyle}
                        underlineStyle={{ border: 'none' }}
                        iconButton={dropdownIcon}
                      >
                        <MenuItem value={1} primaryText="This weeks" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={4} primaryText="Weekly" />
                      </DropDownMenu>
                    </div>
                    <div className="card-block">
                      <div className="wrap--info gifts">
                        <p className="price">$400</p>
                        <p>Gift givers: 13</p>
                      </div>
                      <div className="wrap--button gifts">
                        <button className="button neutral border--red gifts" onClick={this.ngiftHistory}>View Gift History</button>
                      </div>
                    </div>
                  </div>
                  {/* --------------------------------- */}

                </div>
                <div className="prayer-requ">

                  {/* --------------------------------- */}
                  <div className="card">
                    <div className="card-header">
                      <div className="title">
                        <img src={PrayerReqIcon} alt="Prayer ReqIcon" />
                        <p>Prayer Requests (4)</p>
                      </div>
                    </div>
                    <div className="card-block">
                      <Swiper {...params}>
                        <div><PrayerDetail /></div>
                        <div><PrayerDetail /></div>
                      </Swiper>
                    </div>
                  </div>
                  {/* --------------------------------- */}

                </div>
              </div>
              <div className="col-md-4 right">

                {/* --------------------------------- */}
                <div className="card">
                  <div className="card-header" onClick={this.nsubscribe}>
                    <p>New Subscribers (12)</p>
                  </div>
                  <div className="card-block">
                    <Swiper {...params}>
                      <div>
                        <div className="wrap--users">
                          <div className="wrap--user">
                            <img src={MelJone} alt="MelJone" />
                            <h6>Jane Doe</h6>
                          </div>
                          <div className="wrap--user">
                            <img src={JimSmith} alt="JimSmith" />
                            <h6>Jim Smith</h6>
                          </div>
                          <div className="wrap--user">
                            <img src={JohnDoe} alt="JohnDoe" />
                            <h6>John Doe</h6>
                          </div>
                          <div className="wrap--user">
                            <img src={JessSam} alt="JessSam" />
                            <h6>Jess Sam</h6>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="wrap--users">
                          <div className="wrap--user">
                            <img src={MelJone} alt="MelJone" />
                            <h6>Jane Doe</h6>
                          </div>
                          <div className="wrap--user">
                            <img src={JimSmith} alt="JimSmith" />
                            <h6>Jane Doe</h6>
                          </div>
                          <div className="wrap--user">
                            <img src={JohnDoe} alt="JohnDoe" />
                            <h6>Jane Doe</h6>
                          </div>
                        </div>
                      </div>
                    </Swiper>
                  </div>
                </div>
                {/* --------------------------------- */}

              </div>
            </div>
          </div>
          <div className="d-main-bottom">

            {/* --------------------------------- */}
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <img src={CalendarIcon} alt="CalendarIcon" />
                  <p>Events Calendar</p>
                </div>
                <button className="button--add-event">
                  <img className="icon--plus" src={AddIcon} alt="Icon Plus" />
                  Add new event
                </button>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-md-4 dm-left">
                    <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </div>
                  <div className="col-md-8 dm-right">
                    <Swiper {...params}>
                      <div><EventCalendarDetail /></div>
                      <div><EventCalendarDetail /></div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------- */}
          </div>
        </div>
        <div className="d-footer" style={{ background: "#212121", height: "70px" }}>

        </div>
      </div>
    );
  }
}

export default Dashboard;