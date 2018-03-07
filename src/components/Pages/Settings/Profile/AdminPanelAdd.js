import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

const adminUserInfos = [
  {
    name: 'John Lastname 01',
    email: 'johndoe1@gmail.com',
    username: 'John1'
  },
  {
    name: 'John Lastname 02',
    email: 'johndoe2@gmail.com',
    username: 'John2'
  },
  {
    name: 'John Lastname 03',
    email: 'johndoe3@gmail.com',
    username: 'John3'
  },
  {
    name: 'John Lastname 04',
    email: 'johndoe4@gmail.com',
    username: 'John4'
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return adminUserInfos.filter(adminUserInfo => regex.test(adminUserInfo.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class AdminPanelAdd extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      selected: null
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      selected: suggestion
    });
  };

  render() {
    const { value, suggestions, selected } = this.state;
    const { isClickedEdit, isClickedAdd, isClicked, selectedData } = this.props;
    const inputProps = {
      placeholder: "Search by Name / ID",
      value,
      onChange: this.onChange
    };

    const AddState = (
      <div>
        {
          selected === null ?
            (
              <div>
                <div className="input-group">
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    onSuggestionSelected={this.onSuggestionSelected}
                    inputProps={inputProps} />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Search</button>
                  </span>
                </div>
                <p>A person must signup as a user before they can be added as an admin.</p>
              </div>
            ) : (
              <div className="apa-selected-user">
                <p className="apas_name"><span>{selected.username}</span></p>
                <p className="apas_email">{selected.email}</p>
                <div className="apas_inputs row">
                  <span>Phone Number:</span>
                  <input type="text" className="form-control col-md-4 apas-areacode" placeholder="(Area Code)" />
                  <input type="text" className="form-control col-md-8 apas-pnumber" placeholder="Phone number" />
                </div>
              </div>
            )
        }
      </div>
    );
    // const areacode = selectedData.phone.slice(1, 4);
    // const phonenumber = selectedData.phone.slice(5);
    const EditState = (
      <div className="apa-selected-user">
        <p className="apas_name"><span>{selectedData.adminName}</span></p>
        <p className="apas_email">{selectedData.email}</p>
        <div className="apas_inputs row">
          <span>Phone Number:</span>
          <input type="text" className="form-control col-md-4 apas-areacode" placeholder="(Area Code)" />
          <input type="text" className="form-control col-md-8 apas-pnumber" placeholder="Phone number" />
        </div>
      </div>
    );
    
    let showresult = null;
    if(isClickedEdit && isClicked){
      showresult = EditState;
    } else if(isClickedAdd){
      showresult = AddState;
    } else {
      showresult = EditState;
    }
       
    return (
      <div className="adminPanel_add">
        <div className="row search-func">
          <div className="col-lg-5 search-box">
            {
              showresult
            }
          </div>
          <div className="col-lg-7 apa-permission">
            <p>Permission</p>
            <div className="row checkBox">
              <div className="col-md-6">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Prayer Request
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Gift Managment
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Calendar Events Edit
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Group Admin View
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Settings
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Profile Page
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Gift Settings
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Select all
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-red savebtn">Save</button>
        </div>
      </div>
    );
  }
}

const propTypes = {
  selectedData: PropTypes.object,
  isClickedAdd: PropTypes.bool,
}

const defaultProps = {
  selectedData: {
    adminName: '',
    email: ''
  }  
}

AdminPanelAdd.propTypes = propTypes;
AdminPanelAdd.defaultProps = defaultProps;

export default AdminPanelAdd;