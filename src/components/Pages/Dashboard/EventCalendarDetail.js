import React, { Component } from 'react';
import EventCalendar from '../../Images/event_calendar.png';

class EventCalendarDetail extends Component {
  render() {
    return (
      <div className="wrap--event">
        <div className="content--left">
          <img src={EventCalendar} alt="Event Calendar" />
          <h5>Event Name</h5>
        </div>
        <div className="content--right">
          <div className="e-datetime">
            <span className="date">Date: 06/10/17</span>
            <span className="time">Time: 1:30pm</span>
          </div>
          <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="par">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="button neutral border--red calendar">Edit</button>
          <button className="button neutral border--red calendar">Delete</button>
        </div>
      </div>
    );
  }
}

export default EventCalendarDetail;