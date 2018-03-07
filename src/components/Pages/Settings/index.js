import React, { Component } from 'react';
import DHeader from '../Dashboard/DHeader';
import DSubHeader from '../Dashboard/DSubHeader';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import AdminPanelEdit from './Profile/AdminPanelEdit';
import ServiceTimes from './ServiceTimes';
import Gallery from './Gallery';
import GiftSettings from './GiftSettings';
import Membership from './Membership';

import './style/styles.css';

const settingTabs = [{
  tabName: 'Profile',
  url: 'profile'
}, {
  tabName: 'Service Times',
  url: 'servicetimes'
}, {
  tabName: 'Gallery',
  url: 'gallery'
}, {
  tabName: 'Gift Settings',
  url: 'gift_settings'
}, {
  tabName: 'Membership',
  url: 'membership'
}]

class Settings extends Component {
  constructor(props) {
    super(props);    
    this.goBack = this.goBack.bind(this);
    this.goBackProfile = this.goBackProfile.bind(this);
  }
  goBack() {
    this.props.history.push('/dashboard');
  }
  goBackProfile() {
    this.props.history.push('/dashboard/settings/profile');
  }
  render() {
    var urlname = this.props.match.params.name;
    const currentUrl = this.props.location.pathname;
    const settingsChildren = (url) => {

      switch (url) {
        case 'profile':
          return <Profile />;
        case 'servicetimes':
          return <ServiceTimes />;
        case 'gallery':
          return <Gallery />;
        case 'gift_settings':
          return <GiftSettings />;
        case 'membership':
          return <Membership />;
        case 'adminpanel_edit':
          return <AdminPanelEdit />;
        default:
          return <Profile />;
      }
    }
    return (
      <div className="settings customBackground">
        <DHeader />
        <DSubHeader currentUrl={currentUrl} />
        <div className="card-wrapper">
          <div className="settings-wrapper allcard customWidth">
            <div className="back">
              { urlname === 'adminpanel_edit' ? 
                  <button onClick={this.goBackProfile}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button> :
                  <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button>
              }              
            </div>
            <div className="settings-tabs">
              <ul className="nav nav-tabs">
                {
                  settingTabs.map((settingTab, i) => {
                    const active = urlname === settingTab.url ? 'active' : '';
                    return (
                      <SettingsTab
                        key={i}
                        tabName={settingTab.tabName}
                        url={settingTab.url}
                        selected={active}
                      />
                    )
                  }
                  )
                }
              </ul>
              <div className="tab-content">              
                {settingsChildren(urlname)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SettingsTab extends Component {
  render() {
    const { tabName, url, selected } = this.props;
    return (
      <li className="nav-item">
        <Link
          className={url + " nav-link " + selected}
          to={`/dashboard/settings/${url}`}>{tabName}</Link>
      </li>
    );
  }
}

export default Settings;
