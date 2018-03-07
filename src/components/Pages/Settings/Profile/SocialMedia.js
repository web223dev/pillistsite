import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../../../Images/fackbook-icon.png';
import Twitter from '../../../Images/twitter-logo.png';
import adminstar from '../../../Images/groupstar.png';

const SMTableDatas = [{
  adminName: 'Jane Doe',
  adminImg: require('../../../Images/JaneDoe.png'),
  adminstarImg: 0,
  email: 'jdoe123456@gmail.com',
  role: 'Admin'
}, {
  adminName: 'Jane Doe',
  adminImg: require('../../../Images/JaneDoe.png'),
  adminstarImg: 0,
  email: 'jdoe123456@gmail.com',
  role: 'Super Admin'
}, {
  adminName: 'Jane Doe',
  adminImg: require('../../../Images/JaneDoe.png'),
  adminstarImg: 1,
  email: 'jdoe123456@gmail.com',
  role: 'Admin'
}, {
  adminName: 'Jane Doe',
  adminImg: require('../../../Images/JaneDoe.png'),
  adminstarImg: 0,
  email: 'jdoe123456@gmail.com',
  role: 'Admin'
}]

class SocialMedia extends Component {
  render() {
    const { radminEdit } = this.props;
    return (
      <div className="socialmedia">
        <p>Social Media</p>
        <div className="row social-input">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-btn">
                <img src={Facebook} alt="Facebook" />
              </span>
              <input type="text" className="form-control" placeholder="EX: www.facebook.com/FaithMo" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-btn">
                <img src={Twitter} alt="Facebook" />
              </span>
              <input type="text" className="form-control" placeholder="EX: @FaithMo" />
            </div>
          </div>
        </div>
        <div className="col-md-12 social-bottom">
          <div className="social-update-btn">
            <button className="social-update">Update</button>
            <button className="social-cancel">Cancel</button>
            <p>Add your social links to allow your Subscribers to follow you though their Activities Feed</p>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="title">
                Admin Panel
              </div>
              <button className="btn-red" onClick={radminEdit}>Edit</button>
            </div>
            <div className="card-block">
              <table className="table table-bordered social-main-table">
                <thead>
                  <tr>
                    <th>Administrator Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    SMTableDatas.map((smTableData, i) =>
                      <SMTableItem
                        key={i}
                        adminName={smTableData.adminName}
                        adminImg={smTableData.adminImg}
                        adminstarImg={smTableData.adminstarImg}
                        email={smTableData.email}
                        role={smTableData.role}
                      />
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SMTableItem extends Component {
  render() {
    const { adminName, adminImg, adminstarImg, email, role } = this.props;
    return (
      <tr>
        <td>
          <img className="userImg" src={adminImg} alt="userImg" />
          {adminstarImg === 0 ? null : (<img className="userStar" src={adminstar} alt="Admin Star" />)}
          <span className="username">{adminName}</span>
        </td>
        <td className="table-email">{email}</td>
        <td className="table-group">
          <Link to="#">{role}</Link>
        </td>
      </tr>
    );
  }
}

export default SocialMedia;