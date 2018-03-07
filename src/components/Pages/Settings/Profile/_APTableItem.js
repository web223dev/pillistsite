import React, { Component } from 'react';
import PropTypes from 'prop-types';
import adminstar from '../../../Images/groupstar.png';

const propTypes = {
  selectedData: PropTypes.object,
  handleRemove: PropTypes.func,
  onEdit: PropTypes.func
}

const defaultProps = {
  selectedData: {
    adminName: '',
    email: '',
    phone: ''
  },
  handleRemove: () => {console.error('handleRemove is not defined')},
  onEdit: () => {console.error('onEdit is not defined')}
}

class APTableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      adminName: '',
      email: '',
      phone: ''
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleEdit() {
    this.props.onEdit(this.state.adminName, this.state.email, this.state.phone)
  }

  handleToggleEdit() {
    if (!this.state.isEdit) {
      this.setState({
        adminName: this.props.selectedData.adminName,
        email: this.props.selectedData.email,
        phone: this.props.selectedData.phone
      })
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleKeypress(e){
    if(e.charCode === 13){
      this.handleToggleEdit();
    }
  }
  

  render() {
    const { adminName, adminImg, adminstarImg, email, phone, role } = this.props.apTableData;
    const { handleClick, handleRemove } = this.props;
    const defaultname = (
      <span className="username">{adminName}</span>
    )
    const editname = (
      <input
        type="text"
        name="adminName"
        className="nameEdit"
        placeholder="name"
        onChange={this.handleChange}
        value={this.state.adminName}
        onKeyPress={this.handleKeypress}
      />
    )
    const defaultemail = email;
    const editemail = (
      <input
        type="text"
        name="email"
        className="emailEdit"
        placeholder="name"
        onChange={this.handleChange}
        value={this.state.email}
        onKeyPress={this.handleKeypress}
      />
    )
    const defaultphone = phone;
    const editphone = (
      <input
        type="text"
        name="phone"
        className="phoneEdit"
        placeholder="name"
        onChange={this.handleChange}
        value={this.state.phone}
        onKeyPress={this.handleKeypress}
      />
    )
    const viewname = this.state.isEdit ? editname: defaultname;
    const viewemail = this.state.isEdit ? editemail: defaultemail;
    const viewphone = this.state.isEdit ? editphone: defaultphone;
    const style= this.state.isEdit ? {pointerEvents: 'none'} : null;
    return (
      <tr>
        <td>
          <img className="userImg" src={adminImg} alt="userImg" />
          {adminstarImg === 0 ? null : (<img className="userStar" src={adminstar} alt="Admin Star" />)}
          {viewname}
        </td>
        <td className="table-email">{viewemail}</td>
        <td className="table-phonenumber">{viewphone}</td>
        <td className="table-group">
          <span>{role}</span>
        </td>
        <td className="table-action" onMouseMove={handleClick} onClick={handleClick}>
          <span onClick={this.handleToggleEdit}>Edit</span>
          <span onClick={handleRemove} style={style}>Delete</span>
        </td>
      </tr>
    );
  }
}

APTableItem.propTypes = propTypes;
APTableItem.defaultProps = defaultProps;

export default APTableItem;