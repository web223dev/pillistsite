import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const style = {
  tstyle: { height: 50 },
  floatstyle: { top: 16 },
  inputstyle: { marginTop: 4 }
}

class StepOne extends Component {
  render() {
    const { changeStep } = this.props;
    return (
      <div className="step1">
        <TextField
          floatingLabelText="Church/Ministry Name"
          className="cmName steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Pastor Name"
          className="pastorName steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Church Email address"
          className="churchEmail steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <TextField
          floatingLabelText="Church Website (Optional)"
          className="churchWebsite steps_input"
          fullWidth
          style={style.tstyle}
          floatingLabelStyle={style.floatstyle}
          inputStyle={style.inputstyle}
        />
        <button className="button gradient button--signup-first-step" onClick={changeStep}>Next</button>
      </div>
    );
  }
}

export default StepOne;