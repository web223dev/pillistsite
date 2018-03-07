import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DHeader from '../Dashboard/DHeader';
import DSubHeader from '../Dashboard/DSubHeader';
import umtableDatas from './umtableDatas';
import Modal from "react-responsive-modal";

import Usermanagement from '../../Images/Usermanagement.png';
import groupstar from '../../Images/groupstar.png';
import LeftArrow from '../../Images/left.svg';
import RightArrow from '../../Images/right.svg';
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

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push('/dashboard');
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;    
    return (
      <div className="user-management customBackground">
        <DHeader />
        <DSubHeader />
        <div className="card-wrapper">
          <div className="um-table-card allcard customWidth">
            <div className="back">
              <button onClick={this.goBack}><i className="fa fa-angle-left" aria-hidden="true"></i> back</button>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="title">
                  <img src={Usermanagement} alt="User Management" />
                  <p>User Management</p>
                </div>
                <button className="btn-red" onClick={this.onOpenModal}>Vault</button>
                <Modal 
                  open={open} 
                  onClose={this.onCloseModal} 
                  styles={modalstyle} 
                  showCloseIcon={false}
                  little>
                  <div className="um-vault-modal">
                    <p>Are you sure you want to vault?</p>
                    <button className="button border--red neutral">Yes</button>
                    <button className="button border--red neutral" onClick={this.onCloseModal}>No</button>
                  </div>
                </Modal>
              </div>
              <div className="card-block">
                <div className="row search-func">
                  <div className="col-md-6 search-box">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by Name" />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Search</button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 filter-box">
                    <div className="filter-group btn-group">
                      <p className="dropdown-comment">Filter by Group</p>
                      <button type="button" className="btn dropdown-toggle dropdown-toggle-split dropdown-actionbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">Unique ID</button>
                        <button className="dropdown-item" type="button">Subscriber</button>
                        <button className="dropdown-item" type="button">Email Address</button>
                        <button className="dropdown-item" type="button">Member</button>
                        <button className="dropdown-item" type="button">Non-Member</button>
                        <button className="dropdown-item" type="button">Unknown</button>
                        <button className="dropdown-item" type="button">Honored Member</button>
                        <button className="dropdown-item" type="button">Vault</button>
                      </div>
                    </div>
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
                      umtableDatas.map((umtableData, i) =>
                        <UMTableItem
                          key={i}
                          subscribe={umtableData.subscribe}
                          subImage={umtableData.subImage}
                          substarImg={umtableData.substarImg}
                          email={umtableData.email}
                          group={umtableData.group}
                          member={umtableData.member}
                        />
                      )
                    }
                  </tbody>
                </table>
                <div className="n-table-pagination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <img src={LeftArrow} alt="Left"/>
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
                          <img src={RightArrow} alt="Right"/>
                          {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                        </Link>
                      </li>
                    </ul>
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

class UMTableItem extends Component {
  render() {
    const { subscribe, subImage, substarImg, email, group, member } = this.props;
    return (
      <tr>
        <td className="um-table-subscribe-wrap">
          <input type="checkbox" className="form-check-input um-table-checkbox" id="exampleCheck1" />
          <div className="um-table-subscribe">
            <div className="um-imgWrapper">
              {substarImg === 0 ? null : (<img className="userStar" src={groupstar} alt="userStar" />)}
              <img className="userImg" src={subImage} alt="userImg" />
            </div>
            <span className="username">{subscribe}</span>
          </div>
        </td>
        <td className="um-table-email">{email}</td>
        <td className="um-table-group">{group}</td>
        <td className="um-table-member">{member}</td>
      </tr>
    );
  }
}

export default UserManagement;