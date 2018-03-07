import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DHeader from '../Dashboard/DHeader';
import DSubHeader from '../Dashboard/DSubHeader';
import tableDatas from './tableDatas';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import LeftArrow from '../../Images/left.png';
import RightArrow from '../../Images/right.png';

import Usermanagement from '../../Images/Usermanagement.png';
import './style/styles.css';
import styles from '../../../dropdownstyle'

const dropdownStyle = {
  width: '215px',
  height: '36px',
  background: '#cfcfcf',
  borderRadius: '30px',
  paddingLeft: 16,
  marginLeft: '14px'
}
const labelStyle = {
  color: '#fff',
  fontSize: '12px',
  top: 0,
  padding: 0,
  lineHeight: '36px',
  height: 36,
  textAlign: 'left'
}

const dropdownIcon = (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  <path d="M0-.75h24v24H0z" fill="none" />
</svg>);

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      FGvalue: 1
    }
    this.goBack = this.goBack.bind(this);
  }

  handleChange = (event, index, value) => this.setState({ value });
  handleChangeFG = (event, index, value) => this.setState({ FGvalue: value });

  goBack() {
    this.props.history.push('/dashboard');
  }
  render() {    
    const currentUrl = this.props.location.pathname;    
    return (
      <div className="newSubscribe customBackground">
        <DHeader />
        <DSubHeader currentUrl={currentUrl} />
        <div className="card-wrapper">
          <div className="n-mainTable allcard customWidth">
            <div className="back">
              <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <img src={Usermanagement} alt="User Management" />
                  <p>User Management</p>
                </div>
                <button className="btn-red">Export To Excel</button>
              </div>
              <div className="card-block">
                <div className="row search-func">
                  <div className="col-md-4 search-box">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by Name / ID" />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Search</button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8 filter-box">
                    <DropDownMenu
                      value={this.state.FGvalue}
                      onChange={this.handleChangeFG}
                      autoWidth={false}
                      className="filter-group"
                      style={dropdownStyle}
                      labelStyle={labelStyle}
                      iconStyle={styles.btnStyle}
                      underlineStyle={{ border: 'none' }}
                      iconButton={dropdownIcon}
                      maxHeight={200}
                    >
                      <MenuItem value={1} primaryText="Filter by Group" />
                      <MenuItem value={2} primaryText="Member" />
                      <MenuItem value={3} primaryText="Non-Member" />
                      <MenuItem value={4} primaryText="Unknown" />
                      <MenuItem value={5} primaryText="Honored" />
                      <MenuItem value={6} primaryText="Vault" />
                    </DropDownMenu>
                    <DropDownMenu
                      value={this.state.value}
                      onChange={this.handleChange}
                      autoWidth={false}
                      className="filter"
                      style={dropdownStyle}
                      labelStyle={labelStyle}
                      iconStyle={styles.btnStyle}
                      underlineStyle={{ border: 'none' }}
                      iconButton={dropdownIcon}
                      maxHeight={200}
                    >
                      <MenuItem value={1} primaryText="Filter by" />
                      <MenuItem value={2} primaryText="Security" />
                      <MenuItem value={3} primaryText="Choir" />
                      <MenuItem value={4} primaryText="Parkinglot Security" />
                      <MenuItem value={5} primaryText="Kitchen Stufff" />
                      <MenuItem value={6} primaryText="Travelling Choir" />
                    </DropDownMenu>
                  </div>
                </div>
                <table className="table table-bordered n-main-table">
                  <thead>
                    <tr>
                      <th>Subscribe</th>
                      <th>Email</th>
                      <th>Group</th>
                      <th>Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tableDatas.map((tableData, i) =>
                        <TableItem
                          key={i}
                          subscribe={tableData.subscribe}
                          subImage={tableData.subImage}
                          substarImg={tableData.substarImg}
                          email={tableData.email}
                          group={tableData.group}
                          groupPlus={tableData.groupPlus}
                          member={tableData.member} />
                      )
                    }
                  </tbody>
                </table>
                <div className="n-table-pagination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <img src={LeftArrow} alt="Left" />
                          {/* <i className="fa fa-angle-left" aria-hidden="true"></i> */}
                        </Link>
                      </li>
                      <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">6</Link></li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <img src={RightArrow} alt="Right" />
                          {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                        </Link>
                      </li>
                    </ul>
                    <div className="table-show">
                      <span>Show:</span>
                      <ul>
                        <li>12</li>
                        <li>25</li>
                        <li>50</li>
                        <li>100</li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showgroupdetail: false
    }
  }

  handleClickgroup = () => {
    this.setState(prev => ({ showgroupdetail: !prev.showgroupdetail }));
  }

  render() {
    const { subscribe, subImage, substarImg, email, group, groupPlus, member } = this.props;
    const { showgroupdetail } = this.state;
    return (
      <tr>
        <td>
          <img className="userImg" src={subImage} alt="userImg" />
          <img className="userStar" src={substarImg} alt="userStar" />
          <span className="username">{subscribe}</span>
        </td>
        <td className="table-email">{email}</td>
        <td className="table-group">
          {group}
          {groupPlus === 0 ? null : <span onClick={this.handleClickgroup}>+{groupPlus}</span>}
          {showgroupdetail ? <GroupPlusDetail /> : null}
        </td>
        <td className="table-member">{member}</td>
      </tr>
    );
  }
}

class GroupPlusDetail extends Component {
  render() {
    return (
      <div className="groupPlusDetail">
        <p>Group 02, Group 03, Group 04, Group 05, Group 06</p>
      </div>
    );
  }
}

export default UserManagement;