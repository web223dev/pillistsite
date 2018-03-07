import React, { Component } from 'react';
import MonServices from './MonServices';
import TueServices from './TueServices';
import WedServices from './WedServices';
import ThuServices from './ThuServices';
import FriServices from './FriServices';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../style/ServiceTime.css';
import styles from '../../../../dropdownstyle';

const style = {
  height: '50px',
  width: '100%',
  textAlign: 'center'
}

class ServiceTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div className="serviceTimes">
        <div className="st-dropdown">
          <p className="st-show">Show:</p>
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={false}
            className="filter-group"
            style={dropdownStyle}
            labelStyle={styles.labelStyle}
            iconStyle={styles.btnStyle}
            underlineStyle={{ border: 'none' }}
            iconButton={dropdownIcon}
          >
            <MenuItem value={1} primaryText="All Days" />
            <MenuItem value={2} primaryText="Tuesday" />
            <MenuItem value={3} primaryText="Wednesday" />
            <MenuItem value={4} primaryText="Thursday" />
            <MenuItem value={5} primaryText="Friday" />
            <MenuItem value={6} primaryText="Monday" />
          </DropDownMenu>
        </div>
        <MonServices style={style} />
        <TueServices style={style} />
        <WedServices style={style} />
        <ThuServices style={style} />
        <FriServices style={style} />
        <div className="st-update-btn">
          <button className="st-update">Update</button>
          <button className="st-cancel">Cancel</button>
        </div>
      </div>
    );
  }
}

const dropdownIcon = (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  <path d="M0-.75h24v24H0z" fill="none" />
</svg>);

const dropdownStyle = {
  width: '130px',
  height: '36px',
  background: '#cfcfcf',
  borderRadius: '30px',
  paddingLeft: 16,
}

export default ServiceTimes;