import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  tstyle: { height: 50 },
  floatstyle: { top: 16 },
  inputstyle: { marginTop: 4 }
}
const inputhalf = {
  width: '47%',
  verticalAlign: 'top',
  marginRight: '3%',
  height: 50
}
const selecthalf = {
  display: 'inline-block',
  width: '47%',
  marginLeft: '3%',
  height: 50
}

const dropdownIcon = (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  <path d="M0-.75h24v24H0z" fill="none" />
</svg>);

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateValue: 1,
      countryValue: 1
    };
  }
  handleChangeState = (event, index, value) => this.setState({ stateValue: value });
  handleChangeCountry = (event, index, value) => this.setState({ countryValue: value });

  render() {
    const { changeStep } = this.props;
    return (
      <div className="step2">
        <TextField
          floatingLabelText="Church Phone Number"
          className="cpNumber steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Address 01"
          className="Addr1 steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Address 02"
          className="Addr2 steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="City"
          className="su-city steps_input"
          fullWidth
          style={inputhalf}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <DropDownMenu
          value={this.state.stateValue}
          onChange={this.handleChangeState}
          autoWidth={false}
          className="su-state selecthalf"
          style={selecthalf}
          labelStyle={{ top: 6, padding: 0 }}
          iconStyle={{ top: 10, right: 0 , fill: '#ff8361'}}
          underlineStyle={{ width: '100%', margin: 0 }}
          iconButton={dropdownIcon}
        >
          <MenuItem value={1} primaryText="State" />
          <MenuItem value={2} primaryText="State1" />
          <MenuItem value={3} primaryText="State2" />
          <MenuItem value={4} primaryText="State3" />
        </DropDownMenu>
        <TextField
          floatingLabelText="Zipcode"
          className="su-zipcode steps_input"
          fullWidth
          style={inputhalf}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <DropDownMenu
          value={this.state.countryValue}
          onChange={this.handleChangeCountry}
          autoWidth={false}
          className="su-country selecthalf"
          style={selecthalf}
          labelStyle={{ top: 6, padding: 0 }}
          iconStyle={{ top: 10, right: 0 , fill: '#ff8361'}}
          underlineStyle={{ width: '100%', margin: 0 }}
          iconButton={dropdownIcon}
        >
          <MenuItem value={1} primaryText="Country" />
          <MenuItem value={2} primaryText="Country1" />
          <MenuItem value={3} primaryText="Country2" />
          <MenuItem value={4} primaryText="Country3" />
        </DropDownMenu>
        <button className="button gradient button--signup-second-step" onClick={changeStep}>Next</button>
      </div>
    );
  }
}

export default StepTwo;