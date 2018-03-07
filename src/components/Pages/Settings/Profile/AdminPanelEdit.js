import React, { Component } from 'react';
import AdminPanelAdd from './AdminPanelAdd';
import APTableDatas from './APTableDatas';
import update from 'react-addons-update';
import adminstar from '../../../Images/groupstar.png';

class AdminPanelEdit extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      APTDatas: APTableDatas,
      isClicked : false,
      isClickedAdd: false,
      isClickedEdit: false,
      selectedkey : -1
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleToggleAdd = this.handleToggleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(key){
    this.setState({
      selectedkey: key
    })
  }

  handleRemove(){
    if(this.state.selectedkey < 0){
      return;
    }
    this.setState({
      APTDatas: update( this.state.APTDatas, {
        $splice: [[this.state.selectedkey, 1]]
      }),
      selectedkey: -1
    });
  }

  handleToggleAdd(){
    this.setState({
      isClicked: true,
      isClickedAdd: true,
      isClickedEdit: false
    })
  }

  handleToggleEdit(){
    this.setState({
      isClicked: true,
      isClickedAdd: false,
      isClickedEdit: true
    })
  }
  
  render() {
    const { isClicked, APTDatas, isClickedAdd, isClickedEdit, selectedkey } = this.state;
    var selectedData = {};
    selectedData = APTDatas[selectedkey];
    return (
      <div className="adminPanelEdit">
        <div className="card">
          <div className="card-header">
            <div className="title">              
              <p>Admin Panel {isClicked ? "Add" : "Edit"}</p>
            </div>            
            <button className="btn-red" onClick={this.handleToggleAdd}>Add Admin</button>
          </div>
          <div className="card-block">
            <table className="table table-bordered adminPanel-table">
              <thead>
                <tr>
                  <th>Administrator Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  APTDatas.map((apTableData, i) =>
                    <APTableItem
                      key={i}
                      apTableData={apTableData}                      
                      handleClick={() => this.handleClick(i)}
                      handleRemove={this.handleRemove}
                      handleToggleEdit={this.handleToggleEdit}
                    />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        { isClicked ? 
          <AdminPanelAdd 
          isClickedEdit={isClickedEdit} 
          isClickedAdd={isClickedAdd} 
          isClicked={isClicked}
          selectedData={selectedData}
          /> : null}
      </div>
    );
  }
}

class APTableItem extends Component {
  render() {
    const { adminName, adminImg, adminstarImg, email, phone, role } = this.props.apTableData;
    const { handleClick, handleRemove, handleToggleEdit } = this.props;
    return (
      <tr>
        <td>
          <img className="userImg" src={adminImg} alt="userImg" />
          {adminstarImg === 0 ? null : (<img className="userStar" src={adminstar} alt="Admin Star" />)}
          <span className="username">{adminName}</span>
        </td>
        <td className="table-email">{email}</td>
        <td className="table-phonenumber">{phone}</td>
        <td className="table-group">
          <span>{role}</span>
        </td>
        {/* <td className="table-action" onMouseMove={handleClick} onClick={handleClick}> */}
        <td className="table-action" onClick={handleClick}>
          <span onClick={handleToggleEdit}>Edit</span>
          <span onClick={handleRemove}>Delete</span>
        </td>
      </tr>
    );
  }
}

export default AdminPanelEdit;