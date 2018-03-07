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

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const { changeStep } = this.props;
    return (
      <div>
        <TextField
          floatingLabelText="First name"
          className="firstName steps_input inputhalf"
          fullWidth
          style={inputhalf}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Last name"
          className="lastName steps_input"
          fullWidth
          style={selecthalf}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Personal Email address"
          className="pEmail steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Password"
          className="su3-psw steps_input"
          type="password"
          autoComplete="current-password"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Re-enter Password"
          className="su3-repsw steps_input"
          type="password"
          autoComplete="current-password"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={false}          
          className="su-ques steps_input"
          style={{width: '100%'}}
          labelStyle={{top: 6, padding: 0, lineHeight: '50px'}}
          iconStyle={{top: 8, right: 0, fill: '#ff8361'}}
          underlineStyle={{width: '100%', margin: 0}}
          iconButton={dropdownIcon}
        >
          <MenuItem value={1} primaryText="How did you find out about us?" />
          <MenuItem value={2} primaryText="Ques1" />
          <MenuItem value={3} primaryText="Ques2" />
          <MenuItem value={4} primaryText="Ques3" />
        </DropDownMenu>
        {/* <TextField
          id="first_Name"
          label="First name"
          className="firstName steps_input"
          margin="normal"
          fullWidth
        />
        <TextField
          id="last_Name"
          label="Last name"
          className="lastName steps_input selecthalf"
          margin="normal"
          fullWidth
        />
        <TextField
          id="p_Email"
          label="Personal Email address"
          className="pEmail steps_input"
          margin="normal"
          fullWidth
        />
        <TextField
          id="su3_psw"
          label="Password"
          className="su3-psw steps_input"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        <TextField
          id="su3_repsw"
          label="Re-enter Password"
          className="su3-repsw steps_input"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />        
        <FormControl className="su-ques steps_input" fullWidth>
          <Select
            value={this.state.ques}
            onChange={this.handleChange}
            name="ques"
            displayEmpty
            className="su-ques-select"
          >
            <MenuItem value="">
              <em>How did you find out about us?</em>
            </MenuItem>
            <MenuItem value="q1">Ques1</MenuItem>
            <MenuItem value="q2">Ques2</MenuItem>
            <MenuItem value="q3">Ques3</MenuItem>
          </Select>
        </FormControl> */}
        <button className="button gradient button--signup-first-step" onClick={changeStep}>Submit</button>
      </div>
    );
  }
}

export default StepThree;